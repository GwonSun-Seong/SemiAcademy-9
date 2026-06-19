$htmlPath = "C:\Users\Admin\.gemini\antigravity\scratch\semiconductor-academy\index.html"
$lines = Get-Content $htmlPath -Encoding UTF8

# Define bracket character variables to bypass redirection parsing error
$lt = [char]60
$gt = [char]62

# Apply precise translations using Unicode ASCII Escape Sequences
$lines[3809] = '          if (hasThermalLayer) cause.push("Thermal layer reduced \u0394T.");'
$lines[3894] = '                \uC0DD\uC131\uB41C \uC18C\uC790 \uB9AC\uC2A4\uD2B8'
$lines[3900] = "                      ${lt}th className=`"p-3 text-slate-400 font-extrabold`"${gt}\uAD6C\uC870 \uC694\uC57D${lt}/th${gt}"
$lines[3901] = "                      ${lt}th className=`"p-3 text-slate-400 font-extrabold`"${gt}\uD488\uC9C8 \uC910\uC218${lt}/th${gt}"
$lines[3905] = "                      ${lt}th className=`"p-3 text-slate-400 font-extrabold`"${gt}\u0394T (\uBC1C\uC5F4)${lt}/th${gt}"
$lines[3906] = "                      ${lt}th className=`"p-3 text-slate-400 font-extrabold`"${gt}Rsd (\uAE30\uC0DD \uC800\uD56D)${lt}/th${gt}"
$lines[3907] = "                      ${lt}th className=`"p-3 text-slate-400 font-extrabold`"${gt}\uBCC0\uB3D9 \uC720\uBC1C \uC6D0\uC778${lt}/th${gt}"
$lines[3936] = '                3D \uC778\uD130\uB799\uD2B0\uBE0C \uBDF0'
$lines[3944] = "                    ${lt}p className=`"text-[10px] text-slate-400`"${gt}\uD14C\uC774\uBE14\uC5D0\uC11C \uAD6C\uC870\uB93C \uC120\uD0DD\uD558\uBA74 3D \uBAA8\uB37B\uC774 \uB80C\uB354\uB9C1\uB429\uB2C8\uB2E4. \uB4DC\uB798\uADF8\uD558\uC5EC \uD68C\uC804, \uD720\uB85C \uC905\uC778/\uC544\uC6C3\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4.${lt}/p${gt}"
$lines[3951] = "                      ${lt}span${gt}\uC18C\uC790 \uC0C1\uC138 \uC2A4\uD321${lt}/span${gt}"
$lines[3955] = "                      ${lt}div${gt}${lt}span className=`"text-slate-500`"${gt}\uCC44\uB110 / \uC2DC\uD2B8 \uC218:${lt}/span${gt} ${lt}span className=`"font-bold font-mono text-slate-300`"${gt}{selectedItem.sheets}\uAC1C${lt}/span${gt}${lt}/div${gt}"
$lines[3956] = "                      ${lt}div${gt}${lt}span className=`"text-slate-500`"${gt}\uAC8C\uC774\uD2B8 \uAE38\uC774(Lg):${lt}/span${gt} ${lt}span className=`"font-bold font-mono text-slate-300`"${gt}{selectedItem.gateLength.toFixed(1)} nm${lt}/span${gt}${lt}/div${gt}"
$lines[3957] = "                      ${lt}div${gt}${lt}span className=`"text-slate-500`"${gt}\uC2DC\uD2B8 \uB450\uAED8:${lt}/span${gt} ${lt}span className=`"font-bold font-mono text-slate-300`"${gt}{selectedItem.sheetThickness.toFixed(1)} nm${lt}/span${gt}${lt}/div${gt}"
$lines[3958] = "                      ${lt}div${gt}${lt}span className=`"text-slate-500`"${gt}\uC720\uD6A8 \uC808\uC5F0\uB9C9 \uB450\uAED8:${lt}/span${gt} ${lt}span className=`"font-bold font-mono text-slate-300`"${gt}{selectedItem.tox.toFixed(2)} nm${lt}/span${gt}${lt}/div${gt}"
$lines[3959] = "                      ${lt}div className=`"col-span-2`"${gt}${lt}span className=`"text-slate-500`"${gt}\uBC29\uC5F4 \uB808\uC774\uC5B4 \uC5F0\uB3D9:${lt}/span${gt} ${lt}span className=`"font-bold`"${gt}{selectedItem.hasThermalLayer ? `\uC5F0\uB3D9\uB428 (Yes)` : `\uC5C6\uC74C (No)`}${lt}/span${gt}${lt}/div${gt}"

Set-Content -Path $htmlPath -Value $lines -Encoding UTF8
Write-Host "Success"
