$htmlPath = "C:\Users\Admin\.gemini\antigravity\scratch\semiconductor-academy\index.html"
$diffPath = "C:\Users\Admin\.gemini\antigravity\brain\09fd60e3-8314-47e7-8c8b-f3dfa3b70204\scratch\diff_index_utf8.txt"

# Read files
$html = [System.IO.File]::ReadAllText($htmlPath, [System.Text.Encoding]::UTF8)
$diff = [System.IO.File]::ReadAllText($diffPath, [System.Text.Encoding]::UTF8)

# Normalize all CRLFs to LFs
$html = $html -replace "\r\n", "`n"
$diff = $diff -replace "\r\n", "`n"

# Write back as pure UTF-8
[System.IO.File]::WriteAllText($htmlPath, $html, [System.Text.Encoding]::UTF8)
[System.IO.File]::WriteAllText($diffPath, $diff, [System.Text.Encoding]::UTF8)

Write-Host "Newlines normalized to LF!"
