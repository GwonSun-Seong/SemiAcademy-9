/**
 * viewer.js
 * Three.js integration for 3D modeling of FET structures
 */
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

let scene, camera, renderer, controls;
let currentGroup = null;

export function initViewer(containerId) {
    const container = document.getElementById(containerId);
    
    // Scene setup
    scene = new THREE.Scene();
    
    // Camera setup
    const aspect = container.clientWidth / container.clientHeight;
    camera = new THREE.PerspectiveCamera(45, aspect, 0.1, 1000);
    camera.position.set(20, 20, 30);
    
    // Renderer setup
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);
    
    // Controls setup
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    
    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);
    
    const dirLight1 = new THREE.DirectionalLight(0xffffff, 0.8);
    dirLight1.position.set(10, 20, 10);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xaabbff, 0.5);
    dirLight2.position.set(-10, 10, -10);
    scene.add(dirLight2);

    // Handle resize
    window.addEventListener('resize', () => {
        if (!container) return;
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    });

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
    }
    animate();
}

export function renderStructure(structure) {
    if (currentGroup) {
        scene.remove(currentGroup);
    }
    
    currentGroup = new THREE.Group();
    
    // Materials
    const substrateMat = new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.8 }); // Slate
    const oxideMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, transparent: true, opacity: 0.6, roughness: 0.2 }); // Light gray glass
    const channelMat = new THREE.MeshStandardMaterial({ color: 0x3b82f6, metalness: 0.3, roughness: 0.4 }); // Blue accent
    const gateMat = new THREE.MeshStandardMaterial({ color: 0xf59e0b, metalness: 0.8, roughness: 0.2 }); // Gold/Amber
    const sdMat = new THREE.MeshStandardMaterial({ color: 0x10b981, metalness: 0.5, roughness: 0.5 }); // Green
    const thermalMat = new THREE.MeshStandardMaterial({ color: 0xef4444, metalness: 0.2, roughness: 0.8 }); // Red

    // 1. Substrate
    const substrateGeo = new THREE.BoxGeometry(20, 2, 10);
    const substrate = new THREE.Mesh(substrateGeo, substrateMat);
    substrate.position.y = -1;
    currentGroup.add(substrate);

    // 2. Build specific structures
    const lg = Math.max(4, Math.min(10, structure.gateLength / 2)); // scale down visually
    const w = 4;
    
    if (structure.type === 'mosfet') {
        // Planar MOSFET
        // S/D regions
        const sdGeo = new THREE.BoxGeometry(4, 1, 10);
        const source = new THREE.Mesh(sdGeo, sdMat);
        source.position.set(-6, 0.5, 0);
        const drain = new THREE.Mesh(sdGeo, sdMat);
        drain.position.set(6, 0.5, 0);
        currentGroup.add(source, drain);
        
        // Channel
        const channelGeo = new THREE.BoxGeometry(8, 0.2, 10);
        const channel = new THREE.Mesh(channelGeo, channelMat);
        channel.position.set(0, 0.1, 0);
        currentGroup.add(channel);

        // Oxide
        const oxGeo = new THREE.BoxGeometry(lg, 0.5, 10);
        const ox = new THREE.Mesh(oxGeo, oxideMat);
        ox.position.set(0, 0.45, 0);
        currentGroup.add(ox);

        // Gate
        const gateGeo = new THREE.BoxGeometry(lg, 2, 10);
        const gate = new THREE.Mesh(gateGeo, gateMat);
        gate.position.set(0, 1.7, 0);
        currentGroup.add(gate);

    } else if (structure.type === 'finfet') {
        // FinFET
        const fins = structure.sheets; // Reusing sheets var as fin count for visualization
        const finSpacing = 2.5;
        const totalWidth = (fins - 1) * finSpacing;
        const startZ = -totalWidth / 2;

        // Fin structures
        for(let i=0; i<fins; i++) {
            const z = startZ + i * finSpacing;
            const finGeo = new THREE.BoxGeometry(16, 4, 1);
            const fin = new THREE.Mesh(finGeo, channelMat);
            fin.position.set(0, 2, z);
            currentGroup.add(fin);
            
            // S/D extensions
            const sdExtGeo = new THREE.BoxGeometry(4, 4.2, 1.2);
            const source = new THREE.Mesh(sdExtGeo, sdMat);
            source.position.set(-6, 2.1, z);
            const drain = new THREE.Mesh(sdExtGeo, sdMat);
            drain.position.set(6, 2.1, z);
            currentGroup.add(source, drain);
        }

        // Wrap around Gate
        const gateWidth = lg;
        const gateHeight = 5;
        const gateDepth = totalWidth + 3;
        
        const gateGeo = new THREE.BoxGeometry(gateWidth, gateHeight, gateDepth);
        const gate = new THREE.Mesh(gateGeo, gateMat);
        gate.position.set(0, 2.5, 0);
        
        // Outer oxide layer (visual approximation)
        const oxGeo = new THREE.BoxGeometry(gateWidth + 0.4, gateHeight + 0.4, gateDepth + 0.4);
        const ox = new THREE.Mesh(oxGeo, oxideMat);
        ox.position.set(0, 2.5, 0);
        
        currentGroup.add(ox, gate);

    } else if (structure.type === 'gaafet') {
        // GAAFET (Nanosheets)
        const sheets = structure.sheets;
        const sheetSpacing = structure.sheetSpacing / 2; // scaled
        const sheetThickness = structure.sheetThickness / 4; // scaled
        
        // S/D Blocks
        const sdGeo = new THREE.BoxGeometry(4, 6, 8);
        const source = new THREE.Mesh(sdGeo, sdMat);
        source.position.set(-6, 3, 0);
        const drain = new THREE.Mesh(sdGeo, sdMat);
        drain.position.set(6, 3, 0);
        currentGroup.add(source, drain);

        // Stacked Sheets
        for(let i=0; i<sheets; i++) {
            const y = 1 + i * (sheetThickness + sheetSpacing);
            const sheetGeo = new THREE.BoxGeometry(8, sheetThickness, w);
            const sheet = new THREE.Mesh(sheetGeo, channelMat);
            sheet.position.set(0, y, 0);
            currentGroup.add(sheet);
        }

        // Wrap around Gate (all around)
        const gateGeo = new THREE.BoxGeometry(lg, 6, w + 2);
        const gate = new THREE.Mesh(gateGeo, gateMat);
        gate.position.set(0, 3, 0);
        currentGroup.add(gate);
    }

    // Thermal Layer
    if (structure.hasThermalLayer) {
        const thermalGeo = new THREE.BoxGeometry(20, 0.5, 10);
        const thermal = new THREE.Mesh(thermalGeo, thermalMat);
        thermal.position.set(0, -2.25, 0);
        currentGroup.add(thermal);
    }

    scene.add(currentGroup);
    
    // Reset camera position to frame the object
    camera.position.set(15, 15, 20);
    controls.target.set(0, 2, 0);
    controls.update();
}
