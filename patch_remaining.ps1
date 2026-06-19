$htmlPath = "C:\Users\Admin\.gemini\antigravity\scratch\semiconductor-academy\index.html"
$lines = Get-Content $htmlPath -Encoding UTF8

$found = $false
for ($i = 0; $i -lt $lines.Length; $i++) {
    if ($lines[$i] -match 'className.*order-b') {
        Write-Host "Found target at line index: $i"
        $lines[$i] = '                        className="order-b border-slate-900/60 cursor-pointer transition-colors hover:bg-slate-900/20"'
        $found = $true
        break
    }
}

if ($found) {
    Set-Content -Path $htmlPath -Value $lines -Encoding UTF8
    Write-Host "Direct line replacement succeeded!"
} else {
    Write-Host "Target line not found using generic regex match."
}
