$htmlPath = "C:\Users\Admin\.gemini\antigravity\scratch\semiconductor-academy\index.html"
$content = [System.IO.File]::ReadAllText($htmlPath, [System.Text.Encoding]::UTF8)

# Run direct replace calls to prevent hash table token errors
$content = $content.Replace('alert("援ъ“ ?앹꽦 ?ㅽ뙣")', 'alert("구조 생성 실패")')
$content = $content.Replace('3D FET ?ㅼ젙 議곗쑉', '3D FET 설정 조율')
$content = $content.Replace('諛섎룄泥??몃옖吏€?ㅽ꽣(FinFET, MOSFET, GAAFET)???쒖빟 ?쒖닔 ?앹꽦 ?ㅿ뿕?ㅼ엯?덈떎.', '반도체 트랜지스터(FinFET, Planar, GAAFET)의 다양한 기하학적 구조 변형 생성 실험실입니다.')
$content = $content.Replace('湲곗? ?꾪궎?띿처 (Baseline)', '기준 아키텍처 (Baseline)')
$content = $content.Replace('?앹꽦 蹂€????(Variants)', '생성 변형 수 (Variants)')
$content = $content.Replace('援ъ조 ?앹꽦 以..', '구조 생성 중..')
$content = $content.Replace('?꾩쓽 援ъ조 ?앹꽦', '임의 구조 생성')
$content = $content.Replace('?앹꽦???뚯옄 由ъ뒪??', '생성된 소자 리스트')
$content = $content.Replace('援ъ“ ?붿빟', '구조 요약')
$content = $content.Replace('?덉쭏 ?먯닔', '품질 점수')
$content = $content.Replace('?T (諛쒖뿴)', 'ΔT (발열)')
$content = $content.Replace('Rsd (沲곗깮?€??', 'Rsd (기생 저항)')
$content = $content.Replace('Rsd (湲곗깮?€??', 'Rsd (기생 저항)')
$content = $content.Replace('蹂€???좊컻 ?먯씤', '변동 유발 원인')
$content = $content.Replace('?뚯씠釉붿뿉??援ъ“瑜??좏깮?섎㈃ 3D 紐⑤뜽???뚮뜑留곷맗?덈떎. ?쒕옒洹명븯???뚯쟾, ?좊줈 以뚯씤/?꾩썐??媛€?ν빀?덈떎.', '테이블에서 구조를 선택하면 3D 모델이 렌더링됩니다. 드래그하여 회전, 휠로 줌인/아웃이 가능합니다.')
$content = $content.Replace('3D ?명꽣?숉떚釉?酉?', '3D 인터랙티브 뷰')
$content = $content.Replace('?뚯옄 ?곸꽭 ?ㅽ럺', '소자 상세 스펙')
$content = $content.Replace('梨꾨꼸 ?€/?쒗듃 ??', '채널 개수 / 시트 수')
$content = $content.Replace('寃뚯씠??湲몄씠(Lg):', '게이트 길이(Lg):')
$content = $content.Replace('?쒗듃 ?먭퍡:', '시트 두께:')
$content = $content.Replace('?좏슚 ?덉연留??먭퍡:', '유효 절연막 두께(EOT):')

[System.IO.File]::WriteAllText($htmlPath, $content, [System.Text.Encoding]::UTF8)
Write-Host "Success"
