$json = Get-Content 'C:\Users\Admin\.gemini\antigravity\scratch\semiconductor-academy\recovered_line.json' -Raw -Encoding UTF8
$obj = ConvertFrom-Json $json
$scriptText = $obj.tool_calls[0].args.CodeContent
[System.IO.File]::WriteAllText('C:\Users\Admin\.gemini\antigravity\scratch\semiconductor-academy\integrate_app.ps1', $scriptText, [System.Text.Encoding]::UTF8)
Write-Host "integrate_app.ps1 successfully recovered!"
