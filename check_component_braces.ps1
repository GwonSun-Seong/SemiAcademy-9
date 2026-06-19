$htmlPath = "C:\Users\Admin\.gemini\antigravity\scratch\semiconductor-academy\index.html"
$content = [System.IO.File]::ReadAllText($htmlPath, [System.Text.Encoding]::UTF8)

# React Component definitions in index.html:
$components = @(
    @{ name = "AppRoot"; pattern = "const App = \(\) =\>" },
    @{ name = "PdfUploadModal"; pattern = "const PdfUploadModal =" },
    @{ name = "LeaderboardModal"; pattern = "const LeaderboardModal =" },
    @{ name = "QuizTab"; pattern = "const QuizTab =" },
    @{ name = "NewsTab"; pattern = "const NewsTab =" },
    @{ name = "CommunityTab"; pattern = "const CommunityTab =" },
    @{ name = "FetExplorerTab"; pattern = "const FetExplorerTab =" }
)

# Sort components by their position in index.html
$positions = @()
foreach ($comp in $components) {
    $idx = $content.IndexOf($comp.pattern)
    if ($idx -ne -1) {
        $positions += [PSCustomObject]@{
            name = $comp.name
            index = $idx
        }
    }
}
$positions = $positions | Sort-Object index

# Append the end index (end of Babel script block)
$endTagIdx = $content.IndexOf("</script>")
$positions += [PSCustomObject]@{
    name = "EOF"
    index = $endTagIdx
}

for ($i = 0; $i -lt ($positions.Length - 1); $i++) {
    $compName = $positions[$i].name
    $startIdx = $positions[$i].index
    $endIdx = $positions[$i+1].index
    
    $compText = $content.Substring($startIdx, $endIdx - $startIdx)
    
    $openB = 0
    $closeB = 0
    $openP = 0
    $closeP = 0
    
    foreach ($c in $compText.ToCharArray()) {
        if ($c -eq '{') { $openB++ }
        elseif ($c -eq '}') { $closeB++ }
        elseif ($c -eq '(') { $openP++ }
        elseif ($c -eq ')') { $closeP++ }
    }
    
    # Avoid colons right after variable names in powershell double quotes
    Write-Host "$compName -- Braces={Open=$openB, Close=$closeB, Diff=$($openB - $closeB)}, Parens={Open=$openP, Close=$closeP, Diff=$($openP - $closeP)}"
}
