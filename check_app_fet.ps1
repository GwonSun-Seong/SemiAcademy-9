$htmlPath = "C:\Users\Admin\.gemini\antigravity\scratch\semiconductor-academy\index.html"
$content = [System.IO.File]::ReadAllText($htmlPath, [System.Text.Encoding]::UTF8)

# Find positions with simpler matching
$appStart = $content.IndexOf("const App")
$fetStart = $content.IndexOf("const FetExplorerTab")

if ($appStart -eq -1 -or $fetStart -eq -1) {
    Write-Host "Failed to find App ($appStart) or FetExplorerTab ($fetStart)"
    exit
}

$scriptEnd = $content.IndexOf("</script>", $fetStart)

Write-Host "App Start Index: $appStart"
Write-Host "FET Start Index: $fetStart"
Write-Host "Script End Index: $scriptEnd"

# 1. App component text (from App start to FET start)
if ($appStart -ne -1 -and $fetStart -gt $appStart) {
    $appText = $content.Substring($appStart, $fetStart - $appStart)
    $oB = 0; $cB = 0; $oP = 0; $cP = 0
    foreach ($c in $appText.ToCharArray()) {
        if ($c -eq '{') { $oB++ }
        elseif ($c -eq '}') { $cB++ }
        elseif ($c -eq '(') { $oP++ }
        elseif ($c -eq ')') { $cP++ }
    }
    Write-Host "App Component -- Braces={Open=$oB, Close=$cB, Diff=$($oB - $cB)}, Parens={Open=$oP, Close=$cP, Diff=$($oP - $cP)}"
}

# 2. FetExplorerTab component text (from FET start to script end)
if ($fetStart -ne -1 -and $scriptEnd -gt $fetStart) {
    $fetText = $content.Substring($fetStart, $scriptEnd - $fetStart)
    $oB = 0; $cB = 0; $oP = 0; $cP = 0
    foreach ($c in $fetText.ToCharArray()) {
        if ($c -eq '{') { $oB++ }
        elseif ($c -eq '}') { $cB++ }
        elseif ($c -eq '(') { $oP++ }
        elseif ($c -eq ')') { $cP++ }
    }
    Write-Host "FetExplorerTab -- Braces={Open=$oB, Close=$cB, Diff=$($oB - $cB)}, Parens={Open=$oP, Close=$cP, Diff=$($oP - $cP)}"
}
