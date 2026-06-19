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
  }
];
