# integrate_app.ps1
$filePath = "C:\Users\Admin\.gemini\antigravity\scratch\semiconductor-academy\index.html"
$rawContent = [System.IO.File]::ReadAllText($filePath, [System.Text.Encoding]::UTF8)

# Normalize line endings to LF (\n) to prevent replace failure due to CRLF differences
$content = $rawContent.Replace("`r`n", "`n")

# 1. Add Three.js & OrbitControls scripts in the head section
$oldHead = "<!-- Tailwind CSS CDN -->"
$newHead = "<!-- Three.js & OrbitControls for 3D FET Explorer -->`n  <script src=`"https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js`"></script>`n  <script src=`"https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.js`"></script>`n  `n  <!-- Tailwind CSS CDN -->"
$content = $content.Replace($oldHead, $newHead)

# 2. Define the FetExplorerTab React component
$fetTabCode = @"
    // --- 8.5 3D FET EXPLORER TAB COMPONENT ---
    const FetExplorerTab = () => {
      const [baseline, setBaseline] = React.useState('gaafet');
      const [numVariants, setNumVariants] = React.useState(50);
      const [structures, setStructures] = React.useState([]);
      const [selectedId, setSelectedId] = React.useState(null);
      const [isGenerating, setIsGenerating] = React.useState(false);
      
      const canvasRef = React.useRef(null);
      const viewerState = React.useRef({ scene: null, camera: null, renderer: null, controls: null, currentGroup: null });

      const formatPercent = (val) => {
        const pct = ((val - 1.0) * 100).toFixed(1);
        if (pct > 0) return `+\${pct}%`;
        return `\${pct}%`;
      };

      const getValClass = (val, isGoodHigh) => {
        if (val > 1.05) return isGoodHigh ? 'text-emerald-400 font-bold' : 'text-rose-400 font-bold';
        if (val < 0.95) return isGoodHigh ? 'text-rose-400 font-bold' : 'text-emerald-400 font-bold';
        return 'text-slate-400';
      };

      const runGeneration = () => {
        setIsGenerating(true);
        setTimeout(() => {
          try {
            const data = localGenerateStructures(baseline, numVariants);
            setStructures(data);
            if (data.length > 0) {
              setSelectedId(data[0].id);
            }
          } catch (err) {
            console.error(err);
            alert("구조 생성 실패");
          } finally {
            setIsGenerating(false);
          }
        }, 150);
      };

      React.useEffect(() => {
        if (!canvasRef.current) return;
        const container = canvasRef.current;
        const THREE = window.THREE;
        if (!THREE) {
          console.error("Three.js not loaded");
          return;
        }
        const OrbitControls = THREE.OrbitControls;

        const scene = new THREE.Scene();
        const aspect = container.clientWidth / container.clientHeight;
        const camera = new THREE.PerspectiveCamera(45, aspect, 0.1, 1000);
        camera.position.set(20, 20, 30);

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio || 1);
        container.innerHTML = '';
        container.appendChild(renderer.domElement);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        scene.add(ambientLight);

        const dirLight1 = new THREE.DirectionalLight(0xffffff, 0.8);
        dirLight1.position.set(10, 20, 10);
        scene.add(dirLight1);

        const dirLight2 = new THREE.DirectionalLight(0xaabbff, 0.5);
        dirLight2.position.set(-10, 10, -10);
        scene.add(dirLight2);

        viewerState.current = { scene, camera, renderer, controls, currentGroup: null };

        const handleResize = () => {
          if (!container || !camera || !renderer) return;
          camera.aspect = container.clientWidth / container.clientHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(container.clientWidth, container.clientHeight);
        };
        window.addEventListener('resize', handleResize);

        let animId;
        const animate = () => {
          animId = requestAnimationFrame(animate);
          controls.update();
          renderer.render(scene, camera);
        };
        animate();

        runGeneration();

        return () => {
          cancelAnimationFrame(animId);
          window.removeEventListener('resize', handleResize);
          if (renderer) {
            renderer.dispose();
          }
        };
      }, []);

      const selectedItem = structures.find(s => s.id === selectedId);
      React.useEffect(() => {
        if (!selectedItem || !viewerState.current.scene) return;
        const { scene, camera, controls } = viewerState.current;
        const THREE = window.THREE;

        if (viewerState.current.currentGroup) {
          scene.remove(viewerState.current.currentGroup);
        }

        const currentGroup = new THREE.Group();

        const substrateMat = new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.8 });
        const oxideMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, transparent: true, opacity: 0.6, roughness: 0.2 });
        const channelMat = new THREE.MeshStandardMaterial({ color: 0x3b82f6, metalness: 0.3, roughness: 0.4 });
        const gateMat = new THREE.MeshStandardMaterial({ color: 0xf59e0b, metalness: 0.8, roughness: 0.2 });
        const sdMat = new THREE.MeshStandardMaterial({ color: 0x10b981, metalness: 0.5, roughness: 0.5 });
        const thermalMat = new THREE.MeshStandardMaterial({ color: 0xef4444, metalness: 0.2, roughness: 0.8 });

        const substrateGeo = new THREE.BoxGeometry(20, 2, 10);
        const substrate = new THREE.Mesh(substrateGeo, substrateMat);
        substrate.position.y = -1;
        currentGroup.add(substrate);

        const lg = Math.max(4, Math.min(10, selectedItem.gateLength / 2));
        const w = 4;

        if (selectedItem.type === 'mosfet') {
          const sdGeo = new THREE.BoxGeometry(4, 1, 10);
          const source = new THREE.Mesh(sdGeo, sdMat);
          source.position.set(-6, 0.5, 0);
          const drain = new THREE.Mesh(sdGeo, sdMat);
          drain.position.set(6, 0.5, 0);
          currentGroup.add(source, drain);

          const channelGeo = new THREE.BoxGeometry(8, 0.2, 10);
          const channel = new THREE.Mesh(channelGeo, channelMat);
          channel.position.set(0, 0.1, 0);
          currentGroup.add(channel);

          const oxGeo = new THREE.BoxGeometry(lg, 0.5, 10);
          const ox = new THREE.Mesh(oxGeo, oxideMat);
          ox.position.set(0, 0.45, 0);
          currentGroup.add(ox);

          const gateGeo = new THREE.BoxGeometry(lg, 2, 10);
          const gate = new THREE.Mesh(gateGeo, gateMat);
          gate.position.set(0, 1.7, 0);
          currentGroup.add(gate);

        } else if (selectedItem.type === 'finfet') {
          const fins = selectedItem.sheets;
          const finSpacing = 2.5;
          const totalWidth = (fins - 1) * finSpacing;
          const startZ = -totalWidth / 2;

          for(let i=0; i<fins; i++) {
            const z = startZ + i * finSpacing;
            const finGeo = new THREE.BoxGeometry(16, 4, 1);
            const fin = new THREE.Mesh(finGeo, channelMat);
            fin.position.set(0, 2, z);
            currentGroup.add(fin);

            const sdExtGeo = new THREE.BoxGeometry(4, 4.2, 1.2);
            const source = new THREE.Mesh(sdExtGeo, sdMat);
            source.position.set(-6, 2.1, z);
            const drain = new THREE.Mesh(sdExtGeo, sdMat);
            drain.position.set(6, 2.1, z);
            currentGroup.add(source, drain);
          }

          const gateWidth = lg;
          const gateHeight = 5;
          const gateDepth = totalWidth + 3;

          const gateGeo = new THREE.BoxGeometry(gateWidth, gateHeight, gateDepth);
          const gate = new THREE.Mesh(gateGeo, gateMat);
          gate.position.set(0, 2.5, 0);

          const oxGeo = new THREE.BoxGeometry(gateWidth + 0.4, gateHeight + 0.4, gateDepth + 0.4);
          const ox = new THREE.Mesh(oxGeo, oxideMat);
          ox.position.set(0, 2.5, 0);

          currentGroup.add(ox, gate);

        } else if (selectedItem.type === 'gaafet') {
          const sheets = selectedItem.sheets;
          const sheetSpacing = selectedItem.sheetSpacing / 2;
          const sheetThickness = selectedItem.sheetThickness / 4;

          const sdGeo = new THREE.BoxGeometry(4, 6, 8);
          const source = new THREE.Mesh(sdGeo, sdMat);
          source.position.set(-6, 3, 0);
          const drain = new THREE.Mesh(sdGeo, sdMat);
          drain.position.set(6, 3, 0);
          currentGroup.add(source, drain);

          for(let i=0; i<sheets; i++) {
            const y = 1 + i * (sheetThickness + sheetSpacing);
            const sheetGeo = new THREE.BoxGeometry(8, sheetThickness, w);
            const sheet = new THREE.Mesh(sheetGeo, channelMat);
            sheet.position.set(0, y, 0);
            currentGroup.add(sheet);
          }

          const gateGeo = new THREE.BoxGeometry(lg, 6, w + 2);
          const gate = new THREE.Mesh(gateGeo, gateMat);
          gate.position.set(0, 3, 0);
          currentGroup.add(gate);
        }

        if (selectedItem.hasThermalLayer) {
          const thermalGeo = new THREE.BoxGeometry(20, 0.5, 10);
          const thermal = new THREE.Mesh(thermalGeo, thermalMat);
          thermal.position.set(0, -2.25, 0);
          currentGroup.add(thermal);
        }

        scene.add(currentGroup);
        viewerState.current.currentGroup = currentGroup;

        camera.position.set(15, 15, 20);
        controls.target.set(0, 2, 0);
        controls.update();

      }, [selectedId, structures]);

      const localGenerateStructures = (baselineKey, count) => {
        const BASELINES = {
          finfet: { name: 'FinFET', Ion: 1.0, Ioff: 1.0, deltaT: 1.0, Rsd: 1.0, sheets: 1, type: 'finfet' },
          mosfet: { name: 'MOSFET', Ion: 0.8, Ioff: 1.2, deltaT: 0.8, Rsd: 1.1, sheets: 1, type: 'mosfet' },
          gaafet: { name: 'GAAFET', Ion: 1.2, Ioff: 0.6, deltaT: 1.2, Rsd: 0.9, sheets: 3, type: 'gaafet' }
        };
        const baseline = BASELINES[baselineKey];
        const results = [];
        let attempts = 0;
        const MAX_ATTEMPTS = count * 100;

        const randRange = (min, max) => Math.random() * (max - min) + min;
        const randInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

        const CONSTRAINTS = {
          maxSheetThickness: 8,
          minGateLength: 10,
          minSheetSpacing: 4,
          maxDeltaT: 1.5
        };

        while (results.length < count && attempts < MAX_ATTEMPTS) {
          attempts++;
          const type = ['finfet', 'mosfet', 'gaafet'][randInt(0, 2)];
          const sheets = type === 'mosfet' ? 1 : randInt(1, 5);
          const sheetThickness = randRange(3, 10);
          const sheetSpacing = type === 'gaafet' ? randRange(2, 8) : 0;
          const gateLength = randRange(8, 20);
          const tox = randRange(0.5, 2.5);
          const hasThermalLayer = Math.random() > 0.5;

          if (sheetThickness > CONSTRAINTS.maxSheetThickness) continue;
          if (gateLength < CONSTRAINTS.minGateLength) continue;
          if (type === 'gaafet' && sheetSpacing < CONSTRAINTS.minSheetSpacing) continue;

          let rawIon = 0, rawIoff = 0, rawDeltaT = 0, rawRsd = 0;
          if (type === 'gaafet') {
            rawIon = 1.1 * sheets * (1 / tox) * (gateLength / 12);
            rawIoff = 0.5 * Math.exp(tox - 1.5) / sheets;
            rawRsd = 0.8 + (0.1 * sheets);
            rawDeltaT = 1.1 + (0.15 * sheets);
          } else if (type === 'finfet') {
            rawIon = 1.0 * sheets * (1 / tox) * (gateLength / 14);
            rawIoff = 0.8 * Math.exp(tox - 1.5) / sheets;
            rawRsd = 1.0 + (0.05 * sheets);
            rawDeltaT = 1.0 + (0.1 * sheets);
          } else {
            rawIon = 0.7 * (1 / tox) * (gateLength / 16);
            rawIoff = 1.5 * Math.exp(tox - 1.0);
            rawRsd = 1.2;
            rawDeltaT = 0.8;
          }

          if (hasThermalLayer) {
            rawDeltaT *= 0.7;
            rawRsd *= 1.1;
          }
          rawIon *= (10 / gateLength);
          rawIoff *= (15 / gateLength);

          const processVariationPenalty = type === 'gaafet' && sheets > 3 ? 0.95 : 1.0;
          rawIon *= processVariationPenalty;

          rawIon = Math.max(0.1, rawIon);
          rawIoff = Math.max(0.01, rawIoff);

          if (rawDeltaT > CONSTRAINTS.maxDeltaT) continue;

          const normIon = rawIon / baseline.Ion;
          const normIoff = rawIoff / baseline.Ioff;
          const normDeltaT = rawDeltaT / baseline.deltaT;
          const normRsd = rawRsd / baseline.Rsd;
          const ionIoffRatio = normIon / normIoff;

          const processSteps = type === 'gaafet' ? 5 + sheets : (type === 'finfet' ? 4 : 2);
          const complexityPenalty = processSteps * 0.1;
          const score = (ionIoffRatio * 2.0) - (normDeltaT * 1.5) - (normRsd * 1.0) - complexityPenalty;

          let summary = \`\${type.toUpperCase()} with \`;
          if (type !== 'mosfet') summary += \`\${sheets} sheets (\${sheetThickness.toFixed(1)}nm), \`;
          summary += \`Lg=\${gateLength.toFixed(1)}nm\`;
          if (hasThermalLayer) summary += \` + Thermal Layer\`;

          let cause = [];
          if (hasThermalLayer) cause.push("Thermal layer reduced ΔT.");
          if (type === 'gaafet' && sheets > baseline.sheets) cause.push("Increased sheet count boosted Ion.");
          if (tox < 1.0) cause.push("Thin oxide improved control but may impact Ioff.");
          if (gateLength < 12) cause.push("Short gate increased Ion but degraded Ioff.");

          results.push({
            id: Math.random().toString(36).substr(2, 9),
            type,
            sheets,
            sheetThickness,
            sheetSpacing,
            gateLength,
            tox,
            hasThermalLayer,
            metrics: {
              Ion: normIon,
              Ioff: normIoff,
              IonIoff: ionIoffRatio,
              deltaT: normDeltaT,
              Rsd: normRsd
            },
            score,
            summary,
            cause: cause.join(" ") || "Standard variation."
          });
        }
        results.sort((a, b) => b.score - a.score);
        return results;
      };

      return (
        <div className="w-full flex flex-col space-y-4 md:h-full md:flex-row md:space-y-0 md:space-x-4 min-h-0 select-none">
          {/* Controls Panel */}
          <div className="md:w-72 shrink-0 bg-slate-950/60 border border-slate-900 rounded-3xl p-5 flex flex-col space-y-4 shadow-xl backdrop-blur-md">
            <div>
              <h2 className="text-sm font-extrabold text-slate-100 flex items-center gap-1.5 mb-1.5">
                <i className="fa-solid fa-gears text-indigo-400"></i>
                3D FET 설정 조율
              </h2>
              <p className="text-[10.5px] text-slate-400 leading-normal">반도체 트랜지스터(FinFET, MOSFET, GAAFET)의 제약 난수 생성 실험실입니다.</p>
            </div>
            
            <div className="space-y-3.5 pt-2 border-t border-slate-900">
              <div>
                <label className="block text-[10px] text-slate-400 font-extrabold uppercase tracking-wide mb-1.5">기준 아키텍처 (Baseline)</label>
                <select
                  value={baseline}
                  onChange={e => setBaseline(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 outline-none focus:border-indigo-500"
                >
                  <option value="finfet">FinFET (1.0x)</option>
                  <option value="mosfet">Planar MOSFET (0.8x)</option>
                  <option value="gaafet">GAAFET (1.2x)</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] text-slate-400 font-extrabold uppercase tracking-wide mb-1.5">생성 변이 수 (Variants)</label>
                <input
                  type="number"
                  min="10"
                  max="1000"
                  value={numVariants}
                  onChange={e => setNumVariants(Math.max(10, Math.min(1000, parseInt(e.target.value) || 10)))}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 outline-none focus:border-indigo-500 font-mono"
                />
              </div>

              <button
                onClick={runGeneration}
                disabled={isGenerating}
                className="w-full py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-xs transition-colors flex items-center justify-center gap-1.5 active:scale-[0.98] disabled:opacity-50"
              >
                <i className="fa-solid fa-wand-magic-sparkles text-xs"></i>
                {isGenerating ? '구조 생성 중...' : '임의 구조 생성'}
              </button>
            </div>
          </div>

          {/* Results and 3D View Panel */}
          <div className="flex-1 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 min-h-0">
            {/* Table Panel */}
            <div className="flex-1 bg-slate-950/60 border border-slate-900 rounded-3xl p-5 flex flex-col min-h-[300px] md:min-h-0 shadow-xl backdrop-blur-md">
              <h2 className="text-sm font-extrabold text-slate-100 flex items-center gap-1.5 mb-3 shrink-0">
                <i className="fa-solid fa-table-list text-indigo-400"></i>
                생성된 소자 리스트
              </h2>
              
              <div className="flex-1 overflow-auto custom-scrollbar border border-slate-900 rounded-2xl bg-slate-950/20">
                <table className="w-full text-left border-collapse text-[11px]">
                  <thead className="bg-slate-950/80 sticky top-0 z-10 border-b border-slate-900">
                    <tr>
                      <th className="p-3 text-slate-400 font-extrabold">구조 요약</th>
                      <th className="p-3 text-slate-400 font-extrabold">품질 점수</th>
                      <th className="p-3 text-slate-400 font-extrabold">Ion/Ioff</th>
                      <th className="p-3 text-slate-400 font-extrabold">Ion</th>
                      <th className="p-3 text-slate-400 font-extrabold">Ioff</th>
                      <th className="p-3 text-slate-400 font-extrabold">ΔT (발열)</th>
                      <th className="p-3 text-slate-400 font-extrabold">Rsd (기생저항)</th>
                      <th className="p-3 text-slate-400 font-extrabold">변동 유발 원인</th>
                    </tr>
                  </thead>
                  <tbody>
                    {structures.map((item) => (
                      <tr
                        key={item.id}
                        onClick={() => setSelectedId(item.id)}
                        className={`border-b border-slate-900/60 cursor-pointer transition-colors hover:bg-slate-900/20 \${
                          selectedId === item.id ? 'bg-indigo-600/10 hover:bg-indigo-600/10' : ''
                        }`}
                      >
                        <td className="p-3 font-semibold text-slate-200">{item.summary}</td>
                        <td className="p-3 font-mono font-bold text-indigo-400">{item.score.toFixed(2)}</td>
                        <td className="p-3"><span className={`font-mono \${getValClass(item.metrics.IonIoff, true)}\`}>{item.metrics.IonIoff.toFixed(2)} ({formatPercent(item.metrics.IonIoff)})</span></td>
                        <td className="p-3"><span className={`font-mono \${getValClass(item.metrics.Ion, true)}\`}>{item.metrics.Ion.toFixed(2)} ({formatPercent(item.metrics.Ion)})</span></td>
                        <td className="p-3"><span className={`font-mono \${getValClass(item.metrics.Ioff, false)}\`}>{item.metrics.Ioff.toFixed(2)} ({formatPercent(item.metrics.Ioff)})</span></td>
                        <td className="p-3"><span className={`font-mono \${getValClass(item.metrics.deltaT, false)}\`}>{item.metrics.deltaT.toFixed(2)} ({formatPercent(item.metrics.deltaT)})</span></td>
                        <td className="p-3"><span className={`font-mono \${getValClass(item.metrics.Rsd, false)}\`}>{item.metrics.Rsd.toFixed(2)} ({formatPercent(item.metrics.Rsd)})</span></td>
                        <td className="p-3 text-slate-500 max-w-[180px] truncate" title={item.cause}>{item.cause}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 3D Viewer Panel */}
            <div className="w-full md:w-80 shrink-0 bg-slate-950/60 border border-slate-900 rounded-3xl p-5 flex flex-col space-y-4 shadow-xl backdrop-blur-md min-h-[350px] md:min-h-0">
              <h2 className="text-sm font-extrabold text-slate-100 flex items-center gap-1.5 shrink-0">
                <i className="fa-solid fa-cube text-indigo-400"></i>
                3D 인터랙티브 뷰
              </h2>
              
              <div className="flex-1 relative border border-slate-900 rounded-2xl overflow-hidden bg-slate-950/40 flex flex-col justify-end min-h-0">
                <div ref={canvasRef} className="absolute inset-0 z-0"></div>
                
                {!selectedId && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center z-10 bg-slate-950/80">
                    <i className="fa-solid fa-hand-pointer text-xl text-slate-600 mb-2"></i>
                    <p className="text-[10px] text-slate-400">테이블에서 구조를 선택하면 3D 모델이 렌더링됩니다. 드래그하여 회전, 휠로 줌인/아웃이 가능합니다.</p>
                  </div>
                )}
                
                {selectedItem && (
                  <div className="relative z-10 m-2.5 p-3 rounded-xl bg-slate-950/90 border border-slate-900 shadow-lg text-[10px] text-slate-300 space-y-1.5 backdrop-blur-sm max-h-[140px] overflow-y-auto custom-scrollbar select-text shrink-0">
                    <div className="font-extrabold text-indigo-400 border-b border-slate-900 pb-1 flex justify-between items-center">
                      <span>소자 상세 스펙</span>
                      <span className="text-[8px] px-1.5 py-0.5 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">{selectedItem.type.toUpperCase()}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-x-2 gap-y-1">
                      <div><span className="text-slate-500">채널 핀/시트 수:</span> <span className="font-bold font-mono text-slate-300">{selectedItem.sheets}개</span></div>
                      <div><span className="text-slate-500">게이트 길이(Lg):</span> <span className="font-bold font-mono text-slate-300">{selectedItem.gateLength.toFixed(1)} nm</span></div>
                      <div><span className="text-slate-500">시트 두께:</span> <span className="font-bold font-mono text-slate-300">{selectedItem.sheetThickness.toFixed(1)} nm</span></div>
                      <div><span className="text-slate-500">유효 절연막 두께:</span> <span className="font-bold font-mono text-slate-300">{selectedItem.tox.toFixed(2)} nm</span></div>
                      <div className="col-span-2"><span className="text-slate-500">방열 레이어 연동:</span> <span className={`font-bold \${selectedItem.hasThermalLayer ? 'text-emerald-400' : 'text-slate-500'}`}>{selectedItem.hasThermalLayer ? '연동됨 (Yes)' : '없음 (No)'}</span></div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      );
    };
"@

# Inject FetExplorerTab into the document
$content = $content.Replace("    // --- 9. MAIN APP CONTAINER ---", "`n" + $fetTabCode + "`n`n    // --- 9. MAIN APP CONTAINER ---")

# 3. Add 3D FET Explorer into desktop navigation
$oldNav = "                  { id: 'news', label: '데일리 브리핑', icon: 'fa-newspaper', color: 'text-rose-400', activeBg: 'bg-rose-500/10 border-rose-500/30' },`n                  { id: 'community', label: '자유 게시판', icon: 'fa-clipboard-list', color: 'text-emerald-400', activeBg: 'bg-emerald-500/10 border-emerald-500/30' }"
$newNav = "                  { id: 'news', label: '데일리 브리핑', icon: 'fa-newspaper', color: 'text-rose-400', activeBg: 'bg-rose-500/10 border-rose-500/30' },`n                  { id: 'community', label: '자유 게시판', icon: 'fa-clipboard-list', color: 'text-emerald-400', activeBg: 'bg-emerald-500/10 border-emerald-500/30' },`n                  { id: 'fet', label: '3D FET 탐색기', icon: 'fa-cube', color: 'text-indigo-400', activeBg: 'bg-indigo-500/10 border-indigo-500/30' }"
$content = $content.Replace($oldNav, $newNav)

# 4. Add 3D FET Explorer into mobile bottom navigation (adjusted w-14)
$oldMobileNav = "            <nav className=`"fixed bottom-0 left-0 right-0 h-16 bg-slate-950/95 backdrop-blur-lg border-t border-slate-900/80 flex items-center justify-around px-2 z-40 md:hidden`">`n              {/* Roadmap Tab Button */}`n              <button`n                onClick={() => setActiveTab('roadmap')}`n                className={`flex flex-col items-center gap-1 py-1 w-16 transition-all \${`n                  activeTab === 'roadmap' ? 'text-cyan-400 scale-105' : 'text-slate-500 hover:text-slate-300'`n                }`}`n              >`n                <i className=`"fa-solid fa-map-location-dot text-lg`"></i>`n                <span className=`"text-[9px] font-bold`">8대 공정</span>`n              </button>`n`n              {/* History Tab Button */}`n              <button`n                onClick={() => setActiveTab('history')}`n                className={`flex flex-col items-center gap-1 py-1 w-16 transition-all \${`n                  activeTab === 'history' ? 'text-amber-400 scale-105' : 'text-slate-500 hover:text-slate-300'`n                }`}`n              >`n                <i className=`"fa-solid fa-timeline text-lg`"></i>`n                <span className=`"text-[9px] font-bold`">공정 역사</span>`n              </button>`n`n              {/* Quiz Tab Button */}`n              <button`n                onClick={() => setActiveTab('quiz')}`n                className={`flex flex-col items-center gap-1 py-1 w-16 transition-all \${`n                  activeTab === 'quiz' ? 'text-violet-400 scale-105' : 'text-slate-500 hover:text-slate-300'`n                }`}`n              >`n                <i className=`"fa-solid fa-award text-lg`"></i>`n                <span className=`"text-[9px] font-bold`">핵심 퀴즈</span>`n              </button>`n`n              {/* News Tab Button */}`n              <button`n                onClick={() => setActiveTab('news')}`n                className={`flex flex-col items-center gap-1 py-1 w-16 transition-all \${`n                  activeTab === 'news' ? 'text-rose-400 scale-105' : 'text-slate-500 hover:text-slate-300'`n                }`}`n              >`n                <i className=`"fa-solid fa-newspaper text-lg`"></i>`n                <span className=`"text-[9px] font-bold`">데일리 뉴스</span>`n              </button>`n`n              {/* Community Tab Button */}`n              <button`n                onClick={() => setActiveTab('community')}`n                className={`flex flex-col items-center gap-1 py-1 w-16 transition-all \${`n                  activeTab === 'community' ? 'text-emerald-400 scale-105' : 'text-slate-500 hover:text-slate-300'`n                }`}`n              >`n                <i className=`"fa-solid fa-clipboard-list text-lg`"></i>`n                <span className=`"text-[9px] font-bold`">게시판</span>`n              </button>`n            </nav>"

$newMobileNav = "            <nav className=`"fixed bottom-0 left-0 right-0 h-16 bg-slate-950/95 backdrop-blur-lg border-t border-slate-900/80 flex items-center justify-around px-2 z-40 md:hidden`">`n              {/* Roadmap Tab Button */}`n              <button`n                onClick={() => setActiveTab('roadmap')}`n                className={`flex flex-col items-center gap-1 py-1 w-14 transition-all \${`n                  activeTab === 'roadmap' ? 'text-cyan-400 scale-105' : 'text-slate-500 hover:text-slate-300'`n                }`}`n              >`n                <i className=`"fa-solid fa-map-location-dot text-lg`"></i>`n                <span className=`"text-[9px] font-bold`">8대 공정</span>`n              </button>`n`n              {/* History Tab Button */}`n              <button`n                onClick={() => setActiveTab('history')}`n                className={`flex flex-col items-center gap-1 py-1 w-14 transition-all \${`n                  activeTab === 'history' ? 'text-amber-400 scale-105' : 'text-slate-500 hover:text-slate-300'`n                }`}`n              >`n                <i className=`"fa-solid fa-timeline text-lg`"></i>`n                <span className=`"text-[9px] font-bold`">공정 역사</span>`n              </button>`n`n              {/* Quiz Tab Button */}`n              <button`n                onClick={() => setActiveTab('quiz')}`n                className={`flex flex-col items-center gap-1 py-1 w-14 transition-all \${`n                  activeTab === 'quiz' ? 'text-violet-400 scale-105' : 'text-slate-500 hover:text-slate-300'`n                }`}`n              >`n                <i className=`"fa-solid fa-award text-lg`"></i>`n                <span className=`"text-[9px] font-bold`">핵심 퀴즈</span>`n              </button>`n`n              {/* 3D FET Explorer Tab Button */}`n              <button`n                onClick={() => setActiveTab('fet')}`n                className={`flex flex-col items-center gap-1 py-1 w-14 transition-all \${`n                  activeTab === 'fet' ? 'text-indigo-400 scale-105' : 'text-slate-500 hover:text-slate-300'`n                }`}`n              >`n                <i className=`"fa-solid fa-cube text-lg`"></i>`n                <span className=`"text-[9px] font-bold`">3D FET</span>`n              </button>`n`n              {/* News Tab Button */}`n              <button`n                onClick={() => setActiveTab('news')}`n                className={`flex flex-col items-center gap-1 py-1 w-14 transition-all \${`n                  activeTab === 'news' ? 'text-rose-400 scale-105' : 'text-slate-500 hover:text-slate-300'`n                }`}`n              >`n                <i className=`"fa-solid fa-newspaper text-lg`"></i>`n                <span className=`"text-[9px] font-bold`">데일리 뉴스</span>`n              </button>`n`n              {/* Community Tab Button */}`n              <button`n                onClick={() => setActiveTab('community')}`n                className={`flex flex-col items-center gap-1 py-1 w-14 transition-all \${`n                  activeTab === 'community' ? 'text-emerald-400 scale-105' : 'text-slate-500 hover:text-slate-300'`n                }`}`n              >`n                <i className=`"fa-solid fa-clipboard-list text-lg`"></i>`n                <span className=`"text-[9px] font-bold`">게시판</span>`n              </button>`n            </nav>"

$content = $content.Replace($oldMobileNav, $newMobileNav)

# 5. Add FetExplorerTab mapping inside the Main content conditional views
$oldMain = "              {activeTab === 'community' && (`n                <CommunityTab />`n              )}`n            </main>"

$newMain = "              {activeTab === 'community' && (`n                <CommunityTab />`n              )}`n              {activeTab === 'fet' && (`n                <FetExplorerTab />`n              )}`n            </main>"

$content = $content.Replace($oldMain, $newMain)

# Restore standard CRLF line endings
$finalContent = $content.Replace("`n", "`r`n")

[System.IO.File]::WriteAllText($filePath, $finalContent, [System.Text.Encoding]::UTF8)
Write-Host "Integration Completed Successfully!" -ForegroundColor Green
