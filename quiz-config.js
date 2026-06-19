// Semiconductor AI Academy - Local Quiz Configuration
// You can add, edit, or remove quizzes here to customize your training program.
// Supported levels: "easy" (쉬움, x1), "medium" (보통, x2), "hard" (어려움, x3)

// 반도체 8대 공정 단계 상수 정의 (1~8단계 매핑)
const PROCESS_STEP = {
  WAFER: 1,         // 1. 웨이퍼 제조
  OXIDATION: 2,     // 2. 산화 공정
  PHOTO: 3,         // 3. 포토 공정
  ETCHING: 4,       // 4. 식각 공정
  DEPOSITION: 5,    // 5. 박막 증착
  METALLIZATION: 6, // 6. 금속 배선
  EDS: 7,           // 7. 테스트 공정 (EDS)
  PACKAGING: 8      // 8. 패키징
};

window.LOCAL_QUIZ_CONFIG = [
  // ==========================================
  // 1. 웨이퍼 제조 (PROCESS_STEP.WAFER)
  // ==========================================
  {
    id: "Q_WAFER_01",
    procId: PROCESS_STEP.WAFER,
    type: "choice", 
    level: "easy",
    question: "웨이퍼의 원료가 되는 모래(규사)에서 초고순도 실리콘 잉곳을 얻는 핵심 결정 성장 공법은 무엇인가요?",
    options: ["초크랄스키(Czochralski) 공법", "수열합성 공법", "진공 스퍼터링 공법", "열교환 어닐링 공법"],
    answer: "0", 
    explanation: "초크랄스키(CZ) 공법은 도가니 안에서 회전하며 실리콘 단결정을 끌어올려 고순도 잉곳을 성장시키는 표준적인 제조 기법입니다."
  },
  {
    id: "Q_WAFER_02",
    procId: PROCESS_STEP.WAFER,
    type: "choice", 
    level: "medium",
    question: "실리콘 단결정 기판의 결정 격자 방향(Orientation)과 도핑 타입을 작업자가 육안으로 식별할 수 있도록 웨이퍼 테두리에 평평하게 깎아둔 부분을 무엇이라 부르나요?",
    options: ["노치 (Notch)", "플랫존 (Flat Zone)", "챔퍼 (Chamfer)", "에지 비드 (Edge Bead)"],
    answer: "1", 
    explanation: "웨이퍼 테두리의 평평한 영역을 플랫존(Flat Zone)이라고 하며, 최근의 미세화된 300mm 웨이퍼에서는 면적 손실을 막기 위해 V자 형태의 노치(Notch)를 사용합니다."
  },
  {
    id: "Q_WAFER_03",
    procId: PROCESS_STEP.WAFER,
    type: "ox",
    level: "easy",
    question: "단결정(Single Crystal) 실리콘 웨이퍼는 다결정(Polycrystalline) 실리콘에 비해 결정 격자 결함이 적어 전자 이동도가 높기 때문에 고속 반도체 소자 기판으로 사용된다.",
    options: ["O", "X"],
    answer: "O", 
    explanation: "단결정은 원자 배열이 규칙적이고 입계(Grain Boundary)가 없어 전자의 흐름이 원활하며 고성능 소자 제작에 필수적입니다."
  },
  {
    id: "Q_WAFER_04",
    procId: PROCESS_STEP.WAFER,
    type: "ox",
    level: "medium",
    question: "잉곳을 얇은 원판으로 자르는 슬라이싱 공정 후 발생하는 웨이퍼 표면의 물리적 손상층(Damage Layer)은 부식액을 활용한 화학적 에칭(Etching) 공정만으로 완벽한 나노 단위의 거울면 평탄화를 달성할 수 있다.",
    options: ["O", "X"],
    answer: "X",
    explanation: "에칭만으로는 표면 조도를 완벽히 잡을 수 없기 때문에, 화학적 반응과 기계적 연마를 융합한 CMP(화학기계적 연마) 공정이 완벽한 평탄화를 위해 필수적입니다."
  },
  {
    id: "Q_WAFER_05",
    procId: PROCESS_STEP.WAFER,
    type: "short",
    level: "easy",
    question: "단결정 실리콘 잉곳을 정밀 와이어 소(Wire Saw)를 사용하여 얇은 원판 모양의 칩 기판으로 절단하는 가공 단계를 무엇이라고 하나요?",
    answer: "슬라이싱",
    explanation: "잉곳을 얇게 썰어내는 절단 가공 작업을 슬라이싱(Slicing)이라고 합니다."
  },
  {
    id: "Q_WAFER_06",
    procId: PROCESS_STEP.WAFER,
    type: "short",
    level: "hard",
    question: "실리콘 웨이퍼 전체 영역에서 가장 두꺼운 부분과 가장 얇은 부분의 두께 차이를 측정하여 두께 균일도(평탄성)를 나타내는 척도의 약칭은 무엇인가요? (영어 대문자 3글자)",
    answer: "TTV",
    explanation: "TTV(Total Thickness Variation, 총 두께 편차)는 포토 공정 등의 초점 깊이 마진 확보를 위해 매우 엄격하게 제어되는 웨이퍼 평탄도 지표입니다."
  },

  // ==========================================
  // 2. 산화 공정 (PROCESS_STEP.OXIDATION)
  // ==========================================
  {
    id: "Q_OXIDATION_01",
    procId: PROCESS_STEP.OXIDATION,
    type: "choice",
    level: "easy",
    question: "반도체 산화 공정에서 산화 가스나 수증기를 이용해 실리콘 웨이퍼 표면에 강제로 성장시키는 대표적인 절연 물질의 화학식은 무엇인가요?",
    options: ["Si3N4", "SiO2", "SiH4", "TEOS"],
    answer: "1",
    explanation: "산화 공정을 거치면 실리콘(Si)과 산소가 결합하여 전류를 차단하는 우수한 특성의 절연막인 이산화규소(SiO2)가 형성됩니다."
  },
  {
    id: "Q_OXIDATION_02",
    procId: PROCESS_STEP.OXIDATION,
    type: "choice",
    level: "medium",
    question: "습식 산화(Wet Oxidation)와 비교한 건식 산화(Dry Oxidation)의 가장 큰 장점은 무엇인가요?",
    options: [
      "막 성장 속도가 매우 빨라 대량 생산에 유리하다.",
      "형성된 산화막의 밀도가 치밀하고 전기적 절연 품질이 우수하다.",
      "저온 공정이 가능하여 웨이퍼의 열적 스트레스를 방지한다.",
      "화학적 반응성이 낮아 얇은 산화막 두께 제어가 불가능하다."
    ],
    answer: "1",
    explanation: "건식 산화는 수증기 대신 순수 산소(O2) 가스만을 사용하므로 성장 속도는 느리지만 막질이 매우 우수하여 게이트 절연막 등 고품질 층에 쓰입니다."
  },
  {
    id: "Q_OXIDATION_03",
    procId: PROCESS_STEP.OXIDATION,
    type: "ox",
    level: "easy",
    question: "습식 산화 공정은 건식 산화 공정에 비해 동일한 온도 조건에서 약 5~10배 정도 빠르게 산화막을 형성할 수 있다.",
    options: ["O", "X"],
    answer: "O",
    explanation: "습식 산화는 산소 가스보다 수증기(H2O)의 확산 계수가 실리콘 산화막 내에서 훨씬 크기 때문에 더 빠른 속도로 성장이 진행됩니다."
  },
  {
    id: "Q_OXIDATION_04",
    procId: PROCESS_STEP.OXIDATION,
    type: "ox",
    level: "hard",
    question: "고온 열산화(Thermal Oxidation) 중 웨이퍼 표면에 중금속 이물질이나 결정 결함이 잔존하는 경우, 해당 결함 부위의 산화막 성장 속도가 억제되어 절연 파괴가 방지된다.",
    options: ["O", "X"],
    answer: "X",
    explanation: "불순물이나 결함이 있는 부분은 오히려 산소의 반응성을 촉진시켜 비정상적으로 빠르게 산화막이 자라거나 핀홀 결함 및 전하 포획을 유발하여 소자 파괴의 원인이 됩니다."
  },
  {
    id: "Q_OXIDATION_05",
    procId: PROCESS_STEP.OXIDATION,
    type: "short",
    level: "medium",
    question: "고온의 산화막 형성 단계에서 산소나 수증기 분자가 이미 자라난 산화막 표면을 뚫고 실리콘 기판 계면까지 이동하는 물리화학적 전송 현상을 무엇이라고 하나요?",
    answer: "확산",
    explanation: "산화제 분자가 고체의 산화막 격자 사이를 뚫고 들어가는 확산(Diffusion) 현상에 의해 막의 두께가 계속 증가하게 됩니다."
  },
  {
    id: "Q_OXIDATION_06",
    procId: PROCESS_STEP.OXIDATION,
    type: "short",
    level: "hard",
    question: "고온 장시간이 소요되는 확산로(Furnace) 대신 할로겐 램프 열원을 활용해 개별 웨이퍼를 짧은 시간(수 초~수 분) 동안 초고속으로 열처리하여 얇은 절연막을 형성하는 급속 열처리 장비의 영문 약자는 무엇인가요? (영어 대문자 3글자)",
    answer: "RTP",
    explanation: "RTP(Rapid Thermal Processing)는 소자의 열적 허용치(Thermal Budget)를 보존하면서 미세 산화막 등을 신속하게 열처리하는 핵심 장비입니다."
  },

  // ==========================================
  // 3. 포토 공정 (PROCESS_STEP.PHOTO)
  // ==========================================
  {
    id: "Q_PHOTO_01",
    procId: PROCESS_STEP.PHOTO,
    type: "choice",
    level: "easy",
    question: "극자외선(EUV) 노광 장비에서 초미세 회로 패턴을 구현하기 위해 사용하는 극자외선의 파장은 대략 몇 nm인가요?",
    options: ["193 nm", "248 nm", "13.5 nm", "1.5 nm"],
    answer: "2",
    explanation: "EUV 노광 기술은 13.5nm 파장의 광원을 사용하여 미세 회로를 정밀하게 그릴 수 있는 고해상도를 실현합니다."
  },
  {
    id: "Q_PHOTO_02",
    procId: PROCESS_STEP.PHOTO,
    type: "choice",
    level: "hard",
    question: "친수성을 띠는 웨이퍼 표면에 유기 용매 성질의 감광막(PR)을 균일하게 도포하기 위해, 웨이퍼 표면을 소수성(Hydrophobic)으로 개질하는 포토 전처리용 화학 가스는 무엇인가요?",
    options: ["SiH4", "HMDS", "HCl", "HF"],
    answer: "1",
    explanation: "HMDS(Hexamethyldisilazane) 증기는 기판 표면의 수산기(-OH)를 탈수시켜 소수성 메틸기(-Si(CH3)3)로 치환함으로써 감광막과의 접착성을 높여줍니다."
  },
  {
    id: "Q_PHOTO_03",
    procId: PROCESS_STEP.PHOTO,
    type: "ox",
    level: "easy",
    question: "양성 감광막(Positive Photoresist)은 노광 공정에서 빛을 받은 영역의 화학적 결합력이 약해져 현상(Develop) 공정을 거칠 때 씻겨 나간다.",
    options: ["O", "X"],
    answer: "O",
    explanation: "양성 감광막은 노광 부위가 제거되고, 음성(Negative Photoresist) 감광막은 반대로 빛을 받지 않은 무노광 영역이 현상액에 씻겨 나갑니다."
  },
  {
    id: "Q_PHOTO_04",
    procId: PROCESS_STEP.PHOTO,
    type: "ox",
    level: "hard",
    question: "빛을 쬐어 미세 패턴을 굽는 노광 공정에서, 사용하는 광원(Light Source)의 파장이 길어질수록 초점 깊이 마진이 축소되어 해상도가 극대화된다.",
    options: ["O", "X"],
    answer: "X",
    explanation: "해상력은 파장(λ)에 비례하므로 파장이 짧을수록 해상도가 좋아져 더 미세한 회로를 그릴 수 있습니다. 파장이 길어지면 회로 선폭 한계가 커집니다."
  },
  {
    id: "Q_PHOTO_05",
    procId: PROCESS_STEP.PHOTO,
    type: "short",
    level: "easy",
    question: "포토마스크상에 형성된 정밀 미세 회로 패턴을 렌즈를 통과시킨 빛(EUV/DUV)으로 웨이퍼상의 감광막에 그대로 전사 마킹하는 과정을 일컫는 공정명은 무엇인가요?",
    answer: "노광",
    explanation: "빛을 조사하여 마스크 패턴을 감광막에 노출 및 인쇄하는 단계를 노광(Exposure)이라고 부릅니다."
  },
  {
    id: "Q_PHOTO_06",
    procId: PROCESS_STEP.PHOTO,
    type: "short",
    level: "medium",
    question: "노광 단계를 완료한 후, 빛에 의해 화학 성질이 변형된 감광막의 특정 부위를 용매(Developer)를 이용해 용해 제거하여 실제 미세 입체 패턴을 나타나게 하는 공정명은 무엇인가요?",
    answer: "현상",
    explanation: "사진 인화의 현상과 같은 개념으로, 감광 패턴을 시각적 패턴으로 현출시키는 단계를 현상(Develop)이라고 합니다."
  },

  // ==========================================
  // 4. 식각 공정 (PROCESS_STEP.ETCHING)
  // ==========================================
  {
    id: "Q_ETCHING_01",
    procId: PROCESS_STEP.ETCHING,
    type: "choice",
    level: "medium",
    question: "식각 공정 시 마스크 하부 영역이 화학 반응성의 등방성 침투로 인해 수평 방향으로 파고들어가 깎여 선폭을 왜곡시키는 대표 불량 현상을 무엇이라 하나요?",
    options: ["언더컷 (Undercut)", "과식각 (Over-etch)", "노칭 (Notching)", "스컴 (Scum)"],
    answer: "0",
    explanation: "등방성 화학 식각 시 감광막(PR) 보호 패턴 밑으로 화학 약품이 스며들어 하부를 오목하게 침식시키는 현상을 언더컷(Undercut)이라고 합니다."
  },
  {
    id: "Q_ETCHING_02",
    procId: PROCESS_STEP.ETCHING,
    type: "choice",
    level: "hard",
    question: "건식 식각(Dry Etching)에서 직진성이 강한 수직 방향의 물리적 이온 타격을 가속 및 조절하기 위해 챔버 아래쪽 전극에 인가하는 전압은 무엇인가요?",
    options: ["소스 (Source) 전압", "바이어스 (Bias) 전압", "게이트 (Gate) 전압", "공동 (Cavity) 전압"],
    answer: "1",
    explanation: "웨이퍼 척 하부에 인가되는 고주파 바이어스(Bias) 전압에 의해 플라즈마 내부의 양이온들이 웨이퍼 표면으로 직진 가속하여 이방성 식각을 유도합니다."
  },
  {
    id: "Q_ETCHING_03",
    procId: PROCESS_STEP.ETCHING,
    type: "ox",
    level: "easy",
    question: "건식 식각은 물리적 이온 충격을 동반하여 수직 방향 이방성 식각 특성이 탁월하기 때문에 화학 습식 식각에 비해 선택비가 우수하다.",
    options: ["O", "X"],
    answer: "X",
    explanation: "건식 식각은 물리적 충돌이 결합하여 선택비(Selectivity)가 상대적으로 습식 식각(순수 화학 반응으로 특정 막만 선택 부식시킴)보다 낮습니다."
  },
  {
    id: "Q_ETCHING_04",
    procId: PROCESS_STEP.ETCHING,
    type: "ox",
    level: "medium",
    question: "건식 식각 시 에칭 가스의 화학 반응을 통해 생성되는 반응성 부산물(By-product)의 증기압이 높을수록 챔버 외부로의 배출이 용이하다.",
    options: ["O", "X"],
    answer: "O",
    explanation: "부산물의 증기압이 높고 휘발성이 좋아야 기체 상태로 신속히 펌프 배기되어 웨이퍼 표면에 찌꺼기로 남지 않습니다."
  },
  {
    id: "Q_ETCHING_05",
    procId: PROCESS_STEP.ETCHING,
    type: "short",
    level: "medium",
    question: "식각하고자 하는 대상 막질과 식각을 저지해야 하는 하부 기판 막질(또는 마스크 패턴) 간의 식각 속도 비율을 뜻하는 명칭은 무엇인가요? (OO비)",
    answer: "선택비",
    explanation: "원하는 부분만 정확히 깎고 다른 부분은 깎이지 않는 제어력을 선택비(Selectivity)라고 부릅니다."
  },
  {
    id: "Q_ETCHING_06",
    procId: PROCESS_STEP.ETCHING,
    type: "short",
    level: "hard",
    question: "매우 미세하고 종횡비(Aspect Ratio)가 높은 홈이나 홀 내부를 식각할 때, 바닥면 부근으로 갈수록 활성 이온의 전달 한계로 식각 반응 속도가 급격히 둔화되거나 멈추는 현상을 무엇이라 하나요? (영어 포함)",
    answer: "에치 스톱",
    explanation: "미세 가공 종횡비가 깊어지면 반응 가스 공급 및 부산물 배출 정체로 식각이 중단되는 에치 스톱(Etch Stop) 또는 RIE Lag 현상이 발생합니다."
  },

  // ==========================================
  // 5. 박막 증착 (PROCESS_STEP.DEPOSITION)
  // ==========================================
  {
    id: "Q_DEPOSITION_01",
    procId: PROCESS_STEP.DEPOSITION,
    type: "choice",
    level: "medium",
    question: "원자 층 수준으로 타겟 분사 가스를 차례대로 분할 주입하고 배기하는 사이클을 반복하여, 완벽한 두께 균일도와 나노 나노 단차 피복성을 제공하는 고품질 증착 기술은 무엇인가요?",
    options: ["LPCVD", "ALD (원자층 증착)", "스퍼터링 (Sputtering)", "APCVD"],
    answer: "1",
    explanation: "ALD(Atomic Layer Deposition)는 웨이퍼 표면에 1원자층씩 자발성 자기제한 반응(Self-limiting)을 일으켜 치밀하고 얇은 초미세 박막을 쌓습니다."
  },
  {
    id: "Q_DEPOSITION_02",
    procId: PROCESS_STEP.DEPOSITION,
    type: "choice",
    level: "hard",
    question: "가열로의 높은 온도를 사용해 화학 가스를 반응시키는 대신, 진공 챔버에 고주파(RF) 전력을 가해 반응 가스를 이온화한 플라즈마 상태로 유도하여 증착 온도를 크게 낮추는 화학 기상 증착 기술은 무엇인가요?",
    options: ["LPCVD", "PECVD", "MOCVD", "APCVD"],
    answer: "1",
    explanation: "PECVD(Plasma Enhanced Chemical Vapor Deposition)는 플라즈마 에너지의 도움을 받으므로 약 300~400도 이하의 저온 환경에서 고속 증착이 가능합니다."
  },
  {
    id: "Q_DEPOSITION_03",
    procId: PROCESS_STEP.DEPOSITION,
    type: "ox",
    level: "easy",
    question: "물리적 기상 증착(PVD) 중 하나인 스퍼터링(Sputtering) 공정은 진공 챔버 내에서 불활성 아르곤(Ar) 이온을 가속하여 금속 타겟에 충돌시키고, 이때 튕겨져 나온 금속 원자를 웨이퍼에 적층한다.",
    options: ["O", "X"],
    answer: "O",
    explanation: "스퍼터링은 플라즈마 내부 이온의 물리적 당구치기 운동을 활용하여 순수한 전도성 금속 박막을 생성하는 대표적 PVD 방식입니다."
  },
  {
    id: "Q_DEPOSITION_04",
    procId: PROCESS_STEP.DEPOSITION,
    type: "ox",
    level: "hard",
    question: "원자층 증착(ALD) 공정은 반응 가스들을 분리하지 않고 동시에 고밀도로 챔버에 공급하여 기상 상태의 동시 화학 반응(Gas-phase reaction)을 최대화시킴으로써 적층 효율을 얻는다.",
    options: ["O", "X"],
    answer: "X",
    explanation: "ALD는 기상 반응을 철저히 배제하기 위해 한 종류의 가스를 흘려 표면에 흡착시키고 잔류 가스는 질소 가스 등으로 퍼지(Purge)한 후 다음 가스를 순차 주입합니다. 기상 반응이 일어나면 박막 품질이 극도로 파괴됩니다."
  },
  {
    id: "Q_DEPOSITION_05",
    procId: PROCESS_STEP.DEPOSITION,
    type: "short",
    level: "easy",
    question: "웨이퍼 소자 위에 절연막이나 전도성 배선층을 형성하기 위해 분자 또는 원자 크기의 매우 얇은 가공막을 층층이 코팅하여 입히는 공정 기술을 무엇이라 하나요?",
    answer: "증착",
    explanation: "원하는 물성을 가진 초박막 필름막을 부착하는 가공을 증착(Deposition)이라고 칭합니다."
  },
  {
    id: "Q_DEPOSITION_06",
    procId: PROCESS_STEP.DEPOSITION,
    type: "short",
    level: "hard",
    question: "웨이퍼 표면에 형성된 깊고 좁은 트렌치나 콘택트 홀 내부를 박막 물질로 채우는 과정에서, 입구 부분 막이 먼저 막혀 홀 중앙 부근에 채워지지 않은 상태로 남겨진 미세한 빈 공동(구멍) 결함을 무엇이라 부르나요?",
    answer: "보이드",
    explanation: "미세 가공 홈 입구의 퇴적 속도가 더 빨라 입구가 조기 밀봉되면서 내부에 공기 구멍이 생겨 잔존하는 결함을 보이드(Void)라고 칭합니다."
  },

  // ==========================================
  // 6. 금속 배선 (PROCESS_STEP.METALLIZATION)
  // ==========================================
  {
    id: "Q_METALLIZATION_01",
    procId: PROCESS_STEP.METALLIZATION,
    type: "choice",
    level: "easy",
    question: "반도체 회로 내 신호 전달 지연 속도를 획기적으로 낮추기 위해, 높은 전기 전도성을 가졌으나 식각 불가능 특성을 극복하고 도입된 현대 반도체 배선 원소는 무엇인가요?",
    options: ["알루미늄 (Al)", "텅스텐 (W)", "구리 (Cu)", "티타늄 (Ti)"],
    answer: "2",
    explanation: "구리(Cu)는 알루미늄에 비해 비저항이 약 30~40% 낮아 고속 고신뢰성 배선에 주로 사용됩니다."
  },
  {
    id: "Q_METALLIZATION_02",
    procId: PROCESS_STEP.METALLIZATION,
    type: "choice",
    level: "hard",
    question: "구리 금속 배선 공정에서 구리 원자가 접해 있는 실리콘이나 절연막(SiO2) 층 내부로 미세 침투 및 확산하여 소자 동작을 망가뜨리는 것을 전방위로 제어해 주는 전도성 얇은 장벽 보호층은 무엇인가요?",
    options: ["감광막 (PR)", "게이트 옥사이드", "배리어 메탈 (Barrier Metal)", "반사방지막 (BARC)"],
    answer: "2",
    explanation: "구리의 급격한 확산을 저지하기 위해 구리 도금 전 Ta, TaN, TiN 등의 내화성 배리어 메탈(Barrier Metal) 박막을 얇게 증착합니다."
  },
  {
    id: "Q_METALLIZATION_03",
    procId: PROCESS_STEP.METALLIZATION,
    type: "ox",
    level: "medium",
    question: "구리(Cu)는 휘발성 화학 식각 화합물을 형성하기가 극도로 어렵기 때문에, 일반적인 플라즈마 기반 건식 식각 가공을 이용해 미세 도선을 조각한다.",
    options: ["O", "X"],
    answer: "X",
    explanation: "구리는 식각 가스와 반응해 기화되는 화합물을 만들지 못하므로 식각할 수 없습니다. 따라서 절연막에 도선 홈을 파고 금속을 채워 넘치게 한 뒤 CMP로 깎아내는 다마신 공법을 씁니다."
  },
  {
    id: "Q_METALLIZATION_04",
    procId: PROCESS_STEP.METALLIZATION,
    type: "ox",
    level: "hard",
    question: "금속 배선에 흐르는 인가 전류 밀도가 임계치 이상으로 높아질 때 발생하는 전하 흐름 충격(Electron Wind)이 금속 원자를 휩쓸고 밀어내는 현상을 EM(일렉트로마이그레이션)이라고 부른다.",
    options: ["O", "X"],
    answer: "O",
    explanation: "전자의 운동량에 의해 금속 원자가 실제로 전위하여 빈 공간(Void)을 만들거나 끝부분에 쌓여 회로 쇼트 및 단선을 유발하는 치명적인 신뢰성 불량입니다."
  },
  {
    id: "Q_METALLIZATION_05",
    procId: PROCESS_STEP.METALLIZATION,
    type: "short",
    level: "medium",
    question: "구리 배선 공정에서 활용되는 가공법으로, 절연막에 회로 선로 홈을 파고 구리를 화학 전기 도금으로 가득 채워 메운 후 남은 표면 부위를 연마 평탄화하는 정밀 가공 공법명은 무엇인가요?",
    answer: "다마신",
    explanation: "금속판 상감기공 미술품 공법에서 유래한 명칭으로, 구리 배선 제조의 표준으로 사용되는 다마신(Damascene) 기술입니다."
  },
  {
    id: "Q_METALLIZATION_06",
    procId: PROCESS_STEP.METALLIZATION,
    type: "short",
    level: "hard",
    question: "전자의 기계적 충격에 의해 금속 배선 내의 원자들이 전위 이동하여 한쪽에는 기공(Void)이 생겨 단선되고, 다른 쪽에는 더미가 쌓여 절연층을 파괴하고 단락을 초래하는 현상의 약어는 무엇인가요? (영어 대문자 2글자)",
    answer: "EM",
    explanation: "EM(Electromigration, 전자 이동성 불량)은 나노 선폭 금속 배선의 내구성과 신뢰성 설계 시 가장 최우선적으로 다루는 수명 제한 현상입니다."
  },

  // ==========================================
  // 7. 테스트 공정 (PROCESS_STEP.EDS)
  // ==========================================
  {
    id: "Q_EDS_01",
    procId: PROCESS_STEP.EDS,
    type: "choice",
    level: "medium",
    question: "테스트 공정 시 개별 칩 패드 상에 수천 개의 미세 바늘을 위치시키고 정밀 물리 밀착 접착하여 테스터 장비와 전기 회로 신호를 연결해 주는 검사 핵심 부품은 무엇인가요?",
    options: ["프로브 카드 (Probe Card)", "마운터 (Mounter)", "리드 프레임", "인터포저 (Interposer)"],
    answer: "0",
    explanation: "프로브 카드(Probe Card)는 미세 핀들을 통해 칩의 패드와 통신하여 칩의 전기적 양품 진단을 매핑하는 다리 역할을 합니다."
  },
  {
    id: "Q_EDS_02",
    procId: PROCESS_STEP.EDS,
    type: "choice",
    level: "hard",
    question: "EDS 테스트 중 특정 칩 내부에 일부분 결함이 있는 소량의 셀 영역이 발견되었을 때, 레이저 빔 등으로 불량 배선을 차단하고 설계된 예비 여유 셀로 전환 결합하여 정상으로 부활시키는 복구 공정명은 무엇인가요?",
    options: ["패키징 공정", "리페어 (Repair) 공정", "마운트 공정", "이온 세척 공정"],
    answer: "1",
    explanation: "리페어(Repair) 공정은 결함 셀을 리던던시(Redundancy, 여분) 셀 구조로 물리 연결하여 칩 전체의 폐기를 막고 수율을 보존합니다."
  },
  {
    id: "Q_EDS_03",
    procId: PROCESS_STEP.EDS,
    type: "ox",
    level: "easy",
    question: "웨이퍼 레벨 테스트(EDS) 단계에서 발생한 물리적 동작 불량 판정 칩들은 칩 전체 구조가 결합되어 있어, 미세 셀 영역의 회로선 개질을 통한 불량 복구 처리가 원천적으로 불가능하다.",
    options: ["O", "X"],
    answer: "X",
    explanation: "메모리 칩 등에서는 리던던시 셀과 퓨즈(Fuse) 배선 컷 기술(레이저 복구 등)의 리페어 공정을 적용하여 양품으로 복구할 수 있는 방법이 설계되어 있습니다."
  },
  {
    id: "Q_EDS_04",
    procId: PROCESS_STEP.EDS,
    type: "ox",
    level: "medium",
    question: "웨이퍼 전기 검사(EDS) 단계 중, 칩에 정격 이상의 고전압과 고온의 가혹 환경 전기 스트레스를 일정 시간 가해 잠재된 초기 신뢰성 결함을 사전에 인위적으로 도출해 솎아내는 테스트를 '번인(Burn-in) 테스트'라고 한다.",
    options: ["O", "X"],
    answer: "O",
    explanation: "번인 테스트는 출하 초기에 발생할 위험이 큰 동작 불량을 초고속 스트레스로 스크리닝하는 고신뢰성 보장 시험 단계입니다."
  },
  {
    id: "Q_EDS_05",
    procId: PROCESS_STEP.EDS,
    type: "short",
    level: "easy",
    question: "웨이퍼 기판에 제작 완료된 전체 물리적 개별 칩 수 대비, EDS 테스트 및 검사를 거쳐 전기 특성을 만족하고 정상 판정을 받은 동작 양품 칩의 비율을 무엇이라 하나요?",
    answer: "수율",
    explanation: "투입 칩 대비 정상 칩의 양품율을 뜻하는 수율(Yield)은 반도체 팹의 수익률을 결정하는 가장 핵심적인 기술 척도입니다."
  },
  {
    id: "Q_EDS_06",
    procId: PROCESS_STEP.EDS,
    type: "short",
    level: "hard",
    question: "웨이퍼 가공 전공정이 최종 완료된 시점과 후공정 조립 패키징 단계의 경계에서 측정하는 칩 검사 공정의 영문 약어는 무엇인가요? (영어 대문자 3글자)",
    answer: "EDS",
    explanation: "EDS(Electrical Die Sorting) 공정은 웨이퍼 상태에서 칩의 상태를 선별하여 후공정으로 조립 투입될 양품 칩만 분별하는 공정입니다."
  },

  // ==========================================
  // 8. 패키징 (PROCESS_STEP.PACKAGING)
  // ==========================================
  {
    id: "Q_PACKAGING_01",
    procId: PROCESS_STEP.PACKAGING,
    type: "choice",
    level: "easy",
    question: "완성된 반도체 기판 웨이퍼 상의 각 칩(Die) 단위들을 기계적으로 깨끗하고 안전하게 개별 분할 절단하는 패키징 전 단계를 무엇이라고 하나요?",
    options: ["다이싱 (Dicing)", "본딩 (Bonding)", "몰딩 (Molding)", "싱귤레이션"],
    answer: "0",
    explanation: "블레이드나 레이저 커터 등으로 웨이퍼를 잘게 자르는 정밀 칩 분리 작업을 다이싱(Dicing) 또는 쏘잉(Sawing)이라 합니다."
  },
  {
    id: "Q_PACKAGING_02",
    procId: PROCESS_STEP.PACKAGING,
    type: "choice",
    level: "hard",
    question: "칩 두께를 얇게 하고 와이어 선을 전혀 사용하지 않는 대신, 칩 전면 패드 상에 형성된 매우 미세한 구체 형태의 돌기 전극을 기판에 직접 고주파 융착 밀착시키는 고속 무선 연결 조립 방식을 무엇이라 하나요?",
    options: ["와이어 본딩", "플립칩 (Flip Chip) 본딩", "인터포저 실장", "리드 프레임 실장"],
    answer: "1",
    explanation: "플립칩(Flip Chip) 본딩은 금속 범프(Bump)로 회로 기판과 최단 경로 무선 접속하므로 신호 손실이 적고 고밀도 실장이 가능합니다."
  },
  {
    id: "Q_PACKAGING_03",
    procId: PROCESS_STEP.PACKAGING,
    type: "ox",
    level: "medium",
    question: "와이어 본딩 공정을 배제하고 금속 범프(Bump)를 가진 플립칩 본딩을 반도체 조립에 도입하면 전기적 전송 경로가 대폭 늘어나 고주파 신호 손실이 급증한다.",
    options: ["O", "X"],
    answer: "X",
    explanation: "플립칩 방식은 와이어 없이 기판에 밀착 접합하여 저항을 극도로 줄이고 신호 데이터 경로를 단축하므로 손실이 줄어들고 구동 속도가 빨라집니다."
  },
  {
    id: "Q_PACKAGING_04",
    procId: PROCESS_STEP.PACKAGING,
    type: "ox",
    level: "hard",
    question: "인공지능 특화 HBM(고대역폭 메모리) D램 제조에 사용되는 TSV 공법은 칩 내부 두께를 수직 관통 전극으로 연결하여 신호 이동 경로를 칩 바깥 테두리 영역으로 돌려준다.",
    options: ["O", "X"],
    answer: "X",
    explanation: "TSV는 신호를 칩 바깥 테두리 와이어로 우회시키지 않고, 칩 몸체 자체를 구멍으로 관통시켜 D램 수직 스택 내부에서 최단 고속 도로 통로를 연결하여 대역폭을 극대화합니다."
  },
  {
    id: "Q_PACKAGING_05",
    procId: PROCESS_STEP.PACKAGING,
    type: "short",
    level: "easy",
    question: "반도체 칩을 습기, 충격, 화학 반응 등의 가혹한 외부 환경으로부터 영구히 밀봉 보호하기 위해 사용되는 단단한 흑색 에폭시 수지 성형 충전 재료의 약자는 무엇인가요? (영어 대문자 3글자)",
    answer: "EMC",
    explanation: "EMC(Epoxy Molding Compound)는 열경화성 에폭시 고분자 보호재로 반도체 칩의 물리적 외장 패키지 골격을 책임집니다."
  },
  {
    id: "Q_PACKAGING_06",
    procId: PROCESS_STEP.PACKAGING,
    type: "short",
    level: "hard",
    question: "여러 층의 D램 메모리를 적층 실장하여 AI 데이터 통로 속도를 폭발적으로 늘리는 고대역폭 메모리의 핵심 관통 전극 기술 명칭의 약어는 무엇인가요? (영어 대문자 3글자)",
    answer: "TSV",
    explanation: "TSV(Through Silicon Via, 실리콘 관통 전극)는 수직 반도체 적층의 신호 통로 밀도를 비약적으로 늘리는 후공정 핵심 기술입니다."
  },
  {
    id: "Q_V2_001",
    procId: 1,
    type: "ox",
    level: "easy",
    question: "실리콘(Si)은 전 세계 반도체 생산에 가장 많이 사용되는 재료이다.",
    options: ["O", "X"],
    answer: "O",
    explanation: "실리콘은 지구 지각에서 두 번째로 풍부한 원소(약 28%)입니다. 밴드갭 1.1 eV로 상온 반도체 동작에 최적이고, 산화 시 형성되는 SiO₂ 절연막이 우수하며, 50년 이상 쌓인 성숙한 제조 기술 덕분에 전체 반도체 소자의 95% 이상이 실리콘 기반입니다."
  },
  {
    id: "Q_V2_002",
    procId: 3,
    type: "ox",
    level: "easy",
    question: "EUV(Extreme Ultraviolet) 광원의 파장은 13.5nm이다.",
    options: ["O", "X"],
    answer: "O",
    explanation: "EUV는 주석(Sn) 플라즈마에서 발생하는 13.5nm 파장의 극자외선을 사용합니다. 기존 ArF 레이저(193nm)보다 파장이 약 14배 짧아 훨씬 미세한 패턴을 단일 노광으로 구현합니다. 파장이 짧아 공기에 흡수되므로 장비 내부가 진공이어야 하며, 반사형 광학계를 사용합니다. ASML이 전 세계 유일 EUV 장비 공급사입니다."
  },
  {
    id: "Q_V2_003",
    procId: 1,
    type: "ox",
    level: "easy",
    question: "GaN(질화갈륨)은 실리콘보다 전력 변환 효율이 낮다.",
    options: ["O", "X"],
    answer: "X",
    explanation: "GaN은 밴드갭 3.4eV로 Si(1.1eV)의 약 3배, 항복 전계는 Si의 약 10배입니다. 덕분에 동일 전압 내압을 더 얇은 소자로 구현할 수 있어 전력 변환 효율이 Si보다 훨씬 우수합니다. 최근 65W+ 급속 충전기, 데이터센터 PSU, 전기차 인버터 등에 GaN 소자 채택이 빠르게 늘고 있습니다."
  },
  {
    id: "Q_V2_004",
    procId: 5,
    type: "ox",
    level: "easy",
    question: "이온 주입(Ion Implantation)은 반도체 도핑에 사용되는 공정이다.",
    options: ["O", "X"],
    answer: "O",
    explanation: "이온 주입은 고에너지로 가속된 불순물 이온(B⁺, P⁺, As⁺ 등)을 웨이퍼에 직접 주입해 n형 또는 p형 도핑을 수행합니다. 주입 에너지로 깊이, 도즈(Dose)로 농도를 정밀 제어할 수 있어 확산법보다 훨씬 정확합니다. 주입 후 결정 손상 회복을 위해 급속 열처리(RTP/어닐링)가 뒤따릅니다."
  },
  {
    id: "Q_V2_005",
    procId: 3,
    type: "choice",
    level: "easy",
    question: "다음 중 비휘발성(Non-volatile) 메모리가 아닌 것은?",
    options: ["NAND Flash", "NOR Flash", "DRAM", "EEPROM"],
    answer: "2",
    explanation: "휘발성(Volatile): DRAM, SRAM — 전원 차단 시 데이터 소멸. 비휘발성(Non-volatile): NAND Flash, NOR Flash, EEPROM, ROM, FeRAM, MRAM — 전원 없어도 데이터 유지. Flash 메모리는 부유 게이트(Floating Gate) 또는 전하 트랩(Charge Trap) 구조로 전하를 영구 저장합니다."
  },
  {
    id: "Q_V2_006",
    procId: 1,
    type: "ox",
    level: "medium",
    question: "3D NAND Flash는 셀을 수직 방향으로 적층하여 집적도를 높인 구조이다.",
    options: ["O", "X"],
    answer: "O",
    explanation: "기존 2D(Planar) NAND는 평면 미세화로 집적도를 높였지만 한계에 도달해, 3D NAND(V-NAND)는 셀을 수직(Vertical)으로 수십~수백 층 쌓아 집적도를 획기적으로 높입니다. 삼성전자가 2013년 24단을 세계 최초 양산했으며, 현재는 200단 이상 경쟁 중입니다. 같은 면적에서 용량을 수십 배 늘릴 수 있습니다."
  },
  {
    id: "Q_V2_007",
    procId: 8,
    type: "choice",
    level: "medium",
    question: "반도체 후공정(Back-End)에 해당하는 것은?",
    options: ["포토리소그래피", "플라즈마 식각", "와이어 본딩(Wire Bonding)", "CVD 증착"],
    answer: "2",
    explanation: "와이어 본딩은 다이(Die) 패드와 패키지 리드를 금·구리 와이어로 연결하는 후공정 단계입니다. 전공정(FEOL/BEOL)은 웨이퍼에 직접 소자·배선을 형성하는 리소그래피·식각·CVD·CMP 등이고, 후공정은 웨이퍼 다이싱 이후 패키징·본딩·최종 테스트를 포함합니다. 최근 CoWoS·HBM 같은 첨단 패키징이 주목받으며 후공정의 가치가 크게 상승하고 있습니다."
  },
  {
    id: "Q_V2_008",
    procId: 1,
    type: "choice",
    level: "medium",
    question: "ARM 아키텍처의 특징으로 옳은 것은?",
    options: ["CISC(Complex Instruction Set Computer) 기반", "RISC(Reduced Instruction Set Computer) 기반", "x86과 동일한 명령어 집합", "인텔이 개발하여 독점 라이선스"],
    answer: "1",
    explanation: "ARM(Advanced RISC Machine)은 RISC 기반으로 단순·고정 길이 명령어, 많은 범용 레지스터, 로드/스토어 아키텍처가 특징입니다. 전력 효율이 뛰어나 스마트폰 AP(Apple A·Qualcomm Snapdragon·Samsung Exynos)부터 서버(AWS Graviton), 슈퍼컴퓨터(Fugaku)까지 쓰입니다. 인텔 x86은 CISC 기반입니다. ARM Holdings는 영국 기업이며, 소프트뱅크가 대주주입니다."
  },
  {
    id: "Q_V2_009",
    procId: 1,
    type: "ox",
    level: "medium",
    question: "GaAs(갈륨비소)는 실리콘보다 전자 이동도(Electron Mobility)가 높다.",
    options: ["O", "X"],
    answer: "O",
    explanation: "GaAs의 전자 이동도는 약 8,500 cm²/V·s로, 실리콘(약 1,400 cm²/V·s)보다 약 6배 높습니다. 이 덕분에 GaAs는 고주파(RF) 특성이 뛰어나 스마트폰 RF 파워 앰프(PA), 레이더, 위성 통신 소자에 널리 쓰입니다. 다만 GaAs 기판은 Si보다 비싸고 깨지기 쉬워 메모리·프로세서에는 사용되지 않습니다."
  },
  {
    id: "Q_V2_010",
    procId: 1,
    type: "ox",
    level: "medium",
    question: "실리콘의 밴드갭은 간접 천이형(Indirect Bandgap)이다.",
    options: ["O", "X"],
    answer: "O",
    explanation: "실리콘은 간접 밴드갭(Indirect Bandgap) 반도체로, 전자 전이 시 포논(Phonon, 결정 진동)의 도움이 필요합니다. 이 때문에 Si는 발광 효율이 낮아 LED·레이저에 불리합니다. 반면 GaAs, GaN, InP 등은 직접 밴드갭(Direct Bandgap)으로 전자 전이 시 직접 광자를 방출해 발광 소자에 적합합니다."
  },
  {
    id: "Q_V2_011",
    procId: 1,
    type: "choice",
    level: "medium",
    question: "전기차(EV) 인버터에 가장 많이 채택되고 있는 전력 반도체 소재는?",
    options: ["Si (실리콘)", "GaAs (갈륨비소)", "SiC (탄화실리콘)", "Ge (저마늄)"],
    answer: "2",
    explanation: "SiC MOSFET은 Si IGBT 대비 스위칭 손실이 약 50% 감소하고 고온(200°C+) 동작이 가능해 전기차 인버터에 이상적입니다. 충전 효율 향상으로 주행 거리가 늘고 인버터 냉각 시스템을 소형화할 수 있습니다. 테슬라 Model 3(2018)이 ST마이크로일렉트로닉스의 SiC를 세계 최초로 EV 메인 인버터에 채택한 이후 BYD·현대차·GM 등도 SiC로 전환하고 있습니다."
  },
  {
    id: "Q_V2_012",
    procId: 1,
    type: "ox",
    level: "easy",
    question: "SiC(탄화실리콘)는 고온·고전압 환경에 적합한 와이드 밴드갭 반도체이다.",
    options: ["O", "X"],
    answer: "O",
    explanation: "SiC는 밴드갭 3.26eV, 항복 전계 Si의 10배, 열전도율 Si의 3배를 갖는 와이드 밴드갭(WBG) 반도체입니다. 200°C 이상 고온, 수kV 고전압에서도 안정적으로 동작합니다. 전기차(EV) 인버터에 SiC MOSFET을 사용하면 Si IGBT 대비 손실 50% 감소, 충전 시간 단축이 가능합니다. 테슬라, BYD 등이 SiC를 적극 채택 중입니다."
  },
  {
    id: "Q_V2_013",
    procId: 2,
    type: "choice",
    level: "easy",
    question: "NAND Flash 셀 종류 중 내구성(P/E 수명)이 가장 긴 것은?",
    options: ["QLC (Quad Level Cell, 4비트/셀)", "TLC (Triple Level Cell, 3비트/셀)", "MLC (Multi Level Cell, 2비트/셀)", "SLC (Single Level Cell, 1비트/셀)"],
    answer: "3",
    explanation: "셀당 저장 비트 수가 적을수록 전압 레벨 구분이 단순해 셀 스트레스가 낮고 수명이 깁니다. SLC(Single Level Cell)는 1비트만 저장해 최장 수명·최고 속도를 제공합니다. QLC는 용량·원가 면에서 유리하지만 수명과 속도가 가장 떨어집니다. 엔터프라이즈 SSD는 MLC/SLC, 소비자용 SSD는 주로 TLC/QLC를 사용합니다."
  },
  {
    id: "Q_V2_014",
    procId: 8,
    type: "choice",
    level: "easy",
    question: "반도체 패키징 기술의 발전 순서로 올바른 것은?",
    options: ["BGA → QFP → DIP → Chiplet", "DIP → QFP → BGA → Chiplet", "QFP → DIP → BGA → Chiplet", "Chiplet → BGA → QFP → DIP"],
    answer: "1",
    explanation: "DIP(1970s): 두 줄 핀, PCB 삽입형. → QFP(1980s~90s): 4면 가는 핀, 표면 실장. → BGA(1990s~현재): 하단 격자 솔더볼, 고핀수·소형화. → Chiplet(2010s~현재): 여러 다이를 하나의 패키지에 이종 통합, 2.5D/3D. AMD Ryzen의 CPU 코어+I/O 칩렛 분리, NVIDIA GPU + HBM 통합(CoWoS) 등이 대표 사례입니다."
  },
  {
    id: "Q_V2_015",
    procId: 7,
    type: "choice",
    level: "easy",
    question: "다음 중 IDM(Integrated Device Manufacturer)이 아닌 것은?",
    options: ["Intel", "삼성전자", "TSMC", "SK하이닉스"],
    answer: "2",
    explanation: "TSMC는 자체 설계 없이 고객 칩만 위탁 생산하는 순수 파운드리입니다. IDM은 설계·제조·판매 수직 통합 기업으로 Intel, 삼성전자, SK하이닉스, 마이크론 등이 해당합니다. 반도체 밸류체인: 팹리스(설계) → 파운드리(제조) → OSAT(패키징·테스트)로 분업화됩니다."
  },
  {
    id: "Q_V2_016",
    procId: 3,
    type: "choice",
    level: "easy",
    question: "반도체 공정에서 포토레지스트(PR)를 제거하는 공정은?",
    options: ["CMP", "스트립(Strip) / 애싱(Ashing)", "CVD", "이온 주입"],
    answer: "1",
    explanation: "식각 또는 이온 주입 후 역할을 마친 포토레지스트는 스트립(Strip) 또는 애싱(Ashing) 공정으로 제거합니다. 산소 플라즈마로 PR을 연소시키는 드라이 애싱, 황산+과산화수소(SPM) 혼합액으로 제거하는 습식 스트립이 대표적입니다. 완전 제거 후에는 잔류 오염물 세정(SC-1, SC-2)을 추가로 진행합니다."
  },
  {
    id: "Q_V2_017",
    procId: 3,
    type: "choice",
    level: "easy",
    question: "반도체 팹 클린룸에서 환경 제어 대상이 아닌 것은?",
    options: ["공기 중 파티클(먼지) 농도", "온도 및 습도", "진동(Vibration)", "외부 자연광 조도"],
    answer: "3",
    explanation: "반도체 팹 클린룸에서 엄격히 제어하는 항목: ① 파티클(ISO Class 1~3), ② 온도(22±0.5°C), ③ 습도(45±5%), ④ 진동(미세 진동도 노광 정밀도에 영향), ⑤ 화학 오염(AMC, Airborne Molecular Contamination). 자연광은 클린룸이 외부와 격리되어 있어 들어오지 않으며, 실내 조명은 포토레지스트가 반응하지 않는 황색 조명을 사용합니다."
  },
  {
    id: "Q_V2_018",
    procId: 8,
    type: "choice",
    level: "easy",
    question: "반도체 후공정에서 웨이퍼를 개별 칩으로 자르는 공정은?",
    options: ["CMP (Chemical Mechanical Planarization)", "다이싱(Dicing)", "스퍼터링(Sputtering)", "어닐링(Annealing)"],
    answer: "1",
    explanation: "다이싱(Dicing)은 EDS 검사를 마친 웨이퍼를 다이아몬드 블레이드 쏘(Blade Saw) 또는 레이저로 개별 다이(Die)로 절단하는 공정입니다. 절단 경계선을 스크라이브 라인(Scribe Line) 또는 다이싱 레인이라 합니다. 이후 개별 다이는 픽 앤 플레이스(Pick & Place) 장비로 패키지 기판이나 리드프레임 위에 올려집니다."
  },
  {
    id: "Q_V2_019",
    procId: 4,
    type: "ox",
    level: "medium",
    question: "NAND Flash는 셀이 직렬(Series)로 연결된 구조이다.",
    options: ["O", "X"],
    answer: "O",
    explanation: "NAND Flash는 셀 트랜지스터들이 직렬로 연결된 스트링 구조라 면적이 작아 고집적이 가능하지만, 랜덤 읽기는 느립니다. 반면 NOR Flash는 셀이 병렬로 연결되어 랜덤 읽기가 빠르고, 임베디드 MCU 코드 저장에 주로 쓰입니다. SSD·스마트폰·USB 등 대용량 저장에는 NAND가 압도적으로 많이 사용됩니다."
  },
  {
    id: "Q_V2_020",
    procId: 8,
    type: "ox",
    level: "medium",
    question: "반도체 패키징은 전공정(Front-End of Line)에 해당한다.",
    options: ["O", "X"],
    answer: "X",
    explanation: "반도체 제조는 크게 전공정(Front-End)과 후공정(Back-End)으로 나뉩니다. 전공정은 웨이퍼에 트랜지스터·배선을 형성하는 리소그래피·식각·증착 등이고, 패키징·와이어 본딩·다이싱·최종 테스트는 후공정입니다. 최근 HBM·CoWoS 같은 첨단 패키징이 부상하며 후공정의 중요성이 급격히 높아졌습니다."
  },
  {
    id: "Q_V2_021",
    procId: 1,
    type: "ox",
    level: "medium",
    question: "CMP(Chemical Mechanical Planarization)는 웨이퍼 표면을 평탄화하는 공정이다.",
    options: ["O", "X"],
    answer: "O",
    explanation: "CMP는 화학 연마액(슬러리)과 기계적 압력을 동시에 이용해 웨이퍼 표면을 나노미터 수준의 평탄도로 연마합니다. 다층 배선 형성 시 각 층마다 CMP를 적용해 단차를 제거해야 이후 노광 초점이 정확히 맞습니다. 슬러리는 산화세륨(CeO₂)이나 실리카(SiO₂) 연마 입자와 화학 첨가제를 포함합니다."
  },
  {
    id: "Q_V2_022",
    procId: 1,
    type: "ox",
    level: "medium",
    question: "반도체용 실리콘의 순도는 99%(2N) 수준이면 충분하다.",
    options: ["O", "X"],
    answer: "X",
    explanation: "반도체용 폴리실리콘은 순도 9N~11N(99.9999999% 이상)이 요구됩니다. 99%(2N)는 야금용 실리콘 수준으로, 반도체용 대비 불순물이 수백만 배 많습니다. 원자 하나의 불순물도 트랜지스터 특성을 망가뜨릴 수 있기 때문입니다. 고순도 폴리실리콘 생산에는 지멘스(Siemens) 공법이 주로 사용됩니다."
  },
  {
    id: "Q_V2_023",
    procId: 8,
    type: "ox",
    level: "medium",
    question: "TSV(Through Silicon Via)는 실리콘 칩을 관통하는 수직 전기 연결 구조이다.",
    options: ["O", "X"],
    answer: "O",
    explanation: "TSV는 실리콘 다이를 수직으로 관통하는 미세 구리(Cu) 도체 기둥입니다. 칩 간 신호·전원을 최단 거리로 연결하여 기존 와이어 본딩 대비 대역폭 수십 배 향상, 지연 시간 감소, 전력 절감을 동시에 달성합니다. HBM, 3D NAND, 첨단 패키징(CoWoS, SoIC 등)의 핵심 기술입니다."
  },
  {
    id: "Q_V2_024",
    procId: 3,
    type: "choice",
    level: "medium",
    question: "전 세계에서 EUV 노광 장비를 독점 공급하는 기업은?",
    options: ["Nikon", "Canon", "ASML", "Applied Materials"],
    answer: "2",
    explanation: "ASML(네덜란드)은 세계 유일의 EUV 노광 장비 제조사입니다. 장비 1대에 전 세계 10만 개 이상 부품이 들어가며, 칼 자이스(광학계), 사이머(광원) 등 수십 개 글로벌 기업과의 협력으로 만들어집니다. 장비 가격 약 2,000억 원, 중국에는 미국 주도 수출 규제로 EUV 장비 수출이 금지되어 있습니다."
  },
  {
    id: "Q_V2_025",
    procId: 3,
    type: "ox",
    level: "medium",
    question: "ArF 엑시머 레이저의 파장은 193nm이다.",
    options: ["O", "X"],
    answer: "O",
    explanation: "ArF(불화아르곤) 엑시머 레이저는 파장 193nm로, EUV 도입 이전 가장 널리 사용된 노광 광원입니다. 다중 패터닝(SADP·SAQP)과 결합하면 실효 해상도를 더 높일 수 있어 7nm 이하 공정의 일부 레이어에서도 여전히 사용됩니다. 이전 세대인 KrF(크립톤플루오라이드) 레이저는 248nm입니다."
  },
  {
    id: "Q_V2_026",
    procId: 1,
    type: "ox",
    level: "medium",
    question: "반도체 웨이퍼의 일반적인 두께는 5mm 이상이다.",
    options: ["O", "X"],
    answer: "X",
    explanation: "12인치(300mm) 웨이퍼의 표준 두께는 약 775μm(0.775mm)로, 5mm의 약 1/6 수준입니다. 얇을수록 TSV 형성이나 3D 적층에 유리하여, 3D NAND나 HBM 제조용 웨이퍼는 백그라인딩(Back Grinding)으로 수십~수백 μm까지 얇게 갈아냅니다. 웨이퍼 두께가 너무 얇으면 핸들링 중 파손 위험이 높아집니다."
  },
  {
    id: "Q_V2_027",
    procId: 3,
    type: "ox",
    level: "medium",
    question: "포토마스크의 패턴은 실제 웨이퍼에 전사되는 패턴보다 약 4~5배 크게 제작된다.",
    options: ["O", "X"],
    answer: "O",
    explanation: "포토마스크의 회로 패턴은 실제 전사 패턴의 4배(4×) 크기로 그려지며, 노광 장비의 광학계(축소 렌즈)가 1/4로 축소하여 웨이퍼에 투영합니다. 마스크가 더 크게 그려져 있어 마스크 결함의 영향이 줄어들고 정밀도가 높아집니다. EUV의 경우 반사형 마스크를 사용하며 역시 4× 축소 방식이 표준입니다."
  },
  {
    id: "Q_V2_028",
    procId: 2,
    type: "ox",
    level: "medium",
    question: "반도체 공정에서 열산화(Thermal Oxidation)를 통해 SiO₂ 절연막을 형성할 수 있다.",
    options: ["O", "X"],
    answer: "O",
    explanation: "열산화는 800~1,200°C에서 Si 웨이퍼를 O₂(건식) 또는 H₂O(습식)에 노출해 표면 Si가 산화되며 SiO₂를 성장시키는 공정입니다. Si 표면 자체가 소모되며 자라기 때문에 계면(Si/SiO₂) 특성이 매우 우수합니다. 게이트 산화막, STI(Shallow Trench Isolation) 등에 활용됩니다. 근래에는 HfO₂ 등 High-k 소재로 대체되는 추세입니다."
  },
  {
    id: "Q_V2_029",
    procId: 3,
    type: "ox",
    level: "medium",
    question: "반도체 공정에서 포토레지스트(PR)를 제거하는 공정을 스트립(Strip) 또는 애싱(Ashing)이라 한다.",
    options: ["O", "X"],
    answer: "O",
    explanation: "식각이나 이온 주입 후 불필요해진 포토레지스트를 제거하는 공정이 스트립(Strip) 또는 애싱(Ashing)입니다. 산소 플라즈마로 PR을 태워 제거하거나(드라이 애싱), 황산/H₂O₂ 혼합액(SPM/Piranha)으로 습식 제거합니다. PR이 완전히 제거되지 않으면 이후 공정에서 오염·불량의 원인이 됩니다."
  },
  {
    id: "Q_V2_030",
    procId: 1,
    type: "ox",
    level: "medium",
    question: "이머전(Immersion) 리소그래피는 렌즈와 웨이퍼 사이를 물로 채워 유효 파장을 단축한다.",
    options: ["O", "X"],
    answer: "O",
    explanation: "ArF 이머전(ArF-i) 리소그래피는 렌즈와 웨이퍼 사이에 순수(Pure Water, 굴절률 n≈1.44)를 채웁니다. 빛은 굴절률이 높은 매질에서 파장이 짧아지므로 유효 파장이 193÷1.44 ≈ 134nm로 단축되어 해상도가 향상됩니다. 또한 개구수(NA)를 1.0 이상(최대 1.35)으로 높일 수 있어 ArF 건식 대비 해상도가 크게 개선됩니다."
  },
  {
    id: "Q_V2_031",
    procId: 7,
    type: "ox",
    level: "medium",
    question: "반도체 공정의 EDS(Electrical Die Sorting)는 패키징 이후 단계에서 수행된다.",
    options: ["O", "X"],
    answer: "X",
    explanation: "EDS(전기적 다이 분류)는 다이싱(Dicing) 전, 웨이퍼 상태에서 프로브 카드의 탐침이 각 다이 패드에 접촉해 전기 특성을 검사합니다. 불량 다이를 사전에 걸러내 패키징 비용 낭비를 막습니다. 공정 순서: 전공정 → EDS(웨이퍼 검사) → 다이싱 → 패키징 → 최종 테스트 → 출하."
  },
  {
    id: "Q_V2_032",
    procId: 4,
    type: "ox",
    level: "medium",
    question: "반도체 식각에서 이방성(Anisotropic) 식각은 수직 방향으로 선택적으로 진행된다.",
    options: ["O", "X"],
    answer: "O",
    explanation: "이방성 식각은 수직 방향으로만 식각이 진행되어 패턴 측벽이 수직을 유지합니다. 미세 패턴을 정밀하게 구현하는 데 필수입니다. 플라즈마/RIE 식각이 대표적인 이방성 식각입니다. 반대로 등방성(Isotropic) 식각은 모든 방향으로 균일하게 진행되어 언더컷(Under-cut)이 발생하며, 대부분의 습식(Wet) 식각이 이에 해당합니다."
  },
  {
    id: "Q_V2_033",
    procId: 3,
    type: "choice",
    level: "medium",
    question: "반도체 공정에서 다중 패터닝(Multiple Patterning)을 사용하는 이유는?",
    options: ["웨이퍼 수율을 높이기 위해", "기존 광원(ArF) 파장 한계를 극복하여 더 미세한 패턴을 구현하기 위해", "마스크 비용 절감을 위해", "클린룸 청정도를 높이기 위해"],
    answer: "1",
    explanation: "다중 패터닝(SADP·SAQP 등)은 ArF 레이저(193nm)의 회절 한계를 여러 번의 노광·식각을 반복해 극복하는 기법입니다. SADP(Self-Aligned Double Patterning)는 한 번 노광으로 2배의 패턴 밀도를, SAQP는 4배를 구현합니다. EUV 도입 이전 7nm·5nm 공정에서도 다중 패터닝이 광범위하게 사용되었습니다. 대신 공정 단계가 늘어 원가와 사이클 타임이 증가하는 단점이 있습니다."
  },
  {
    id: "Q_V2_034",
    procId: 1,
    type: "choice",
    level: "medium",
    question: "반도체 이머전 리소그래피에서 렌즈와 웨이퍼 사이에 채우는 물질은?",
    options: ["질소 가스", "순수(Pure Water)", "불화아르곤 가스", "진공"],
    answer: "1",
    explanation: "ArF 이머전 리소그래피는 렌즈와 웨이퍼 사이를 초순수(Ultra-Pure Water, UPW)로 채웁니다. 물의 굴절률(n≈1.44)이 공기(n=1.0)보다 높아 빛의 유효 파장이 193/1.44 ≈ 134nm로 단축되고, 개구수(NA)를 1.35까지 높여 해상도를 크게 향상시킵니다. 반도체 팹에서 사용하는 초순수는 저항률이 18MΩ·cm에 이를 만큼 불순물이 극도로 제거된 물입니다."
  },
  {
    id: "Q_V2_035",
    procId: 7,
    type: "choice",
    level: "medium",
    question: "반도체 '번-인 테스트(Burn-in Test)'의 목적은?",
    options: ["회로 패턴 형성", "고온·고전압 스트레스로 초기 불량품을 사전 제거", "웨이퍼 표면 세정", "금속 배선 형성"],
    answer: "1",
    explanation: "번-인 테스트는 패키징 완료 후 고온(약 125°C)·고전압 환경에서 수 시간~수십 시간 동작시켜 초기 고장(Infant Mortality) 소자를 사전 걸러내는 신뢰성 선별 공정입니다. 반도체 고장률은 욕조 곡선(Bathtub Curve) 형태로, 초기 고장률이 높은 구간을 미리 통과시켜 필드에서의 초기 불량을 크게 줄입니다. 메모리·자동차·산업용 고신뢰성 제품에 특히 중요합니다."
  },
  {
    id: "Q_V2_036",
    procId: 2,
    type: "choice",
    level: "medium",
    question: "반도체 공정에서 STI(Shallow Trench Isolation)의 역할은?",
    options: ["트랜지스터 소스/드레인 도핑", "인접한 트랜지스터들 사이를 전기적으로 격리", "게이트 절연막 형성", "금속 배선층 연결"],
    answer: "1",
    explanation: "STI(얕은 트렌치 격리)는 웨이퍼 표면에 얕은 홈(Trench)을 파고 SiO₂로 채워 인접 트랜지스터 간의 누설 전류를 차단하는 소자 격리 구조입니다. 구형 LOCOS(Local Oxidation of Silicon)를 대체하여 250nm 이하 공정부터 표준으로 사용됩니다. STI는 버즈-빅(Bird's Beak) 현상이 없어 더 좁은 간격으로 소자를 집적할 수 있습니다."
  },
  {
    id: "Q_V2_037",
    procId: 2,
    type: "ox",
    level: "hard",
    question: "반도체 공정에서 High-k 게이트 절연막으로 HfO₂(산화하프늄)이 사용된다.",
    options: ["O", "X"],
    answer: "O",
    explanation: "45nm 이하에서 SiO₂ 게이트 산화막이 1nm 미만이 되자 양자 터널링 누설 전류가 급증했습니다. 인텔은 2007년 HfO₂(High-k 유전체, k≈25)와 메탈 게이트를 도입해, SiO₂(k≈3.9)보다 같은 전기적 두께(EOT)를 물리적으로 더 두꺼운 막으로 구현해 누설을 줄였습니다. 이후 HfO₂는 업계 표준 게이트 절연막으로 자리잡았습니다."
  },
  {
    id: "Q_V2_038",
    procId: 5,
    type: "choice",
    level: "hard",
    question: "반도체 공정에서 ALD와 CVD의 가장 큰 차이점은?",
    options: ["ALD는 물리 공정, CVD는 화학 공정", "ALD는 원자층 단위 자기제한적 증착, CVD는 연속적 화학 반응 증착", "ALD는 금속 배선에만 사용, CVD는 절연막에만 사용", "ALD는 식각 공정, CVD는 증착 공정"],
    answer: "1",
    explanation: "CVD는 전구체 가스를 동시에 또는 연속으로 공급해 화학 반응으로 박막을 증착합니다. ALD는 전구체를 교대로 펄스 공급하여 매 사이클마다 원자 1층씩 자기제한적으로 증착합니다. ALD는 CVD보다 느리지만 두께 제어가 극도로 정밀하고 3D 구조에도 균일하게 증착됩니다. 최첨단 공정에서 High-k 절연막, 배리어 메탈 등에 ALD가 필수화되었습니다."
  },
  {
    id: "Q_V2_039",
    procId: 2,
    type: "choice",
    level: "hard",
    question: "반도체 공정 노드 명칭(예: 7nm, 5nm)이 실제 물리적 치수와 다른 주된 이유는?",
    options: ["나노미터의 국제 단위 정의가 바뀌었기 때문", "공정 노드가 트랜지스터 밀도 기반 마케팅 용어로 변화했기 때문", "기업마다 측정 기준이 다르기 때문", "실제 게이트 길이가 점점 길어졌기 때문"],
    answer: "1",
    explanation: "초기에는 공정 노드 숫자가 게이트 길이 등 실제 물리적 치수와 대응했지만, 20nm 이하부터 숫자와 실제 치수의 연관이 끊어지고 트랜지스터 밀도, 전력, 성능 지표를 종합한 마케팅 브랜드 명이 되었습니다. 예를 들어 TSMC 5nm와 삼성 5nm는 서로 다른 실제 밀도를 가집니다. 이 때문에 IBS, Chipworks 등이 실제 트랜지스터 밀도(MTr/mm²)를 별도로 측정해 비교합니다."
  },
  {
    id: "Q_V2_040",
    procId: 3,
    type: "ox",
    level: "easy",
    question: "SRAM은 DRAM보다 속도가 빠르지만 단위 셀 면적이 더 크다.",
    options: ["O", "X"],
    answer: "O",
    explanation: "SRAM 셀은 6개의 트랜지스터(6T)로 구성된 플립플롭 구조입니다. 리프레시 없이 고속으로 동작하지만, DRAM(1T1C)보다 셀 면적이 6배 이상 커 같은 면적에서 용량이 훨씬 작고 가격도 비쌉니다. 이런 특성상 SRAM은 CPU·GPU 내부 캐시 메모리(L1/L2/L3)로 사용됩니다."
  },
  {
    id: "Q_V2_041",
    procId: 3,
    type: "ox",
    level: "easy",
    question: "CMOS 인버터는 NMOS 트랜지스터만으로 구성된다.",
    options: ["O", "X"],
    answer: "X",
    explanation: "CMOS 인버터는 PMOS 1개 + NMOS 1개를 상보적으로 연결하여 구성합니다. 입력이 High면 NMOS ON(출력 Low), 입력이 Low면 PMOS ON(출력 High)이 되어 인버터 동작을 합니다. 이 구조에서는 두 트랜지스터가 동시에 ON 상태가 되지 않아 정적 전력 소모가 극히 낮습니다. NMOS만 쓰는 nMOS 로직에 비해 전력 소모가 수십~수백 배 낮습니다."
  },
  {
    id: "Q_V2_042",
    procId: 3,
    type: "ox",
    level: "easy",
    question: "반도체 공정에서 P-N 접합에 역방향 전압을 가하면 전류가 차단된다.",
    options: ["O", "X"],
    answer: "O",
    explanation: "P-N 접합에 역방향(p쪽 −, n쪽 +) 전압을 가하면 공핍층(Depletion Layer)이 넓어져 전류가 차단됩니다(OFF). 단, 역방향 전압이 항복 전압(Breakdown Voltage) 이상이 되면 전류가 급격히 흘러 소자가 파손될 수 있습니다. 제너 다이오드는 이 항복 특성을 의도적으로 활용합니다."
  },
  {
    id: "Q_V2_043",
    procId: 3,
    type: "ox",
    level: "easy",
    question: "LED(발광 다이오드)는 전자-정공 재결합 시 방출되는 에너지를 빛으로 변환한다.",
    options: ["O", "X"],
    answer: "O",
    explanation: "LED는 직접 밴드갭 반도체(GaN, GaAs, InP 등)의 P-N 접합에 순방향 전압을 가하면, 전자와 정공이 재결합하면서 밴드갭에 해당하는 에너지를 광자(Photon)로 방출합니다. 발광 파장(색상)은 밴드갭 크기로 결정됩니다: GaN(청색/UV, ~450nm), AlGaInP(적색/황색), InGaAs(적외선). 청색 LED 개발(나카무라 등, 1993)은 노벨 물리학상을 받았습니다."
  },
  {
    id: "Q_V2_044",
    procId: 5,
    type: "choice",
    level: "easy",
    question: "LED가 방출하는 빛의 색상(파장)을 결정하는 요소는?",
    options: ["인가 전압의 크기", "반도체 재료의 밴드갭 크기", "LED 패키지의 크기", "도핑 농도"],
    answer: "1",
    explanation: "LED 발광 파장은 λ = hc/E_g 관계로 밴드갭(E_g)이 클수록 짧은 파장(고에너지, 청색·UV)의 빛을 방출합니다. 예시: InGaAs(적외선, ~950nm), AlGaInP(적색, ~620nm), GaN(청색, ~450nm), AlGaN(자외선, ~360nm 이하). 백색 LED는 청색 GaN LED + 황색 형광체 조합으로 만듭니다. 청색 LED 개발(2014 노벨 물리학상)이 현대 조명 혁명을 이끌었습니다."
  },
  {
    id: "Q_V2_045",
    procId: 5,
    type: "choice",
    level: "medium",
    question: "ALD(Atomic Layer Deposition)의 특징으로 옳은 것은?",
    options: ["수 μm 두꺼운 막을 빠르게 증착하는 공정", "원자 1~2층 단위로 사이클마다 정밀 증착하는 공정", "플라즈마로 재료를 제거하는 식각 공정", "고에너지 이온을 주입하는 도핑 공정"],
    answer: "1",
    explanation: "ALD는 반응성 전구체를 순서대로 교대 공급하여 매 사이클마다 원자 1층(약 0.1~0.3nm)씩 증착하는 자기 제한적(Self-limiting) 공정입니다. 3D 구조에도 균일하게 증착되고 두께를 사이클 수로 정밀 제어합니다. High-k 게이트 절연막(HfO₂), 배리어 메탈(TiN), 3D NAND 전하 트랩층 등 첨단 공정의 핵심입니다."
  },
  {
    id: "Q_V2_046",
    procId: 2,
    type: "choice",
    level: "medium",
    question: "반도체 공정에서 SiO₂(산화막) 제거에 주로 사용되는 화학물질은?",
    options: ["HCl (염산)", "H₂SO₄ (황산)", "HF (불화수소산)", "HNO₃ (질산)"],
    answer: "2",
    explanation: "HF는 SiO₂와 반응하여 수용성 H₂SiF₆를 생성합니다: SiO₂ + 6HF → H₂SiF₆ + 2H₂O. Si 기판은 HF에 거의 식각되지 않아 선택비가 높습니다. DHF(희석 HF)나 BOE(NH₄F+HF)로 식각 속도를 제어합니다. H₂SO₄/H₂O₂(SPM, Piranha)는 유기물·금속 불순물 세정에, SC-1(APM)은 파티클 제거에 사용됩니다."
  },
  {
    id: "Q_V2_047",
    procId: 6,
    type: "choice",
    level: "medium",
    question: "다음 중 반도체 IC 설계 전용 EDA(전자 설계 자동화) 기업이 아닌 것은?",
    options: ["Cadence Design Systems", "Synopsys", "Siemens EDA (구 Mentor Graphics)", "Ansys (구조·열·전자기 시뮬레이션)"],
    answer: "3",
    explanation: "ASML은 노광 장비(리소그래피 장비) 제조사입니다. EDA 3대 기업: Synopsys, Cadence, Siemens EDA. 미국이 이 시장을 사실상 독점하며, 미국의 반도체 수출 규제로 중국 기업들이 이 EDA 소프트웨어를 사용하지 못하게 되어 중국 반도체 개발에 큰 걸림돌이 되고 있습니다."
  },
  {
    id: "Q_V2_048",
    procId: 3,
    type: "ox",
    level: "medium",
    question: "제너 다이오드(Zener Diode)는 정전압 회로에 주로 사용된다.",
    options: ["O", "X"],
    answer: "O",
    explanation: "제너 다이오드는 역방향 전압이 일정 수준(제너 전압, V_Z)에 도달하면 전류가 급격히 흐르는 항복(Breakdown) 특성을 이용합니다. 이 특성으로 출력 전압을 일정하게 유지하는 정전압(Voltage Regulator) 회로에 사용됩니다. 일반 다이오드는 항복 영역을 피하지만, 제너 다이오드는 의도적으로 이 영역에서 동작하도록 설계됩니다."
  },
  {
    id: "Q_V2_049",
    procId: 3,
    type: "choice",
    level: "medium",
    question: "MOSFET의 문턱 전압(Threshold Voltage, V_th)이란?",
    options: ["드레인에 인가할 수 있는 최대 전압", "채널이 형성되기 시작하는 최소 게이트 전압", "소스 단자의 기준 전압", "기판(Substrate)에 인가하는 역방향 전압"],
    answer: "1",
    explanation: "문턱 전압(V_th)은 MOSFET의 채널 영역에 반전층(Inversion Layer)이 형성되어 전류가 흐르기 시작하는 최소 게이트-소스 전압(V_GS)입니다. V_GS ≥ V_th 이면 ON(전류 흐름), V_GS < V_th 이면 OFF(차단)입니다. 공정 미세화로 V_th가 낮아지면 누설 전류(Leakage)가 증가하는 트레이드오프가 발생합니다."
  },
  {
    id: "Q_V2_050",
    procId: 1,
    type: "choice",
    level: "medium",
    question: "양자 컴퓨팅에서 고전 컴퓨터의 비트(bit)에 대응하는 기본 단위는?",
    options: ["바이트(Byte)", "플립플롭(Flip-Flop)", "큐비트(Qubit)", "레지스터(Register)"],
    answer: "2",
    explanation: "큐비트(Quantum Bit)는 양자 컴퓨터의 기본 정보 단위로, 0과 1이 동시에 존재하는 중첩(Superposition) 상태가 가능합니다. 고전 비트는 0 또는 1 중 하나이지만, 큐비트는 두 상태가 동시에 존재해 병렬 연산이 가능합니다. 현재 반도체 기반(초전도 큐비트, 실리콘 스핀 큐비트)과 광자·이온 트랩 기반 양자 컴퓨터가 경쟁 중입니다."
  },
  {
    id: "Q_V2_051",
    procId: 3,
    type: "choice",
    level: "medium",
    question: "BJT(바이폴라 접합 트랜지스터)에서 신호를 증폭시키는 원리는?",
    options: ["게이트 전압으로 채널을 제어", "소량의 베이스 전류로 대량의 컬렉터 전류를 제어(전류 증폭)", "드레인 전압으로 소스 전류를 조절", "공핍층 폭으로 저항을 변화"],
    answer: "1",
    explanation: "BJT는 전류 제어 소자입니다. 소량의 베이스 전류(I_B)가 대량의 컬렉터 전류(I_C)를 제어하여 증폭이 이루어집니다: I_C = β × I_B (β: 전류 이득, 보통 50~300). MOSFET이 전압 제어인 것과 대비됩니다. BJT는 MOSFET보다 선형 증폭 특성이 우수해 RF 증폭기, 아날로그 회로에서 여전히 사용됩니다."
  },
  {
    id: "Q_V2_052",
    procId: 4,
    type: "ox",
    level: "hard",
    question: "플라즈마 식각(Plasma Etching)은 건식(Dry) 식각 방법이다.",
    options: ["O", "X"],
    answer: "O",
    explanation: "식각은 습식(Wet)과 건식(Dry)으로 분류됩니다. 플라즈마 식각은 반응성 가스를 플라즈마 상태로 활성화해 화학적·물리적으로 재료를 제거하는 건식 식각입니다. 수직 방향으로 선택적으로 식각(이방성)하여 미세 패턴 형성에 필수입니다. 대표 장비: RIE(Reactive Ion Etching), ICP-RIE. Lam Research, Applied Materials가 주요 장비사입니다."
  },
  {
    id: "Q_V2_053",
    procId: 3,
    type: "ox",
    level: "hard",
    question: "삼성전자의 GAA 트랜지스터 기술은 MBCFET(Multi-Bridge Channel FET)이라 불린다.",
    options: ["O", "X"],
    answer: "O",
    explanation: "삼성전자는 자사의 GAA 구조를 MBCFET(Multi-Bridge Channel FET)이라 명명합니다. 여러 장의 나노시트(Nanosheet) 채널을 게이트가 완전히 감싸는 구조로, 2022년 3nm 공정에 세계 최초로 적용했습니다. TSMC는 GAA를 2025년 2nm(N2) 공정에 도입하며, Intel도 18A 공정에 RibbonFET이라는 이름의 GAA를 채택합니다."
  },
  {
    id: "Q_V2_054",
    procId: 7,
    type: "ox",
    level: "easy",
    question: "DRAM은 전원이 꺼지면 데이터가 사라지는 휘발성(Volatile) 메모리이다.",
    options: ["O", "X"],
    answer: "O",
    explanation: "DRAM 셀은 트랜지스터 1개 + 커패시터 1개(1T1C) 구조입니다. 커패시터의 전하는 수 밀리초 만에 소멸되므로 전원이 끊기면 즉시 데이터가 사라집니다. 전원이 켜진 상태에서도 수십 ms마다 리프레시(Refresh)를 해줘야 합니다. NAND Flash는 전원 없이도 데이터를 유지하는 비휘발성 메모리입니다."
  },
  {
    id: "Q_V2_055",
    procId: 1,
    type: "ox",
    level: "easy",
    question: "FinFET은 2차원 평면(Planar) 트랜지스터 구조이다.",
    options: ["O", "X"],
    answer: "X",
    explanation: "FinFET은 물고기 지느러미(Fin) 모양의 실리콘 기둥이 기판에서 수직으로 솟아오른 3차원 입체 구조입니다. 게이트가 채널의 3면을 감싸 전류를 제어하므로, 평면형 대비 단채널 효과(Short Channel Effect)를 크게 억제합니다. 22nm 이하 공정부터 도입되었으며, 이후 더 진보된 GAA(Gate-All-Around) 구조로 발전합니다."
  },
  {
    id: "Q_V2_056",
    procId: 6,
    type: "ox",
    level: "easy",
    question: "TSMC는 순수 파운드리 기업으로, 자체 반도체 브랜드 제품을 직접 설계·판매하지 않는다.",
    options: ["O", "X"],
    answer: "O",
    explanation: "TSMC(Taiwan Semiconductor Manufacturing Company)는 1987년 모리스 창이 설립한 세계 최초·최대 파운드리입니다. 자체 제품 설계 없이 Apple·NVIDIA·AMD·Qualcomm 등 팹리스 고객의 칩을 위탁 생산합니다. 세계 파운드리 시장 점유율 약 60%, 최첨단 3nm 이하 공정에서는 90% 이상을 차지합니다."
  },
  {
    id: "Q_V2_057",
    procId: 7,
    type: "choice",
    level: "easy",
    question: "CMOS 회로에서 PMOS와 NMOS를 함께 사용하는 주요 이유는?",
    options: ["제조 비용 절감", "정적(Static) 전력 소모 최소화", "동작 속도 향상", "회로 면적 감소"],
    answer: "1",
    explanation: "CMOS는 출력이 High일 때 PMOS ON/NMOS OFF, Low일 때 PMOS OFF/NMOS ON으로 동작합니다. 이 상보 구조 덕분에 두 트랜지스터가 동시에 켜지는 직류 경로가 없어 정적 전력 소모가 극도로 낮습니다. NMOS 단독 로직 대비 수십~수백 배 낮은 전력으로, 1980년대 이후 CMOS가 디지털 IC의 표준이 되었습니다."
  },
  {
    id: "Q_V2_058",
    procId: 5,
    type: "choice",
    level: "easy",
    question: "스퍼터링(Sputtering)은 어느 공정 분류에 해당하는가?",
    options: ["건식 식각(Dry Etching)", "PVD(물리 기상 증착)", "CVD(화학 기상 증착)", "이온 주입"],
    answer: "1",
    explanation: "스퍼터링은 Ar 이온이 타겟 금속에 충돌해 물리적으로 원자를 날려 기판에 증착하는 PVD 공정입니다. 화학 반응 없이 타겟과 동일한 조성으로 증착됩니다. 배리어 메탈(TaN·TiN), 금속 시드층, Al 배선 형성에 사용됩니다. 주요 장비사: Applied Materials, Lam Research. 참고로 스퍼터링에서 타겟 물질이 제거되는 것 자체는 일종의 식각이지만, 반도체 공정 분류상 증착(PVD)으로 취급합니다."
  },
  {
    id: "Q_V2_059",
    procId: 7,
    type: "ox",
    level: "easy",
    question: "LPDDR은 주로 서버·데이터센터용 고성능 메모리 규격이다.",
    options: ["O", "X"],
    answer: "X",
    explanation: "LPDDR(Low Power DDR)은 스마트폰·태블릿·노트북 등 배터리 기기에 최적화된 저전력 DRAM 규격입니다. 서버·데이터센터에는 DDR5 RDIMM(ECC), 고성능 워크스테이션에는 DDR5 UDIMM이 쓰입니다. 최신 LPDDR5X는 최대 8,533Mbps를 지원하며, 삼성전자·SK하이닉스·마이크론이 주요 공급사입니다."
  },
  {
    id: "Q_V2_060",
    procId: 8,
    type: "ox",
    level: "easy",
    question: "HBM은 GDDR 메모리보다 메모리 대역폭(Bandwidth)이 높다.",
    options: ["O", "X"],
    answer: "O",
    explanation: "HBM3E의 대역폭은 약 1.2TB/s로, GDDR6X(약 1,008GB/s, 단일 칩 기준)와 비교해도 월등히 높습니다. HBM은 넓은 I/O(1024비트 이상)와 짧은 전기 경로로 대역폭을 극대화합니다. 대신 용량당 단가는 GDDR보다 비싸므로, AI 학습처럼 대역폭이 병목인 연산에 최적입니다."
  },
  {
    id: "Q_V2_061",
    procId: 7,
    type: "choice",
    level: "easy",
    question: "메모리 계층에서 접근 속도가 빠른 순서로 올바른 것은?",
    options: ["HDD > NAND > DRAM > SRAM", "SRAM > DRAM > NAND Flash > HDD", "DRAM > SRAM > NAND > HDD", "NAND > DRAM > SRAM > HDD"],
    answer: "1",
    explanation: "메모리 계층 속도(빠른 순): 레지스터 → SRAM(캐시) → DRAM → NAND Flash(SSD) → HDD. SRAM은 ~1ns, DRAM은 ~10ns, NAND는 ~100μs, HDD는 ~10ms 수준입니다. 속도가 빠를수록 용량당 가격이 비싸 피라미드 형태의 메모리 계층 구조를 이룹니다. CPU 캐시에는 SRAM, 메인 메모리에는 DRAM, 저장장치에는 NAND Flash가 사용됩니다."
  },
  {
    id: "Q_V2_062",
    procId: 7,
    type: "ox",
    level: "medium",
    question: "퀄컴(Qualcomm)은 자체 반도체 생산 팹을 보유한 IDM 기업이다.",
    options: ["O", "X"],
    answer: "X",
    explanation: "퀄컴은 팹리스(Fabless) 기업입니다. 스냅드래곤 AP·모뎀 등을 설계하고 생산은 TSMC·삼성 파운드리에 위탁합니다. 대표 팹리스: Qualcomm, NVIDIA, AMD, Apple, MediaTek 등. IDM(Integrated Device Manufacturer)은 설계·제조·판매를 수직 계열화한 기업으로 Intel, 삼성전자, SK하이닉스, 마이크론 등이 해당합니다."
  },
  {
    id: "Q_V2_063",
    procId: 7,
    type: "ox",
    level: "medium",
    question: "DRAM의 1개 셀은 1개의 트랜지스터와 1개의 커패시터(1T1C)로 구성된다.",
    options: ["O", "X"],
    answer: "O",
    explanation: "DRAM 1T1C 구조에서 MOSFET이 스위치로, 커패시터가 데이터(0/1) 저장 역할을 합니다. 공정 미세화로 커패시터 크기가 작아질수록 전하량 유지가 어려워지는 문제를 해결하기 위해 트렌치(Trench)형 또는 스택(Stack)형 3D 커패시터 구조가 도입됩니다. SRAM은 6T 플립플롭이므로 리프레시가 필요 없습니다."
  },
  {
    id: "Q_V2_064",
    procId: 5,
    type: "choice",
    level: "medium",
    question: "n형 반도체를 만들기 위해 실리콘에 도핑하는 원소는?",
    options: ["붕소(B)", "알루미늄(Al)", "인(P)", "갈륨(Ga)"],
    answer: "2",
    explanation: "Si(4가)에 5가 원소(P·As·Sb)를 도핑하면 여분 전자가 생겨 n형 반도체가 됩니다. 3가 원소(B·Al·Ga)를 도핑하면 정공이 생겨 p형 반도체가 됩니다. 현대 CMOS 트랜지스터에서: NMOS 소스/드레인 → n+도핑(P 또는 As), PMOS 소스/드레인 → p+도핑(B)이 사용됩니다."
  },
  {
    id: "Q_V2_065",
    procId: 1,
    type: "choice",
    level: "medium",
    question: "단결정 실리콘 잉곳을 성장시키는 대표적인 공법은?",
    options: ["졸-겔(Sol-Gel)법", "초크랄스키(Czochralski)법", "MOCVD", "ALD"],
    answer: "1",
    explanation: "초크랄스키(CZ)법은 고순도 실리콘을 용융한 뒤 씨결정(Seed Crystal)을 회전시키며 천천히 인상하여 단결정 잉곳을 성장시킵니다. 인상 속도와 온도로 잉곳 직경을 제어합니다. 12인치(300mm) 잉곳 성장에 수십 시간이 소요되며, 이를 와이어 쏘(Wire Saw)로 슬라이싱하여 웨이퍼를 만듭니다. 반도체용 CZ 실리콘 순도는 9N~11N 수준입니다."
  },
  {
    id: "Q_V2_066",
    procId: 3,
    type: "choice",
    level: "medium",
    question: "P-N 접합 다이오드의 주요 기능은?",
    options: ["전류 증폭", "정류 — 전류를 한 방향으로만 흐르게 함", "주파수 변환", "전압 증폭"],
    answer: "1",
    explanation: "다이오드는 순방향(p→n)에는 전류가 흐르고, 역방향에는 차단되는 단방향 도통 특성으로 AC를 DC로 변환(정류)합니다. 다양한 응용: LED(전자-정공 재결합 시 빛 방출), 제너 다이오드(정전압 회로), 쇼트키 다이오드(고속 스위칭), 포토다이오드(광 검출) 등."
  },
  {
    id: "Q_V2_067",
    procId: 5,
    type: "choice",
    level: "medium",
    question: "DDR5 메모리가 DDR4보다 개선된 점이 아닌 것은?",
    options: ["더 높은 데이터 전송 속도", "낮은 동작 전압(1.1V)", "온다이 ECC(On-Die ECC) 지원", "DRAM 셀 구조가 SRAM으로 변경"],
    answer: "3",
    explanation: "DDR5는 DDR4 대비 전송 속도 2배↑(4,800~8,400MT/s), 전압 감소(1.2V→1.1V), 온다이 ECC 추가, 버스트 길이 증가(BL8→BL16) 등이 개선되었습니다. 그러나 DRAM의 기본 셀 구조(1T1C)는 변하지 않습니다. DDR5는 인텔 12세대(Alder Lake, 2021)부터 지원되기 시작했으며, 현재 주요 플랫폼의 표준으로 자리잡았습니다."
  },
  {
    id: "Q_V2_068",
    procId: 8,
    type: "ox",
    level: "medium",
    question: "SK하이닉스는 HBM3E를 세계 최초로 양산해 NVIDIA H200 GPU에 공급했다.",
    options: ["O", "X"],
    answer: "O",
    explanation: "SK하이닉스는 2024년 초 HBM3E(8단·12단) 양산에 세계 최초로 성공하여 NVIDIA H200에 공급했습니다. HBM3E 12단(12-Hi)은 두께를 40% 줄이면서 용량을 36GB로 높였습니다. HBM 시장에서 SK하이닉스의 점유율은 약 50%로 1위이며, 삼성전자와 마이크론이 경쟁 중입니다. AI 붐으로 HBM은 반도체 산업에서 가장 핫한 제품이 되었으며, HBM3E 12단의 대역폭은 약 1.2TB/s에 달합니다."
  },
  {
    id: "Q_V2_069",
    procId: 6,
    type: "choice",
    level: "hard",
    question: "다음 중 PIM(Processing In Memory) 기술에 대한 설명으로 옳은 것은?",
    options: ["CPU와 메모리를 완전히 분리하여 성능을 높이는 기술", "메모리 내부에 연산 유닛을 탑재해 데이터 이동을 줄이는 기술", "NAND Flash를 DRAM으로 대체하는 기술", "웨이퍼 공정 없이 칩을 제조하는 기술"],
    answer: "1",
    explanation: "PIM(Processing In Memory)은 메모리 내부 또는 근처에 연산 로직을 내장해 CPU/GPU와 메모리 간 데이터 이동(메모리 월, Memory Wall)으로 인한 병목을 줄이는 기술입니다. AI 추론처럼 대량의 데이터를 반복 처리하는 워크로드에서 에너지 효율과 성능을 크게 높일 수 있습니다. 삼성전자의 HBM-PIM, SK하이닉스의 AiM(Accelerator in Memory)이 대표적인 상용화 사례입니다."
  },
  {
    id: "Q_V2_070",
    procId: 1,
    type: "choice",
    level: "easy",
    question: "다음 중 와이드 밴드갭(WBG) 반도체로 분류되지 않는 소재는?",
    options: ["GaN (질화갈륨)", "SiC (탄화실리콘)", "Si (실리콘)", "Ga₂O₃ (산화갈륨)"],
    answer: "2",
    explanation: "WBG는 통상 밴드갭 2.0eV 이상을 말합니다. Si(1.1eV)는 협대역갭 반도체로 해당하지 않습니다. 밴드갭 순서: Ge(0.67) < Si(1.1) < GaAs(1.42) < SiC(3.26) < GaN(3.4) < Ga₂O₃(~4.8). WBG 소재는 고전압·고온·고주파 환경에서 Si보다 월등히 우수한 성능을 발휘합니다."
  },
  {
    id: "Q_V2_071",
    procId: 8,
    type: "ox",
    level: "easy",
    question: "BGA(Ball Grid Array) 패키지는 핀이 패키지 하단에 격자 형태로 배치된다.",
    options: ["O", "X"],
    answer: "O",
    explanation: "BGA는 패키지 하단 전면에 솔더 볼(Solder Ball)을 격자 형태로 배열해 PCB에 연결합니다. 주변에 핀이 노출되는 QFP 대비 I/O 수를 크게 늘리면서도 패키지 크기를 줄일 수 있습니다. CPU·GPU·AP 등 고핀 수 반도체에 필수적으로 사용됩니다. 솔더 볼이 작을수록 미세 피치(Pitch) BGA라 하며, 첨단 패키징으로 발전하고 있습니다."
  },
  {
    id: "Q_V2_072",
    procId: 8,
    type: "ox",
    level: "medium",
    question: "MOSFET에서 게이트(Gate) 전압이 소스-드레인 간 전류를 제어한다.",
    options: ["O", "X"],
    answer: "O",
    explanation: "MOSFET은 전압 제어 소자입니다. 게이트에 문턱 전압(V_th) 이상의 전압을 인가하면 채널이 형성되어 전류가 흐르고(ON), 이하면 차단됩니다(OFF). 이 스위칭 동작이 디지털 0/1을 구현합니다. 게이트 입력 임피던스가 거의 무한대라 구동 전력이 매우 작아, 수십억 개를 하나의 칩에 집적해도 전력 관리가 가능합니다."
  },
  {
    id: "Q_V2_073",
    procId: 8,
    type: "ox",
    level: "medium",
    question: "GAA(Gate-All-Around) FET는 FinFET보다 더 진보된 트랜지스터 구조이다.",
    options: ["O", "X"],
    answer: "O",
    explanation: "GAA FET는 나노시트(Nanosheet) 형태의 채널을 게이트가 4면 전체를 완전히 감싸는 구조입니다. FinFET(3면 제어)보다 누설 전류를 더욱 억제하고 단채널 효과를 줄입니다. 삼성전자는 2022년 세계 최초로 3nm GAA(MBCFET) 양산에 성공했으며, TSMC·Intel도 2nm 이하 공정에 GAA를 적용할 계획입니다."
  },
  {
    id: "Q_V2_074",
    procId: 8,
    type: "choice",
    level: "medium",
    question: "MOSFET의 구성 요소가 아닌 것은?",
    options: ["게이트(Gate)", "소스(Source)", "드레인(Drain)", "컬렉터(Collector)"],
    answer: "3",
    explanation: "MOSFET 단자: 게이트(G)·소스(S)·드레인(D). 베이스(B)는 BJT(바이폴라 접합 트랜지스터)의 단자입니다. BJT: 에미터(E)·베이스(B)·컬렉터(C). MOSFET은 전압 제어 소자(입력 임피던스 ≈ ∞), BJT는 전류 제어 소자입니다. 현대 VLSI는 전력 효율·집적도 면에서 MOSFET이 압도적으로 사용됩니다."
  },
  {
    id: "Q_V2_075",
    procId: 3,
    type: "choice",
    level: "medium",
    question: "2019년 일본이 한국에 수출 규제를 가한 3개 품목에 해당하지 않는 것은?",
    options: ["불화수소(고순도 HF)", "EUV용 포토레지스트", "불화폴리이미드(FPI)", "실리콘 웨이퍼"],
    answer: "3",
    explanation: "2019년 7월 일본 정부가 수출 규제를 강화한 3개 품목은 ① 불화수소, ② EUV용 포토레지스트, ③ 불화폴리이미드(디스플레이 기판용)입니다. 당시 한국의 일본 의존도가 90% 이상이던 소재들입니다. 이 사태가 한국 반도체·디스플레이 업계의 소재·부품·장비 국산화 및 공급망 다변화의 계기가 되었습니다."
  },
  {
    id: "Q_V2_076",
    procId: 1,
    type: "ox",
    level: "medium",
    question: "CoWoS(Chip on Wafer on Substrate)는 TSMC의 2.5D 첨단 패키징 기술이다.",
    options: ["O", "X"],
    answer: "O",
    explanation: "CoWoS는 GPU/AI 가속기 다이와 HBM 메모리를 실리콘 인터포저 위에 나란히 배치하여 초근거리 고대역폭 통신을 가능케 합니다. NVIDIA H100·A100 GPU가 CoWoS 패키지를 사용합니다. AI 수요 급증으로 CoWoS 생산 능력이 반도체 공급망의 핵심 병목 이슈로 부각되었습니다."
  },
  {
    id: "Q_V2_077",
    procId: 8,
    type: "choice",
    level: "hard",
    question: "솔더 범프 없이 구리 패드를 직접 접합하는 차세대 패키징 기술은?",
    options: ["와이어 본딩(Wire Bonding)", "하이브리드 본딩(Hybrid Bonding)", "플립칩(Flip Chip)", "BGA(Ball Grid Array)"],
    answer: "1",
    explanation: "하이브리드 본딩은 구리 패드를 직접 접합해 피치를 수 μm 이하로 극소화합니다. 기존 마이크로 범프 대비 대역폭 수십 배 향상, 에너지 소모 절감이 가능합니다. Sony CIS(이미지 센서 적층), AMD 3D V-Cache(SRAM 적층), TSMC SoIC 등에 이미 적용됩니다. 차세대 3D IC의 핵심 기술로, 무어의 법칙을 대체하는 '패키징 혁명'으로 불립니다."
  },
  {
    id: "Q_V2_078",
    procId: 8,
    type: "ox",
    level: "easy",
    question: "HBM(High Bandwidth Memory)은 DRAM 다이를 TSV로 수직 적층한 메모리이다.",
    options: ["O", "X"],
    answer: "O",
    explanation: "HBM은 여러 장의 DRAM 다이를 TSV(Through Silicon Via)로 수직 연결해 적층하고, GPU·AI 가속기 옆에 실리콘 인터포저를 통해 초근거리로 배치합니다. GDDR6X 대비 대역폭이 수 배~수십 배 높고 전력은 낮습니다. SK하이닉스가 세계 최초 개발·공급했으며, NVIDIA H100/H200의 핵심 부품입니다. HBM3E 기준 1.2TB/s 이상 대역폭을 제공합니다."
  },
  {
    id: "Q_V2_079",
    procId: 5,
    type: "ox",
    level: "easy",
    question: "p형 반도체는 정공(Hole)이 다수 캐리어이다.",
    options: ["O", "X"],
    answer: "O",
    explanation: "실리콘(4가)에 3가 원소(붕소 B, 알루미늄 Al 등)를 도핑하면 공유결합에 빈 자리(정공, Hole)가 생겨 p형 반도체가 됩니다. 반대로 5가 원소(인 P, 비소 As 등)를 도핑하면 여분의 전자가 생겨 n형 반도체가 됩니다. CMOS는 p형 MOSFET(PMOS)과 n형 MOSFET(NMOS)을 상보적으로 결합한 구조입니다."
  },
  {
    id: "Q_V2_080",
    procId: 5,
    type: "ox",
    level: "easy",
    question: "CVD(Chemical Vapor Deposition)는 화학 반응을 이용해 박막을 증착하는 공정이다.",
    options: ["O", "X"],
    answer: "O",
    explanation: "CVD는 반응성 기체 전구체(Precursor)가 웨이퍼 표면에서 화학 반응하여 고체 박막을 증착하는 공정입니다. LPCVD, PECVD, MOCVD 등 다양한 변형이 있습니다. 반면 PVD(Physical Vapor Deposition)는 화학 반응 없이 물리적(스퍼터링, 증발)으로 증착합니다. ALD(원자층 증착)는 CVD의 발전형으로, 원자 1층씩 정밀 제어합니다."
  },
  {
    id: "Q_V2_081",
    procId: 2,
    type: "ox",
    level: "easy",
    question: "삼성전자는 메모리와 시스템 반도체를 모두 생산하는 IDM이다.",
    options: ["O", "X"],
    answer: "O",
    explanation: "삼성전자는 DRAM·NAND Flash 메모리 세계 1위이자, Exynos AP·이미지 센서 등 시스템 반도체도 설계·제조하는 대표적 IDM입니다. 또한 삼성 파운드리 사업부를 통해 외부 고객 칩도 위탁 생산합니다. 즉, 삼성전자는 IDM + 파운드리 + OSAT 기능을 동시에 수행하는 독특한 수직 계열화 구조를 갖추고 있습니다."
  },
  {
    id: "Q_V2_082",
    procId: 6,
    type: "ox",
    level: "easy",
    question: "EDA(Electronic Design Automation)는 반도체 회로 설계를 자동화하는 소프트웨어이다.",
    options: ["O", "X"],
    answer: "O",
    explanation: "EDA 툴 없이는 수십억 개 트랜지스터로 이루어진 현대 반도체를 설계하는 것이 불가능합니다. 논리 합성·배치 배선(P&R)·시뮬레이션·DRC/LVS 검증 등을 자동화합니다. 세계 3대 EDA 기업은 Synopsys, Cadence, Siemens EDA(구 Mentor Graphics)이며 모두 미국 기업으로, 미국이 이 시장을 사실상 독점합니다."
  },
  {
    id: "Q_V2_083",
    procId: 3,
    type: "choice",
    level: "easy",
    question: "노광 광원의 파장이 짧을수록 더 미세한 패턴을 만들 수 있는 이유는?",
    options: ["빛이 빠르게 이동해서", "회절 한계가 줄어들어 해상도가 향상되기 때문 (레일리 방정식)", "포토레지스트가 더 잘 반응해서", "마스크 내구성이 높아져서"],
    answer: "1",
    explanation: "레일리 방정식: 해상도(CD) = k₁ × λ / NA. 파장(λ)이 짧을수록, 개구수(NA)가 클수록 해상도가 높아집니다. 광원 파장 변천: g선(436nm) → i선(365nm) → KrF(248nm) → ArF(193nm) → ArF 이머전(193nm) → EUV(13.5nm). 파장이 짧아질수록 회절에 의한 패턴 번짐이 줄어들어 더 미세한 패턴을 정확히 전사할 수 있습니다."
  },
  {
    id: "Q_V2_084",
    procId: 5,
    type: "choice",
    level: "easy",
    question: "무어의 법칙에서 트랜지스터 집적 수가 약 2배가 되는 주기는?",
    options: ["개월", "년", "약 2년", "년"],
    answer: "2",
    explanation: "인텔 공동창업자 고든 무어(Gordon Moore)가 1965년 예측한 법칙으로, 약 2년마다 트랜지스터 집적 수가 2배씩 증가한다는 내용입니다. 약 50년간 놀랍도록 잘 들어맞았으나, 7nm 이하 공정에서 물리·비용적 한계로 둔화되고 있습니다. 업계는 미세화 대신 3D 적층·칩렛·이종 통합으로 성능을 계속 향상시키고 있습니다."
  },
  {
    id: "Q_V2_085",
    procId: 8,
    type: "ox",
    level: "easy",
    question: "OSAT(Outsourced Semiconductor Assembly and Test)는 반도체 패키징·테스트 전문 기업이다.",
    options: ["O", "X"],
    answer: "O",
    explanation: "OSAT는 팹리스·IDM으로부터 웨이퍼를 받아 패키징(Packaging)과 테스트(Test)를 위탁 수행합니다. 대표 기업: ASE Group(대만), Amkor Technology(미국), JCET(중국). 최근 HBM·CoWoS 같은 첨단 패키징 기술이 OSAT에서도 중요해지면서 OSAT의 기술 역량이 경쟁력의 핵심이 되고 있습니다."
  },
  {
    id: "Q_V2_086",
    procId: 7,
    type: "ox",
    level: "easy",
    question: "AMD의 Ryzen 프로세서는 칩렛(Chiplet) 구조를 적용한 대표적인 제품이다.",
    options: ["O", "X"],
    answer: "O",
    explanation: "AMD Ryzen(Zen 2 이후)은 CPU 코어 다이(CCD, TSMC 7nm/5nm)와 I/O 다이(IOD, TSMC 12nm)를 별도로 제작해 하나의 패키지에 통합하는 칩렛 구조입니다. 코어 다이는 소형이라 수율이 높고, I/O 다이는 상대적으로 저렴한 공정으로 원가를 절감합니다. 이 전략으로 AMD는 인텔을 성능·가격 면에서 압박하는 데 성공했습니다."
  },
  {
    id: "Q_V2_087",
    procId: 3,
    type: "choice",
    level: "easy",
    question: "다음 중 비메모리(시스템) 반도체가 아닌 것은?",
    options: ["AP(Application Processor)", "ASIC(Application-Specific IC)", "FPGA", "DRAM"],
    answer: "3",
    explanation: "DRAM은 메모리 반도체입니다. 비메모리(시스템) 반도체는 CPU·GPU·AP·ASIC·FPGA·마이크로컨트롤러·이미지 센서·전력 IC·아날로그 IC 등 연산·제어·변환 기능을 수행하는 반도체입니다. 세계 반도체 시장에서 메모리가 약 30%, 비메모리가 약 70%를 차지합니다. 한국은 메모리에서 강점이 있으나 비메모리 분야는 상대적으로 취약합니다."
  },
  {
    id: "Q_V2_088",
    procId: 3,
    type: "choice",
    level: "easy",
    question: "다음 중 반도체 장비(Equipment) 기업에 해당하지 않는 것은?",
    options: ["ASML", "Lam Research", "Applied Materials (AMAT)", "ARM Holdings"],
    answer: "3",
    explanation: "ARM Holdings는 프로세서 아키텍처 IP 라이선스 기업입니다. ASML(노광), Lam Research(식각·CVD), Applied Materials(식각·PVD·CVD·CMP), Tokyo Electron(TEL, CVD·세정), KLA(검사·계측)가 대표적인 반도체 장비 5대 기업입니다. 이들 장비 기업, 특히 ASML의 EUV 장비는 첨단 반도체 생산의 절대적 관문으로, 지정학적 핵심 자산이 되었습니다."
  },
  {
    id: "Q_V2_089",
    procId: 2,
    type: "ox",
    level: "easy",
    question: "Apple의 M 시리즈 칩(M1~M4)은 모두 TSMC 공정에서 생산된다.",
    options: ["O", "X"],
    answer: "O",
    explanation: "Apple Silicon(M1·M2·M3·M4 시리즈)은 모두 TSMC 최첨단 공정으로 생산됩니다. M1은 5nm, M2는 3nm, M3·M4는 TSMC N3E/N3P 공정입니다. Apple이 2020년 Intel CPU에서 자체 ARM 기반 칩으로 전환하면서 PC 반도체 시장의 판도가 바뀌었습니다. Apple은 TSMC 최대 고객 중 하나로, TSMC 매출의 약 20~25%를 차지하는 것으로 알려져 있습니다."
  },
  {
    id: "Q_V2_090",
    procId: 3,
    type: "ox",
    level: "easy",
    question: "반도체 산업에서 '팹리스+파운드리' 분업 모델은 TSMC 설립(1987년)과 함께 본격화되었다.",
    options: ["O", "X"],
    answer: "O",
    explanation: "모리스 창은 1987년 대만 정부 지원을 받아 TSMC를 설립하며 순수 파운드리 비즈니스 모델을 창안했습니다. 이전까지 반도체 기업은 반드시 자체 팹이 필요했지만, TSMC 모델 덕분에 팹 없이 설계만 하는 팹리스 기업이 폭발적으로 생겨났습니다. Qualcomm·Broadcom·NVIDIA·AMD 등 현재 최강 팹리스들이 이 모델 위에서 성장했습니다."
  },
  {
    id: "Q_V2_091",
    procId: 4,
    type: "choice",
    level: "medium",
    question: "다음 중 파운드리(Foundry) 전문 기업이 아닌 것은?",
    options: ["TSMC", "Samsung Foundry", "GlobalFoundries", "NVIDIA"],
    answer: "3",
    explanation: "NVIDIA는 GPU를 설계하지만 생산은 TSMC·삼성에 위탁하는 팹리스 기업입니다. 2023년 기준 파운드리 시장: TSMC(60%), Samsung Foundry(12~13%), GlobalFoundries, SMIC, UMC 등이 뒤를 잇습니다. 최첨단(5nm 이하) 공정은 사실상 TSMC와 삼성 파운드리 둘만 가능합니다."
  },
  {
    id: "Q_V2_092",
    procId: 1,
    type: "choice",
    level: "medium",
    question: "실리콘(Si)의 원자번호는?",
    options: ["원자번호 6 — 비금속, 2주기", "원자번호 14 — 반금속, 3주기", "원자번호 32 — 반금속, 4주기", "원자번호 72 — 금속, 6주기"],
    answer: "1",
    explanation: "실리콘(Si)은 원자번호 14, 주기율표 14족 3주기 원소입니다. 가전자(Valence Electron) 4개를 가져 4개의 공유결합을 형성하며, 다이아몬드 입방 구조의 단결정을 이룹니다. 자주 쓰이는 반도체 관련 원자번호: B(5), N(7), P(15), As(33), Ga(31), In(49), Ge(32) 등도 함께 기억하면 유용합니다."
  },
  {
    id: "Q_V2_093",
    procId: 8,
    type: "choice",
    level: "medium",
    question: "AI 반도체 시장에서 HBM을 세계 최초로 개발·공급하며 1위를 유지하는 기업은?",
    options: ["삼성전자", "SK하이닉스", "마이크론(Micron)", "인텔(Intel)"],
    answer: "1",
    explanation: "SK하이닉스는 HBM을 세계 최초 개발(2013년)하고 양산한 기업으로, HBM3·HBM3E 시장에서 세계 점유율 약 50%로 1위를 유지하고 있습니다. NVIDIA H100·H200에 SK하이닉스 HBM3/HBM3E가 독점 공급됩니다. AI 붐으로 HBM 수요가 폭발적으로 증가하면서 SK하이닉스의 위상이 크게 높아졌습니다."
  },
  {
    id: "Q_V2_094",
    procId: 7,
    type: "choice",
    level: "medium",
    question: "RISC-V에 대한 설명으로 옳은 것은?",
    options: ["인텔이 개발한 독점 프로세서 아키텍처", "오픈소스 명령어 집합 아키텍처(ISA)", "ARM의 차세대 버전", "GPU 전용 아키텍처"],
    answer: "1",
    explanation: "RISC-V(리스크 파이브)는 UC 버클리에서 개발한 완전 오픈소스 ISA로, 로열티 없이 자유롭게 사용할 수 있습니다. 미국의 ARM 라이선스 규제를 피할 수 있어 중국 기업들이 특히 적극 채택하고 있습니다. SiFive, 알리바바(T-Head), 화웨이, RISC-V 기반 IoT·AI 칩 개발이 활발합니다. 향후 ARM과 x86에 대항할 세 번째 주류 아키텍처로 주목받고 있습니다."
  },
  {
    id: "Q_V2_095",
    procId: 7,
    type: "choice",
    level: "medium",
    question: "칩렛(Chiplet) 기술을 도입한 주요 목적이 아닌 것은?",
    options: ["개별 다이의 수율(Yield) 향상", "서로 다른 공정 노드 다이의 혼용", "단일 대형 다이 대비 개발비 절감", "DRAM 리프레시 주기 제거"],
    answer: "3",
    explanation: "칩렛은 기능별 소형 다이를 하나의 패키지에 통합하는 기술로, ① 소형 다이일수록 수율 향상, ② 각 기능에 최적 공정 노드 적용(예: CPU 코어는 3nm, I/O는 6nm), ③ 모듈식 설계로 개발비 절감이 주요 장점입니다. DRAM 리프레시는 메모리 셀 구조(커패시터 누설)의 물리적 특성으로, 칩렛과는 무관합니다. 대표 사례: AMD Ryzen(CCD+IOD), Intel Meteor Lake, Apple M3 Ultra."
  },
  {
    id: "Q_V2_096",
    procId: 1,
    type: "ox",
    level: "medium",
    question: "무어의 법칙은 현재도 2년마다 정확히 2배씩 들어맞고 있다.",
    options: ["O", "X"],
    answer: "X",
    explanation: "7nm 이하 공정부터 물리적 한계(양자 터널링, 단채널 효과)와 비용 급증으로 무어의 법칙이 뚜렷이 둔화되고 있습니다. 실제 트랜지스터 밀도 증가 속도는 과거 2년에서 3~4년 주기로 늦어졌습니다. 업계는 미세화 대신 3D 적층, 칩렛, 이종 통합 기술로 성능을 계속 높이는 방향으로 전환하고 있습니다."
  },
  {
    id: "Q_V2_097",
    procId: 2,
    type: "ox",
    level: "medium",
    question: "RISC-V는 오픈소스 ISA(명령어 집합 아키텍처)로 라이선스 비용이 없다.",
    options: ["O", "X"],
    answer: "O",
    explanation: "RISC-V는 UC 버클리에서 2010년 개발된 완전 오픈소스 ISA로, 누구든 로열티 없이 자유롭게 사용할 수 있습니다. ARM 라이선스 규제를 피할 수 있어 중국 기업들이 활발히 채택하고 있으며, SiFive·알리바바 T-Head·화웨이 등이 RISC-V 칩을 개발합니다. IoT·AI 엣지 칩에서도 빠르게 확산 중이며, 차세대 주류 아키텍처로 주목받습니다."
  },
  {
    id: "Q_V2_098",
    procId: 3,
    type: "ox",
    level: "medium",
    question: "반도체 소재 분야에서 포토레지스트 시장은 일본 기업들이 주도하고 있다.",
    options: ["O", "X"],
    answer: "O",
    explanation: "포토레지스트 시장은 JSR, TOK(도쿄오카공업), Shin-Etsu Chemical(신에쓰화학), Fujifilm 등 일본 기업이 세계 시장의 약 80~90%를 점유합니다. 특히 EUV용 포토레지스트는 일본 의존도가 더 높습니다. 2019년 일본의 한국 수출 규제 때 EUV PR이 포함된 이유이기도 합니다. 한국·미국 기업들이 국산화를 추진 중이나 아직 갈 길이 멉니다."
  },
  {
    id: "Q_V2_099",
    procId: 1,
    type: "choice",
    level: "medium",
    question: "다음 중 반도체 전문 소재 기업이 아닌 것은?",
    options: ["JSR Corporation (포토레지스트)", "SUMCO (실리콘 웨이퍼)", "Entegris (공정 소재·필터)", "Lam Research (식각·증착 장비)"],
    answer: "3",
    explanation: "Lam Research는 반도체 장비(식각·CVD) 기업입니다. 반도체 소재 기업: JSR·TOK·Shin-Etsu(PR), SUMCO·Siltronic(웨이퍼), Entegris·CMC Materials(공정 소재·슬러리·필터), Merck KGaA(공정 소재). 소재·부품·장비(소부장) 업계는 최종 반도체 칩보다 덜 알려져 있지만, 반도체 생산의 필수 인프라입니다."
  },
  {
    id: "Q_V2_100",
    procId: 7,
    type: "choice",
    level: "medium",
    question: "반도체 산업에서 '수율(Yield)'이 낮아지는 주요 원인이 아닌 것은?",
    options: ["클린룸 파티클 오염", "공정 변동성(Process Variation)", "웨이퍼 직경이 클수록", "공정 노드가 미세해질수록"],
    answer: "2",
    explanation: "웨이퍼 직경이 클수록 오히려 한 번에 생산하는 칩이 더 많아 수율과 원가 효율이 높아집니다. 수율을 낮추는 주요 요인: 파티클 오염, 공정 변동성, 공정 노드 미세화(결함 민감도 증가), 설계 복잡도 증가, 열·응력 등입니다. 수율(Yield) = 양품 다이 수 / 전체 다이 수 × 100%로 계산하며, 반도체 수익성의 핵심 지표입니다."
  },
  {
    id: "Q_V2_101",
    procId: 3,
    type: "choice",
    level: "medium",
    question: "다음 중 FPGA(Field Programmable Gate Array)에 대한 설명으로 옳은 것은?",
    options: ["제조 후 회로 변경이 불가능한 고정 회로", "사용자가 프로그래밍으로 회로 구성을 재구성할 수 있는 소자", "메모리 저장 전용 반도체", "GPU와 동일한 구조로 AI 연산에만 사용"],
    answer: "1",
    explanation: "FPGA는 수십만~수천만 개의 재프로그래머블 로직 블록으로 이루어져 HDL(Verilog, VHDL)로 원하는 회로를 반복 재구성할 수 있습니다. ASIC보다 설계 비용과 시간이 적게 들어 프로토타입 개발·소량 생산에 유리하고, 현장 업데이트가 가능합니다. 데이터센터 네트워크 가속(MS Azure), AI 추론 가속, 금융 알고리즘 트레이딩 등에 활용됩니다. Xilinx(AMD 인수)와 Altera(Intel 인수)가 대표 FPGA 기업입니다."
  },
  {
    id: "Q_V2_102",
    procId: 7,
    type: "ox",
    level: "medium",
    question: "ARM Holdings는 2023년 나스닥에 재상장하며 반도체 업계 최대 규모의 IPO 중 하나를 달성했다.",
    options: ["O", "X"],
    answer: "O",
    explanation: "ARM Holdings는 소프트뱅크 인수(2016) 후 2023년 9월 나스닥에 재상장했습니다. IPO 공모가 기준 시가총액 약 545억 달러로 2023년 최대 IPO 중 하나였습니다. NVIDIA의 ARM 인수 시도(2022, 400억 달러)가 규제 당국의 반대로 무산된 뒤 IPO로 전환했습니다. AI 붐으로 ARM 기반 서버·모바일 수요가 늘면서 상장 후 주가가 크게 상승했습니다."
  },
  {
    id: "Q_V2_103",
    procId: 8,
    type: "ox",
    level: "medium",
    question: "반도체 기업의 R&D 비용은 매출 대비 통상 1~2% 수준이다.",
    options: ["O", "X"],
    answer: "X",
    explanation: "반도체 기업의 R&D 비율은 산업 평균보다 훨씬 높습니다. NVIDIA 약 15~20%, Qualcomm 약 25%, AMD 약 20%, Synopsys 약 20% 수준입니다. 팹리스는 제조 시설이 없는 대신 R&D에 집중적으로 투자하는 경향이 있습니다. 이처럼 높은 R&D 투자가 기술 리더십과 특허 포트폴리오를 유지하는 핵심입니다. 반도체를 '지식 집약 산업'이라 부르는 이유입니다."
  },
  {
    id: "Q_V2_104",
    procId: 1,
    type: "ox",
    level: "medium",
    question: "차량용 반도체 기능 안전성을 위한 국제 표준은 ISO 26262이다.",
    options: ["O", "X"],
    answer: "O",
    explanation: "ISO 26262는 자동차 전기·전자 시스템의 기능 안전성(Functional Safety) 국제 표준으로, 위험도에 따라 ASIL(Automotive Safety Integrity Level) A~D 4단계로 분류합니다. ASIL-D가 가장 엄격하며 에어백·브레이크·조향 제어 시스템에 적용됩니다. 차량용 반도체는 일반 소비자용 대비 더 긴 수명(15년 이상), 넓은 온도 범위(-40~+150°C), 낮은 불량률을 요구합니다."
  },
  {
    id: "Q_V2_105",
    procId: 3,
    type: "choice",
    level: "medium",
    question: "2023년 기준 세계 반도체 장비 시장 매출 1위 기업은?",
    options: ["ASML (네덜란드)", "Lam Research (미국)", "Applied Materials — AMAT (미국)", "Tokyo Electron — TEL (일본)"],
    answer: "2",
    explanation: "반도체 장비 시장 순위(2023): ① AMAT(~23%) → ② ASML(~20%) → ③ Lam Research(~15%) → ④ TEL(~13%) → ⑤ KLA(~10%). AMAT는 CVD·PVD·이온주입·CMP 등 다양한 장비를 공급합니다. ASML은 노광 장비만으로 2위인데, EUV 장비 한 대 가격이 약 2억 달러이기 때문입니다."
  },
  {
    id: "Q_V2_106",
    procId: 6,
    type: "choice",
    level: "medium",
    question: "차량용 반도체(Automotive Semiconductor) 시장 점유율 1위(2023년 기준) 기업은?",
    options: ["NVIDIA", "Qualcomm", "Infineon Technologies", "Intel"],
    answer: "2",
    explanation: "차량용 반도체 시장(2023 약 700억 달러): Infineon(독일, ~13%) → NXP(네덜란드) → Renesas(일본) → ST마이크로(스위스·이탈리아) → TI(미국) 순입니다. Infineon은 MCU·SiC MOSFET·보안 칩에서 강점이 있습니다. NVIDIA는 자율주행 AI 플랫폼(Orin·Thor)으로 차량용 시장에 진출 중이지만 아직 전통 차량용 반도체 업체와는 다른 시장 포지션입니다."
  },
  {
    id: "Q_V2_107",
    procId: 4,
    type: "choice",
    level: "medium",
    question: "반도체 산업에서 '팹리스+파운드리' 분업 모델을 창안하고 TSMC를 설립한 인물은?",
    options: ["고든 무어 (Gordon Moore)", "앤디 그로브 (Andy Grove)", "모리스 창 (Morris Chang)", "젠슨 황 (Jensen Huang)"],
    answer: "2",
    explanation: "모리스 창(張忠謀)은 TI 출신으로 1987년 대만 정부 지원으로 TSMC를 설립, 순수 파운드리 모델을 창안했습니다. 고든 무어는 인텔 공동창업자·무어의 법칙 제창자, 앤디 그로브는 인텔 CEO로 PC 혁명을 이끌었으며, 젠슨 황은 NVIDIA CEO로 GPU의 AI 전환을 주도했습니다. 모두 반도체 역사를 바꾼 전설적 인물들입니다."
  },
  {
    id: "Q_V2_108",
    procId: 3,
    type: "ox",
    level: "hard",
    question: "최첨단 반도체 팹(12인치) 1개 신설 비용은 약 1조 원 이하이다.",
    options: ["O", "X"],
    answer: "X",
    explanation: "최첨단 3~5nm 공정 12인치 팹 1개 건설 비용은 약 200억 달러(약 26조 원) 이상입니다. TSMC 애리조나 팹 2개동 건설 비용만 약 400억 달러에 달합니다. 이 막대한 투자 비용이 신규 파운드리 진입을 사실상 불가능하게 만드는 핵심 진입 장벽입니다. 반도체 팹은 '세계에서 가장 비싼 공장' 중 하나로, EUV 장비 한 대만 약 2,000억 원에 달합니다."
  },
  {
    id: "Q_V2_109",
    procId: 6,
    type: "ox",
    level: "hard",
    question: "반도체 산업에서 '팹라이트(Fab-Lite)' 전략은 일부 제조 역량을 유지하면서 외부 파운드리도 활용하는 방식이다.",
    options: ["O", "X"],
    answer: "O",
    explanation: "팹라이트는 완전한 IDM도, 순수 팹리스도 아닌 중간 형태입니다. 자체 팹은 유지하되 첨단 공정 일부를 외부 파운드리에 위탁합니다. ST마이크로일렉트로닉스, 텍사스인스트루먼트(TI), 온세미컨덕터 등이 팹라이트 전략을 채택합니다. 최첨단 공정 투자 비용이 급증하면서 팹라이트를 택하는 기업이 늘고 있습니다."
  },
  {
    id: "Q_V2_110",
    procId: 8,
    type: "choice",
    level: "hard",
    question: "인텔의 'IDM 2.0' 전략의 핵심 내용은?",
    options: ["자체 팹 완전 폐쇄 후 순수 팹리스로 전환", "자체 제조 역량 유지 + 파운드리 서비스(IFS) 개시 + 외부 파운드리 병행", "ARM 아키텍처로 전환 및 x86 포기", "HBM 메모리 사업 진출에 집중"],
    answer: "1",
    explanation: "팻 겔싱어 CEO가 2021년 발표한 IDM 2.0: ① 자체 공정 경쟁력 회복(Intel 4/3/18A), ② Intel Foundry Services(IFS) 론칭(외부 고객 위탁 생산), ③ 일부 제품은 TSMC 등 외부 파운드리 활용. 미국 정부의 CHIPS Act 최대 수혜 기업으로 애리조나·오하이오 팹을 건설 중입니다. 실행 과정에서 지연과 비용 초과 문제가 발생해 2024년 파운드리 사업 구조조정도 이루어졌습니다."
  },
  {
    id: "Q_V2_111",
    procId: 6,
    type: "ox",
    level: "easy",
    question: "NVIDIA의 시가총액은 2024년 한때 3조 달러를 돌파하며 세계 최대 기업 중 하나가 되었다.",
    options: ["O", "X"],
    answer: "O",
    explanation: "NVIDIA는 AI 붐의 핵심 수혜 기업으로, 2024년 6월 시가총액이 약 3조 달러 이상을 돌파하며 Microsoft·Apple과 함께 세계 최고 시가총액 기업 반열에 올랐습니다. H100·H200 GPU가 ChatGPT·Gemini·Claude 등 AI 모델 학습·추론의 사실상 표준 인프라가 되면서 수요가 폭발적으로 증가했습니다. 2024 회계연도 매출은 전년 대비 122% 성장했습니다."
  },
  {
    id: "Q_V2_112",
    procId: 1,
    type: "ox",
    level: "easy",
    question: "전기차(EV) 1대에 탑재되는 반도체 개수는 내연기관차보다 적다.",
    options: ["O", "X"],
    answer: "X",
    explanation: "전기차에는 내연기관차 대비 약 2~3배 많은 반도체가 탑재됩니다. 내연기관차 약 300~500개, 전기차는 약 1,000~2,000개 이상의 반도체 칩이 필요합니다. EV에는 배터리 관리 시스템(BMS), 인버터용 SiC MOSFET, 모터 컨트롤러, ADAS, 인포테인먼트 SoC 등이 추가됩니다. 이 때문에 자동차 반도체 시장이 2030년까지 연 10% 이상의 고성장이 예상됩니다."
  },
  {
    id: "Q_V2_113",
    procId: 3,
    type: "ox",
    level: "easy",
    question: "엣지 AI(Edge AI) 반도체는 데이터를 클라우드 서버로 보내지 않고 기기 자체에서 AI 연산을 처리한다.",
    options: ["O", "X"],
    answer: "O",
    explanation: "엣지 AI는 스마트폰·자동차·IoT 기기 등 '엣지' 기기에서 AI 추론을 처리합니다. 클라우드 대비 응답 지연(Latency) 감소, 프라이버시 보호, 오프라인 동작 등의 장점이 있습니다. 모바일 SoC의 NPU(Neural Processing Unit)가 핵심 소자입니다. Apple A11(2017) 최초 탑재 이후 모든 최신 플래그십 SoC에 NPU가 기본 내장됩니다."
  },
  {
    id: "Q_V2_114",
    procId: 8,
    type: "choice",
    level: "medium",
    question: "AI 가속기 GPU 시장에서 2024년 기준 NVIDIA의 최신 아키텍처 세대는?",
    options: ["Turing", "Ampere", "Hopper", "Blackwell"],
    answer: "3",
    explanation: "NVIDIA GPU 아키텍처 변천: Turing(2018, RTX 20) → Ampere(2020, RTX 30/A100) → Hopper(2022, H100/H200) → Blackwell(2024, B100/B200/GB200). Blackwell 기반 GB200 NVL72는 랙 단위 AI 연산 시스템으로, H100 대비 학습 성능이 약 4배, 추론 성능이 약 30배 향상된 것으로 발표되었습니다. HBM3E가 탑재됩니다."
  },
  {
    id: "Q_V2_115",
    procId: 8,
    type: "choice",
    level: "medium",
    question: "반도체 공급망에서 '미세화 둔화'를 극복하기 위한 대안 기술이 아닌 것은?",
    options: ["D 적층(3D Stacking)", "칩렛(Chiplet) 이종 통합", "첨단 패키징(Advanced Packaging)", "웨이퍼 두께만 줄이는 박형화"],
    answer: "3",
    explanation: "무어의 법칙 둔화에 대응하는 기술: 3D 적층(HBM, 3D NAND), 칩렛+이종 통합, 첨단 패키징(CoWoS, SoIC, FOVEROS), 새로운 트랜지스터 구조(GAA) 등이 있습니다. 웨이퍼 박형화(Thinning)는 TSV 형성이나 열 방출 개선에 도움이 되지만, 그 자체만으로 트랜지스터 성능이나 집적도를 향상시키지는 않습니다."
  },
  {
    id: "Q_V2_116",
    procId: 3,
    type: "choice",
    level: "medium",
    question: "반도체 산업에서 '지정학적 리스크'의 핵심 이슈로 부각된 것은?",
    options: ["반도체 수요 감소", "미국의 대중국 첨단 반도체·장비 수출 규제와 공급망 재편", "반도체 대형화 추세", "DRAM 가격 하락"],
    answer: "1",
    explanation: "미국은 2022~2023년 EUV 장비·첨단 반도체 칩·EDA 소프트웨어의 중국 수출 규제를 강화했습니다. 또한 CHIPS Act(미국), EU Chips Act, 일본 반도체 전략 등 각국이 반도체 자국 생산을 지원하며 공급망 재편이 가속화되고 있습니다. TSMC의 애리조나 팹, 삼성전자의 텍사스 팹 건설이 이 흐름의 산물입니다. 반도체가 경제·안보의 핵심 자산이 된 시대입니다."
  },
  {
    id: "Q_V2_117",
    procId: 6,
    type: "ox",
    level: "medium",
    question: "NVIDIA의 CUDA는 GPU 병렬 연산을 위한 독점 플랫폼으로, 경쟁사 GPU에서는 실행되지 않는다.",
    options: ["O", "X"],
    answer: "O",
    explanation: "CUDA(Compute Unified Device Architecture)는 NVIDIA GPU에서만 실행되는 독점 병렬 컴퓨팅 플랫폼으로, 2006년 출시 이후 AI·딥러닝 생태계의 표준이 되었습니다. TensorFlow·PyTorch 등 주요 AI 프레임워크가 CUDA 기반으로 최적화되어 있어, CUDA 생태계가 NVIDIA의 가장 강력한 경제적 해자(Moat)입니다. AMD ROCm, Intel OneAPI 등 오픈소스 대안이 있지만 아직 CUDA를 넘지 못합니다."
  },
  {
    id: "Q_V2_118",
    procId: 6,
    type: "ox",
    level: "medium",
    question: "PIM(Processing In Memory)은 메모리 내부에 연산 기능을 탑재해 CPU-메모리 간 데이터 이동을 줄인다.",
    options: ["O", "X"],
    answer: "O",
    explanation: "PIM은 '메모리 월(Memory Wall)'을 해결하는 핵심 기술입니다. 메모리 내부에 연산 유닛을 내장해 데이터를 이동시키지 않고 메모리 안에서 바로 연산합니다. 삼성전자 HBM-PIM, SK하이닉스 AiM(Accelerator in Memory)이 대표적 상용화 사례입니다. AI 추론처럼 메모리 대역폭이 병목인 워크로드에서 에너지 효율을 크게 높입니다."
  },
  {
    id: "Q_V2_119",
    procId: 8,
    type: "choice",
    level: "medium",
    question: "NVIDIA가 AI 반도체 시장에서 압도적 우위를 유지하는 핵심 경쟁력은?",
    options: ["세계 최저 가격의 GPU 공급", "CUDA 소프트웨어 생태계 + HBM 기반 초고대역폭 GPU", "자체 반도체 팹(Fab) 보유", "스마트폰용 저전력 칩 공급"],
    answer: "1",
    explanation: "NVIDIA의 핵심 해자는 CUDA(2006년 출시, AI 프레임워크가 CUDA 기반으로 최적화)와 HBM 탑재 GPU(H100: 3.35TB/s 대역폭)의 조합입니다. CUDA 생태계에 수천만 명의 개발자가 묶여 있어 경쟁사가 하드웨어를 따라잡아도 생태계 전환이 어렵습니다. H100 GPU 1장 가격이 약 3~4만 달러임에도 수요가 공급을 압도했습니다."
  },
  {
    id: "Q_V2_120",
    procId: 6,
    type: "choice",
    level: "medium",
    question: "반도체 업황 지표인 'Book-to-Bill Ratio'가 1.0 이상일 때 의미하는 것은?",
    options: ["반도체 재고가 1개월치 이상 쌓여 있다", "수주(Book) 금액이 출하(Bill) 금액보다 많아 업황 호조 신호다", "반도체 가격이 1년 전 대비 상승했다", "파운드리 가동률이 100%를 초과했다"],
    answer: "1",
    explanation: "Book-to-Bill Ratio = 수주액 ÷ 출하액. 1.0 이상이면 주문이 출하를 초과해 향후 매출 증가를 시사하는 업황 호조 신호입니다. 1.0 미만이면 출하가 주문보다 많아 재고 과잉, 업황 둔화 신호입니다. SEMI(반도체 장비·재료 국제협회)가 매월 북미 장비 B-to-B 비율을 발표하며, 반도체 투자자들이 중요하게 모니터링하는 선행 지표입니다."
  },
  {
    id: "Q_V2_121",
    procId: 2,
    type: "choice",
    level: "medium",
    question: "2024년 기준 AI 가속기 GPU 시장에서 NVIDIA의 점유율은?",
    options: ["약 30~40%", "약 50~60%", "약 70~80% 이상", "약 99% 사실상 완전 독점"],
    answer: "2",
    explanation: "2023~2024년 기준 NVIDIA는 AI 훈련·추론용 GPU 시장의 약 70~85%를 점유합니다. AMD MI300X가 경쟁 제품으로 부상했으나 CUDA 장벽으로 침투가 제한적입니다. Google(TPU)·Amazon(Trainium)·Microsoft(Maia) 등 빅테크 자체 칩 개발이 확산되며 장기적으로 점유율이 하락할 가능성이 있습니다. 그러나 단기적으로는 NVIDIA 지배력이 유지될 전망입니다."
  },
  {
    id: "Q_V2_122",
    procId: 3,
    type: "choice",
    level: "medium",
    question: "반도체 산업에서 'Memory Wall'이란?",
    options: ["반도체 팹 내부의 방진 벽체", "CPU 처리 속도 대비 메모리 대역폭이 부족해 발생하는 성능 병목 현상", "DRAM 셀의 물리적 크기 한계", "메모리 가격이 급등하는 현상"],
    answer: "1",
    explanation: "메모리 월은 1995년 제시된 개념으로, CPU 연산 성능은 기하급수 증가하는 반면 메모리 대역폭 개선은 훨씬 느려 시스템이 메모리에 의해 병목을 겪는 현상입니다. AI 시대에 더욱 심각해져 HBM·PIM·CXL·3D 적층 메모리 등이 해결책으로 주목받습니다."
  },
  {
    id: "Q_V2_123",
    procId: 8,
    type: "choice",
    level: "medium",
    question: "반도체 메모리 '다운사이클(Down Cycle)'의 영향이 아닌 것은?",
    options: ["ASP(평균 판매 가격) 급락", "재고 증가 및 감산(CapEx 축소)", "영업이익 급감 또는 적자 전환", "기술 개발 중단 및 공정 노드 역행"],
    answer: "3",
    explanation: "다운사이클에서 기업들은 가격 하락·재고 증가·설비 투자 축소·인력 감원을 경험합니다. 그러나 R&D와 기술 개발은 오히려 지속합니다. 다운사이클에 경쟁사가 투자를 줄이는 틈을 타 차세대 기술을 선점하는 전략이 일반적입니다. 삼성·SK하이닉스는 2022~23년 다운사이클에서도 HBM3E 기술 확보에 집중해 2024년 AI 수요 반등 시 경쟁력을 극대화했습니다."
  },
  {
    id: "Q_V2_124",
    procId: 5,
    type: "choice",
    level: "medium",
    question: "RISC-V 아키텍처를 지정학적 이유로 가장 적극적으로 채택하는 국가는?",
    options: ["미국", "일본", "중국", "독일"],
    answer: "2",
    explanation: "중국은 미국의 ARM 라이선스 제한 위험을 피하기 위해 오픈소스 RISC-V를 국가 전략적으로 육성합니다. 알리바바 T-Head(현무 시리즈), 화웨이, StarFive 등 수십 개 중국 기업이 RISC-V 프로세서를 개발 중입니다. 중국 정부는 RISC-V를 반도체 자립의 핵심 수단으로 지원하며 대규모 투자를 집행하고 있습니다. IoT·AI 엣지 분야에서 RISC-V 채택이 특히 빠릅니다."
  },
  {
    id: "Q_V2_125",
    procId: 3,
    type: "choice",
    level: "medium",
    question: "다음 중 빅테크 기업이 자체 개발한 AI 가속기·칩이 아닌 것은?",
    options: ["Google TPU (Tensor Processing Unit)", "Amazon Trainium / Inferentia", "Microsoft Maia 100", "Samsung CUDA Core"],
    answer: "3",
    explanation: "빅테크 자체 AI 칩: Google TPU(2016, AI 추론·학습), Amazon Trainium/Inferentia(AWS), Microsoft Maia 100(Azure AI), Meta MTIA, Apple Neural Engine. CUDA는 NVIDIA 독점 플랫폼이므로 삼성과 무관합니다. 빅테크가 자체 칩을 개발하는 이유: NVIDIA 의존도·비용 절감, 자사 워크로드 최적화, 데이터센터 TCO 감소입니다."
  },
  {
    id: "Q_V2_126",
    procId: 3,
    type: "ox",
    level: "hard",
    question: "UCIe(Universal Chiplet Interconnect Express)는 서로 다른 회사의 칩렛을 연결하는 개방형 표준이다.",
    options: ["O", "X"],
    answer: "O",
    explanation: "UCIe는 2022년 발표된 개방형 칩렛 상호 연결 표준으로, Intel·AMD·ARM·TSMC·삼성 등 90개 이상의 기업이 참여합니다. 서로 다른 회사·공정에서 만든 칩렛을 표준 인터페이스로 연결하여 레고처럼 조합할 수 있습니다. UCIe 덕분에 CPU 코어(TSMC 3nm) + AI 가속기(삼성 4nm) + 메모리 컨트롤러를 하나의 패키지에 통합하는 이종 통합이 더 쉬워집니다."
  },
  {
    id: "Q_V2_127",
    procId: 3,
    type: "ox",
    level: "hard",
    question: "CXL(Compute Express Link)은 CPU와 메모리·가속기를 고속으로 연결하는 개방형 인터페이스 표준이다.",
    options: ["O", "X"],
    answer: "O",
    explanation: "CXL은 PCIe 기반의 차세대 고속 인터커넥트로, CPU·GPU·메모리 사이의 캐시 코히어런트한 데이터 공유를 가능하게 합니다. CXL 메모리 풀링으로 서버에서 메모리를 유연하게 확장·공유할 수 있어 AI·데이터센터 인프라 효율을 크게 높입니다. Intel 주도 하에 AMD·ARM·삼성·SK하이닉스 등 주요 기업이 참여합니다."
  },
  {
    id: "Q_V2_128",
    procId: 6,
    type: "ox",
    level: "hard",
    question: "인텔의 Intel 18A 공정은 GAA 트랜지스터(RibbonFET)와 후면 전력 공급(PowerVia)을 적용한다.",
    options: ["O", "X"],
    answer: "O",
    explanation: "Intel 18A(2025년 양산 목표)는 두 가지 혁신을 동시에 도입합니다. RibbonFET(인텔의 GAA 트랜지스터)과 PowerVia(후면 전력 공급망)입니다. 기존 앞면에 있던 전력 배선을 뒷면으로 이동해 신호 배선 밀도를 높이고 전력 효율을 개선합니다. 인텔은 이 공정으로 파운드리 서비스(IFS)를 본격화하며 TSMC·삼성과의 경쟁을 노립니다."
  },
  {
    id: "Q_V2_129",
    procId: 2,
    type: "choice",
    level: "hard",
    question: "Apple A11 Bionic(iPhone X, 2017)이 탑재한 AI 전용 연산 유닛의 공식 명칭은?",
    options: ["AI Engine", "Neural Engine (뉴럴 엔진)", "Tensor Core", "NPU Core"],
    answer: "1",
    explanation: "Apple은 A11 Bionic(2017, iPhone X)에 전용 AI 연산 유닛을 탑재하며 이를 Neural Engine(뉴럴 엔진)이라 명명했습니다. 초당 6,000억 회 연산을 지원하며 Face ID·포트레이트 모드·AR 기능을 가능케 했습니다. 참고로 Huawei도 같은 해 Kirin 970에 NPU를 탑재하며 경쟁이 시작되었습니다. 현재 Qualcomm(Hexagon NPU), 삼성(MX NPU), MediaTek(APU) 등 모든 플래그십 SoC에 NPU가 기본 내장됩니다."
  },
  {
    id: "Q_V2_130",
    procId: 4,
    type: "choice",
    level: "hard",
    question: "2025~2026년 양산 목표의 2nm 공정 경쟁에 참가하지 않는 기업은?",
    options: ["TSMC (N2)", "삼성전자 (SF2)", "Intel (18A)", "GlobalFoundries"],
    answer: "3",
    explanation: "GlobalFoundries는 2018년 7nm 이하 공정 개발을 공식 중단하고 12~28nm 성숙 공정에 집중합니다. 2nm 경쟁은 TSMC(2025 N2 양산 목표), 삼성전자(2025 SF2), Intel(2025 18A)의 3파전입니다. 누가 먼저 안정적인 2nm 양산에 성공하느냐가 파운드리 시장 판도를 바꿀 핵심 이벤트입니다. GF는 차량용·IoT·5G RF 등 성숙 공정 수요에 집중하는 전략을 채택했습니다."
  },
  {
    id: "Q_V2_131",
    procId: 1,
    type: "choice",
    level: "hard",
    question: "반도체 산업에서 '이종 통합(Heterogeneous Integration)'의 정의로 옳은 것은?",
    options: ["동일 공정으로 만든 동일 다이를 병렬 배치하는 것", "서로 다른 기술·공정·기능의 다이를 하나의 패키지에 통합하는 것", "Si와 GaAs를 한 웨이퍼에 동시 제조하는 것", "DRAM과 NAND를 단일 셀에 통합하는 것"],
    answer: "1",
    explanation: "이종 통합은 다양한 공정·재료·기능의 칩렛이나 다이를 하나의 패키지에 통합합니다. 예시: CPU 코어(3nm) + I/O 다이(6nm) + HBM(DRAM) + AI 가속기(7nm)를 하나의 패키지에 결합. 각 기능에 최적 공정을 적용해 성능·원가 효율을 높이고 단일 대형 다이의 수율 한계를 극복합니다. 무어의 법칙 둔화에 대응하는 반도체 업계의 핵심 전략입니다."
  },
  {
    id: "Q_V2_132",
    procId: 3,
    type: "choice",
    level: "hard",
    question: "양자 컴퓨팅에서 큐비트 오류율을 줄이는 핵심 기술은?",
    options: ["트랜지스터 집적도 향상", "양자 오류 정정(Quantum Error Correction)", "EUV 리소그래피 적용", "HBM 메모리 탑재"],
    answer: "1",
    explanation: "큐비트는 환경 잡음에 극도로 민감해 오류가 빈번합니다. QEC(양자 오류 정정)는 여러 물리 큐비트로 하나의 논리 큐비트를 구현해 오류를 감지·수정합니다. Google Willow(2024), IBM Condor 등이 QEC 진전을 경쟁 중입니다. 실용적 양자 컴퓨터 실현까지 수십 년이 걸릴 것으로 전망되지만, 암호 해독·신약 개발·물류 최적화 분야에서의 잠재력이 매우 높습니다."
  },
  {
    id: "Q_V2_133",
    procId: 1,
    type: "choice",
    level: "hard",
    question: "반도체 업계에서 '실리콘 포토닉스(Silicon Photonics)'가 주목받는 이유는?",
    options: ["DRAM 용량을 10배 이상 늘릴 수 있기 때문", "빛(광자)으로 데이터를 전송해 전력과 대역폭 문제를 동시에 해결하기 때문", "기존 Si 공정을 GaAs로 대체하기 위해", "NAND Flash 속도를 높이기 위해"],
    answer: "1",
    explanation: "실리콘 포토닉스는 Si 기판 위에 광도파로·광변조기·광검출기를 집적해 전기 대신 빛으로 데이터를 전송합니다. 전기 신호 대비 전력 소모가 적고 대역폭이 넓으며 장거리 신호 손실이 적습니다. 데이터센터 서버 간 광 인터커넥트, AI 칩 간 초고속 연결에 활용됩니다. Intel·Cisco·IBM·Ayar Labs 등이 개발 중이며, 미래 AI 인프라의 핵심 기술로 주목받습니다."
  },
  {
    id: "Q_V2_134",
    procId: 7,
    type: "ox",
    level: "easy",
    question: "미국 CHIPS and Science Act는 2022년 제정되어 반도체 자국 생산을 지원한다.",
    options: ["O", "X"],
    answer: "O",
    explanation: "미국 CHIPS법(2022년 8월 제정)은 반도체 제조 보조금 약 390억 달러와 R&D·인력 지원 약 130억 달러, 총 약 527억 달러를 투자합니다. TSMC·삼성·인텔의 미국 팹 건설을 지원하며, 보조금 수혜 기업은 10년간 중국 첨단 반도체 시설 투자가 제한됩니다. 유럽 Chips Act, 일본·한국의 반도체 지원 법안 등 각국의 유사 법안이 잇따라 제정되었습니다."
  },
  {
    id: "Q_V2_135",
    procId: 8,
    type: "ox",
    level: "easy",
    question: "DRAM 시장은 삼성전자·SK하이닉스·마이크론 3개 기업이 전 세계의 95% 이상을 과점한다.",
    options: ["O", "X"],
    answer: "O",
    explanation: "DRAM 시장은 전형적인 3강 과점 구조입니다. 2023년 기준 삼성전자 약 41%, SK하이닉스 약 31%, 마이크론 약 23%, 합산 약 95%입니다. 높은 기술 장벽과 막대한 설비투자로 신규 진입이 사실상 불가능합니다. NAND Flash도 삼성·SK하이닉스·마이크론·키옥시아·WDC·YMTC 상위 6사가 시장을 지배합니다."
  },
  {
    id: "Q_V2_136",
    procId: 8,
    type: "ox",
    level: "easy",
    question: "반도체 메모리 시장은 수요·공급 변동에 따른 주기적 가격 사이클(Silicon Cycle)이 존재한다.",
    options: ["O", "X"],
    answer: "O",
    explanation: "반도체 시장은 호황→과잉 투자→공급 과잉→불황→재고 소진→호황을 약 3~5년 주기로 반복합니다. 2020~2021년 팬데믹 특수 슈퍼사이클, 2022~2023년 재고 조정 다운사이클, 2024년 AI 수요로 HBM 중심 반등 패턴이 대표적입니다. 이 사이클을 예측하고 투자 타이밍을 잡는 것이 반도체 기업 경영과 투자의 핵심입니다."
  },
  {
    id: "Q_V2_137",
    procId: 2,
    type: "ox",
    level: "easy",
    question: "세계 반도체 시장에서 비메모리(시스템) 반도체가 전체 시장의 약 70%를 차지한다.",
    options: ["O", "X"],
    answer: "O",
    explanation: "글로벌 반도체 시장에서 비메모리(시스템) 반도체가 약 70%, 메모리가 약 30%를 차지합니다. 비메모리는 CPU·GPU·AP·아날로그·MCU·이미지 센서·전력 반도체 등을 포함합니다. 한국은 메모리 분야에서 세계 최강이지만 비메모리는 취약하여, 시스템 반도체 육성이 국가 전략 과제입니다. 비메모리 시장은 Intel·NVIDIA·Qualcomm·Broadcom·TI 등 주로 미국 기업이 강세입니다."
  },
  {
    id: "Q_V2_138",
    procId: 8,
    type: "ox",
    level: "easy",
    question: "반도체 슈퍼사이클은 2020~2021년 팬데믹 특수로 나타났다가, 2022~2023년 재고 조정 국면이 뒤따랐다.",
    options: ["O", "X"],
    answer: "O",
    explanation: "코로나19(2020)로 재택근무·온라인교육 수요 폭증 → 슈퍼사이클 → 반도체 기업 공격적 증설 → 2022년 하반기 소비 둔화·재고 과잉으로 DRAM·NAND 가격 급락(다운사이클). 2024년 AI용 HBM 수요 폭증으로 빠른 회복 중입니다. 이 사이클 패턴은 반도체 산업의 고유한 특성으로, 투자자와 기업 모두에게 중요한 사이클 관리가 요구됩니다."
  },
  {
    id: "Q_V2_139",
    procId: 4,
    type: "ox",
    level: "easy",
    question: "세계 반도체 시장 규모는 2023년 기준 약 5,000억 달러 수준이었다.",
    options: ["O", "X"],
    answer: "O",
    explanation: "SIA 발표 기준, 2023년 세계 반도체 시장은 약 5,268억 달러였습니다(2022년 약 5,741억 달러에서 약 8% 하락, 메모리 다운사이클 영향). 2024년은 AI 수요 회복으로 약 6,000억 달러를 넘을 것으로 전망되었습니다. 업계는 2030년 시장 규모를 약 1조 달러로 전망합니다. AI·전장·IoT·클라우드가 주요 성장 동력입니다."
  },
  {
    id: "Q_V2_140",
    procId: 5,
    type: "ox",
    level: "medium",
    question: "대만 TSMC에 대한 의존도가 높다는 점은 글로벌 반도체 공급망의 지정학적 취약점으로 지목된다.",
    options: ["O", "X"],
    answer: "O",
    explanation: "전 세계 첨단 반도체(5nm 이하)의 90% 이상을 TSMC가 생산하며, TSMC 팹의 대부분이 대만에 집중되어 있습니다. 대만 해협 분쟁 시 글로벌 공급망이 마비될 수 있는 '단일 실패 지점(Single Point of Failure)'입니다. 이를 해소하기 위해 TSMC가 미국 애리조나·일본 구마모토·독일에 해외 팹을 건설 중입니다."
  },
  {
    id: "Q_V2_141",
    procId: 6,
    type: "choice",
    level: "medium",
    question: "2021~2022년 자동차 반도체 부족(Shortage) 사태의 주요 원인이 아닌 것은?",
    options: ["팬데믹 후 자동차 수요 급반등과 JIT 재고 전략의 한계", "PC·서버 수요 폭증으로 파운드리 생산 능력이 잠식됨", "르네사스 공장 화재 등 돌발 공급 차질", "반도체 수요 급감으로 인한 공급 과잉"],
    answer: "3",
    explanation: "반도체 부족의 복합 원인: ① 팬데믹 후 자동차 수요 급반등 + JIT 재고 없음, ② PC·서버·스마트폰 수요 폭증으로 파운드리 캐파 잠식, ③ 르네사스 화재·텍사스 한파 등 공급 차질이 겹쳤습니다. 반도체 부족으로 자동차 생산이 수백만 대 감소했고, 이후 자동차 업계가 반도체 재고 확보·내재화 전략으로 전환했습니다."
  },
  {
    id: "Q_V2_142",
    procId: 4,
    type: "choice",
    level: "medium",
    question: "세계 파운드리 시장(2023년 기준) 순위가 올바른 것은?",
    options: ["TSMC → 삼성 → SMIC → UMC → GlobalFoundries", "삼성 → TSMC → GlobalFoundries → UMC → SMIC", "TSMC → GlobalFoundries → 삼성 → SMIC → UMC", "GlobalFoundries → TSMC → 삼성 → UMC → SMIC"],
    answer: "0",
    explanation: "2023년 파운드리 매출 점유율(TrendForce 기준): TSMC(~57~60%) → 삼성(~11~13%) → SMIC(~6%) → UMC(~6%) → GlobalFoundries(~5~6%) 순입니다. 3~5위는 조사 기관·분기마다 순위가 엇갈리지만, SMIC가 미·중 갈등 속에서도 성숙 공정 물량으로 3위권을 유지합니다. 최첨단(3nm 이하)은 TSMC 독점, 5nm 이하는 삼성이 유일한 경쟁자입니다. GF는 2018년 7nm 이하 개발을 중단하고 성숙 공정에 집중합니다."
  },
  {
    id: "Q_V2_143",
    procId: 6,
    type: "choice",
    level: "medium",
    question: "반도체 시장 전망을 발표하는 기관이 아닌 것은?",
    options: ["IC Insights / Omdia", "Gartner", "SEMI (반도체 장비·재료 국제협회)", "IEEE (전기전자공학자협회)"],
    answer: "3",
    explanation: "IEEE는 전기·전자·컴퓨터 분야 세계 최대 전문 학회로, 학술 논문·표준(IEEE 802.11 Wi-Fi 등)을 담당합니다. 반도체 시장 전망은 Gartner·IC Insights·IDC·Omdia(시장조사 기관), SEMI(업계 협회, 장비·소재 통계), SIA(미국 반도체산업협회, 월간 매출 통계)가 담당합니다. 투자자들은 이들 기관의 전망치를 주기적으로 참고합니다."
  },
  {
    id: "Q_V2_144",
    procId: 3,
    type: "choice",
    level: "medium",
    question: "한국 반도체 산업의 강점과 약점 설명으로 가장 올바른 것은?",
    options: ["메모리·파운드리·팹리스·소부장 모두 세계 1위", "메모리는 세계 최강이나, 비메모리·소부장 분야는 상대적으로 취약", "팹리스 분야에서 Qualcomm·NVIDIA를 앞서고 있음", "EDA 소프트웨어 분야에서 미국을 추월했음"],
    answer: "1",
    explanation: "한국은 DRAM·NAND Flash(삼성·SK하이닉스)에서 세계 최강, 파운드리(삼성 2위)·OSAT에서도 역량 보유. 반면 팹리스 글로벌 경쟁력은 미흡하고, 포토레지스트·EDA·장비 등 소부장은 일본·미국 의존도가 높습니다. 정부는 시스템 반도체·소부장 자립화를 위해 'K-반도체 전략(2021)'을 발표하고 대규모 투자를 지원 중입니다."
  },
  {
    id: "Q_V2_145",
    procId: 8,
    type: "choice",
    level: "medium",
    question: "반도체 업계에서 공통적으로 제시하는 2030년 세계 반도체 시장 규모 전망은?",
    options: ["약 5,000억 달러 (현 수준 유지)", "약 1조 달러", "약 5조 달러", "약 10조 달러"],
    answer: "1",
    explanation: "McKinsey·Gartner·SIA 등 주요 기관은 세계 반도체 시장이 2030년 약 1조 달러에 달할 것으로 전망합니다(2023년 약 5,300억 달러 대비 약 2배). 성장 동력: AI·데이터센터(HBM·AI 가속기), 자동차 전동화(SiC·MCU·ADAS), IoT·5G·엣지 컴퓨팅, 클라우드 인프라 확장. 반도체는 '디지털 시대의 쌀'로 불리며, 모든 산업의 디지털 전환을 가능케 하는 핵심 인프라 산업입니다."
  },
  {
    id: "Q_V2_146",
    procId: 3,
    type: "ox",
    level: "hard",
    question: "중국 최대 파운드리 SMIC는 EUV 장비 없이 ArF 다중 패터닝으로 7nm급 공정을 구현했다고 알려졌다.",
    options: ["O", "X"],
    answer: "O",
    explanation: "SMIC는 2023년 Huawei Mate 60 Pro에 탑재된 Kirin 9000S 칩을 ArF 이머전 다중 패터닝으로 7nm급으로 구현한 것으로 알려졌습니다. EUV 없이 이를 달성했으나, 수율·원가·성능이 TSMC 7nm 대비 크게 낮은 것으로 분석됩니다. 미국의 EUV·첨단 장비 수출 규제가 SMIC의 기술 추격 속도를 제한하는 핵심 요인입니다."
  },
  {
    id: "Q_V2_147",
    procId: 4,
    type: "ox",
    level: "hard",
    question: "일본 정부는 반도체 산업 부활을 위해 Rapidus라는 파운드리 기업 설립을 지원하고 있다.",
    options: ["O", "X"],
    answer: "O",
    explanation: "Rapidus는 2022년 도요타·소니·소프트뱅크 등 일본 8개 대기업과 일본 정부가 참여해 설립한 파운드리입니다. IBM과 기술 협력을 맺고 2nm급 공정을 2027년 양산 목표로 홋카이도 치토세에 팹을 건설 중입니다. 일본 정부가 약 3.3조 엔(약 30조 원) 이상을 지원할 계획입니다. 1990년대 반도체 강국 일본의 부활 프로젝트로 주목받고 있으나, 기술·자금·인력 면에서 도전이 큽니다."
  },
  {
    id: "Q_V2_148",
    procId: 3,
    type: "choice",
    level: "hard",
    question: "글로벌 반도체 공급망에서 'Single Point of Failure(단일 실패 지점)'로 지목되지 않는 요소는?",
    options: ["TSMC의 대만 집중 (첨단 파운드리 90%+)", "ASML의 EUV 장비 독점 공급", "일본의 포토레지스트 시장 주도", "한국의 스마트폰 완성품 조립 집중"],
    answer: "3",
    explanation: "반도체 공급망 핵심 취약점: TSMC 대만 집중(지정학 리스크), ASML EUV 독점(장비 공급 차질 시 전 산업 영향), 일본 소재 의존(포토레지스트·불화수소 등). 스마트폰 완성품 조립은 반도체 공급망의 업스트림 취약점과 구분됩니다. 이 취약점 해소를 위해 CHIPS Act, 일본·한국 반도체 전략 등이 추진됩니다."
  },
  {
    id: "Q_V2_149",
    procId: 6,
    type: "choice",
    level: "hard",
    question: "미국 CHIPS Act에서 반도체 제조 시설 직접 보조금으로 책정한 금액은?",
    options: ["약 10억 달러", "약 100억 달러", "약 390억 달러", "약 2,000억 달러"],
    answer: "2",
    explanation: "CHIPS and Science Act(2022) 총 규모 약 527억 달러 — 제조 보조금 약 390억 달러 + R&D·인력 약 130억 달러. TSMC 애리조나에 약 66억 달러, 인텔에 약 85억 달러, 삼성 텍사스에 약 64억 달러 지원이 발표되었습니다. 보조금 수혜 기업은 10년간 중국 내 첨단 반도체 시설 투자가 제한(가드레일 조항)됩니다."
  },
  {
    id: "Q_V2_150",
    procId: 3,
    type: "choice",
    level: "hard",
    question: "반도체 소부장(소재·부품·장비)의 주요 공급 강국 조합으로 옳은 것은?",
    options: ["한국(소재) + 중국(장비) + 독일(EDA)", "일본(소재) + 미국(장비·EDA) + 네덜란드(노광 장비)", "미국(소재) + 대만(장비) + 한국(EDA)", "독일(소재) + 일본(장비) + 미국(웨이퍼)"],
    answer: "1",
    explanation: "일본: 포토레지스트(JSR·TOK·Shin-Etsu), 웨이퍼(SUMCO·Shin-Etsu), CMP 슬러리 / 미국: 식각·CVD·PVD·CMP 장비(AMAT·Lam·KLA), EDA(Synopsys·Cadence) / 네덜란드: ASML EUV 노광 장비(세계 유일). 이 3국의 소부장 없이는 어느 나라도 첨단 반도체를 생산할 수 없어, 지정학적 협력과 갈등의 핵심이 됩니다."
  }
];
