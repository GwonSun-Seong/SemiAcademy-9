# Semiconductor AI Academy Local Server
# Run this script with PowerShell to host the project on http://localhost:8000

$port = 8000
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")

try {
    $listener.Start()
    Write-Host "`n==========================================================" -ForegroundColor Green
    Write-Host " Semiconductor AI Academy Local Server 가동 중!" -ForegroundColor Green
    Write-Host " 접속 주소: http://localhost:$port/" -ForegroundColor Cyan
    Write-Host " 서버를 종료하려면 이 창에서 [Ctrl + C]를 누르세요." -ForegroundColor Yellow
    Write-Host "==========================================================`n" -ForegroundColor Green

    $currentDir = Get-Item $PSScriptRoot
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $rawPath = $request.Url.LocalPath
        if ($rawPath -eq "/") { $rawPath = "/index.html" }
        
        $filePath = Join-Path $currentDir.FullName $rawPath.TrimStart('/')
        if (Test-Path $filePath -PathType Leaf) {
            $bytes = [System.IO.File]::ReadAllBytes($filePath)
            
            # MIME Type Mapping
            $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
            $contentType = "text/plain"
            if ($ext -eq ".html" -or $ext -eq ".htm") { $contentType = "text/html; charset=utf-8" }
            elseif ($ext -eq ".css") { $contentType = "text/css" }
            elseif ($ext -eq ".js") { $contentType = "application/javascript" }
            elseif ($ext -eq ".png") { $contentType = "image/png" }
            elseif ($ext -eq ".jpg" -or $ext -eq ".jpeg") { $contentType = "image/jpeg" }
            elseif ($ext -eq ".svg") { $contentType = "image/svg+xml" }
            
            $response.ContentType = $contentType
            $response.ContentLength64 = $bytes.Length
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            $response.StatusCode = 404
            $errBytes = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found")
            $response.ContentLength64 = $errBytes.Length
            $response.OutputStream.Write($errBytes, 0, $errBytes.Length)
        }
        $response.Close()
    }
} catch {
    Write-Error $_
} finally {
    if ($listener) {
        $listener.Stop()
    }
}
