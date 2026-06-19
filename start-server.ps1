# Semiconductor AI Academy TCP Socket Server
# Robust to browser aborts and connection resets
$port = 8000
$listener = New-Object System.Net.Sockets.TcpListener([System.Net.IPAddress]::Any, $port)

try {
    $listener.Start()
    Write-Host "`n==========================================================" -ForegroundColor Green
    Write-Host " Semiconductor AI Academy TCP Server 가동 중!" -ForegroundColor Green
    Write-Host " 접속 주소: http://localhost:$port/" -ForegroundColor Cyan
    Write-Host "==========================================================`n" -ForegroundColor Green

    $currentDir = Get-Item $PSScriptRoot
    while ($true) {
        $client = $null
        try {
            $client = $listener.AcceptTcpClient()
            $stream = $client.GetStream()
            
            $reader = New-Object System.IO.StreamReader($stream)
            $requestLine = $reader.ReadLine()
            if ([string]::IsNullOrEmpty($requestLine)) {
                $client.Close()
                continue
            }
            
            # Parse path
            $parts = $requestLine.Split(' ')
            if ($parts.Length -lt 2) {
                $client.Close()
                continue
            }
            
            $rawPath = $parts[1]
            $rawPath = $rawPath.Split('?')[0] # strip query parameters
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
                
                $header = "HTTP/1.1 200 OK`r`nContent-Type: $contentType`r`nContent-Length: $($bytes.Length)`r`nConnection: close`r`n`r`n"
                $headerBytes = [System.Text.Encoding]::UTF8.GetBytes($header)
                
                $stream.Write($headerBytes, 0, $headerBytes.Length)
                $stream.Write($bytes, 0, $bytes.Length)
            } else {
                $errBody = "404 Not Found"
                $errBytes = [System.Text.Encoding]::UTF8.GetBytes($errBody)
                $header = "HTTP/1.1 404 Not Found`r`nContent-Type: text/plain`r`nContent-Length: $($errBytes.Length)`r`nConnection: close`r`n`r`n"
                $headerBytes = [System.Text.Encoding]::UTF8.GetBytes($header)
                
                $stream.Write($headerBytes, 0, $headerBytes.Length)
                $stream.Write($errBytes, 0, $errBytes.Length)
            }
            
            $stream.Close()
            $client.Close()
        } catch {
            Write-Warning "Connection error ignored: $_"
            if ($client) {
                $client.Close()
            }
        }
    }
} catch {
    Write-Error $_
} finally {
    if ($listener) {
        $listener.Stop()
    }
}
