$htmlPath = "C:\Users\Admin\.gemini\antigravity\scratch\semiconductor-academy\index.html"
$lines = Get-Content $htmlPath -Encoding UTF8
Write-Host "Total lines: $($lines.Length)"
for ($i = 3910; $i -le 3925; $i++) {
    if ($i -lt $lines.Length) {
        $l = $lines[$i]
        Write-Host "Index $i - Content: '$l'"
    }
}
