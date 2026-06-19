$htmlPath = "C:\Users\Admin\.gemini\antigravity\scratch\semiconductor-academy\index.html"
$lines = Get-Content $htmlPath -Encoding UTF8

# Replace exact lines by index to avoid regex collision and clean up Korean characters
$lines[3976] = '                        className="order-b border-slate-900/60 cursor-pointer transition-colors hover:bg-slate-900/20"'
$lines[3980] = '                        <td className="p-3"><span className="font-mono">{item.metrics.IonIoff.toFixed(2)} ({formatPercent(item.metrics.IonIoff)})</span></td>'
$lines[3981] = '                        <td className="p-3"><span className="font-mono">{item.metrics.Ion.toFixed(2)} ({formatPercent(item.metrics.Ion)})</span></td>'
$lines[3982] = '                        <td className="p-3"><span className="font-mono">{item.metrics.Ioff.toFixed(2)} ({formatPercent(item.metrics.Ioff)})</span></td>'
$lines[3983] = '                        <td className="p-3"><span className="font-mono">{item.metrics.deltaT.toFixed(2)} ({formatPercent(item.metrics.deltaT)})</span></td>'
$lines[3984] = '                        <td className="p-3"><span className="font-mono">{item.metrics.Rsd.toFixed(2)} ({formatPercent(item.metrics.Rsd)})</span></td>'
$lines[4020] = '                      <div className="col-span-2"><span className="text-slate-500">방열 레이어 연동:</span> <span className="font-bold">{selectedItem.hasThermalLayer ? "연동됨 (Yes)" : "없음 (No)"}</span></div>'

Set-Content -Path $htmlPath -Value $lines -Encoding UTF8
Write-Host "Exact lines patched successfully!"
