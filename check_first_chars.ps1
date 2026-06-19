$htmlPath = "C:\Users\Admin\.gemini\antigravity\scratch\semiconductor-academy\index.html"
$diffPath = "C:\Users\Admin\.gemini\antigravity\brain\09fd60e3-8314-47e7-8c8b-f3dfa3b70204\scratch\diff_index_utf8.txt"

$htmlBytes = [System.IO.File]::ReadAllBytes($htmlPath)
$diffBytes = [System.IO.File]::ReadAllBytes($diffPath)

Write-Host "HTML First 10 bytes:"
for ($i = 0; $i -lt 10 -and $i -lt $htmlBytes.Length; $i++) {
    Write-Host ("Byte {0}: {1}" -f $i, $htmlBytes[$i])
}

Write-Host "`nDiff First 10 bytes:"
for ($i = 0; $i -lt 10 -and $i -lt $diffBytes.Length; $i++) {
    Write-Host ("Byte {0}: {1}" -f $i, $diffBytes[$i])
}
