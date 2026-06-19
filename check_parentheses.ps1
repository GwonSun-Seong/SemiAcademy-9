$htmlPath = "C:\Users\Admin\.gemini\antigravity\scratch\semiconductor-academy\index.html"
$content = [System.IO.File]::ReadAllText($htmlPath, [System.Text.Encoding]::UTF8)

# Extract only the content inside the babel script
$startTag = '<script type="text/babel" data-type="module">'
$endTag = '</script>'
$startIdx = $content.IndexOf($startTag)

if ($startIdx -eq -1) {
    Write-Host "Babel start tag not found."
    exit
}

$endIdx = $content.IndexOf($endTag, $startIdx)
if ($endIdx -eq -1) {
    Write-Host "Babel end tag not found."
    exit
}

$babelContent = $content.Substring($startIdx + $startTag.Length, $endIdx - ($startIdx + $startTag.Length))

# Count braces
$openBraces = 0
$closeBraces = 0
$openParens = 0
$closeParens = 0

$chars = $babelContent.ToCharArray()
for ($i = 0; $i -lt $chars.Length; $i++) {
    $c = $chars[$i]
    if ($c -eq '{') { $openBraces++ }
    elseif ($c -eq '}') { $closeBraces++ }
    elseif ($c -eq '(') { $openParens++ }
    elseif ($c -eq ')') { $closeParens++ }
}

Write-Host "Curly Braces: Open=$openBraces, Close=$closeBraces, Diff=$($openBraces - $closeBraces)"
Write-Host "Parentheses:  Open=$openParens, Close=$closeParens, Diff=$($openParens - $closeParens)"
