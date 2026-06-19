/**
 * app.js
 * Main application logic handling UI and tying Generator with Viewer
 */
import { generateStructures } from './generator.js';
import { initViewer, renderStructure } from './viewer.js';

document.addEventListener('DOMContentLoaded', () => {
    // Initialize 3D Viewer
    initViewer('canvasContainer');

    const generateBtn = document.getElementById('generateBtn');
    const baselineSelect = document.getElementById('baselineSelect');
    const numVariantsInput = document.getElementById('numVariants');
    const resultsBody = document.getElementById('resultsBody');
    const structureDetails = document.getElementById('structureDetails');
    const instructions = document.getElementById('viewerInstructions');
    
    let currentData = [];

    // Format helper
    const formatPercent = (val) => {
        const pct = ((val - 1.0) * 100).toFixed(1);
        if (pct > 0) return `+${pct}%`;
        return `${pct}%`;
    };

    const getValClass = (val, isGoodHigh) => {
        if (val > 1.05) return isGoodHigh ? 'val-positive' : 'val-negative';
        if (val < 0.95) return isGoodHigh ? 'val-negative' : 'val-positive';
        return 'val-neutral';
    };

    function displayResults(data) {
        resultsBody.innerHTML = '';
        
        data.forEach((item, index) => {
            const tr = document.createElement('tr');
            if (index === 0) tr.classList.add('selected'); // Select first row by default

            // Helper to build a styled cell
            const buildMetricCell = (val, isGoodHigh) => {
                const cls = getValClass(val, isGoodHigh);
                return `<td><span class="font-mono ${cls}">${val.toFixed(2)} (${formatPercent(val)})</span></td>`;
            };

            tr.innerHTML = `
                <td><strong>${item.summary}</strong></td>
                <td><strong class="font-mono">${item.score.toFixed(2)}</strong></td>
                ${buildMetricCell(item.metrics.IonIoff, true)}
                ${buildMetricCell(item.metrics.Ion, true)}
                ${buildMetricCell(item.metrics.Ioff, false)}
                ${buildMetricCell(item.metrics.deltaT, false)}
                ${buildMetricCell(item.metrics.Rsd, false)}
                <td style="font-size: 0.8rem; color: var(--text-secondary); max-width: 200px;">${item.cause}</td>
            `;

            tr.addEventListener('click', () => {
                // Update selection state
                document.querySelectorAll('#resultsBody tr').forEach(r => r.classList.remove('selected'));
                tr.classList.add('selected');
                
                // Update viewer
                renderDetails(item);
                renderStructure(item);
            });

            resultsBody.appendChild(tr);
        });

        // Trigger first render
        if (data.length > 0) {
            instructions.style.display = 'none';
            renderDetails(data[0]);
            renderStructure(data[0]);
        }
    }

    function renderDetails(item) {
        structureDetails.classList.add('visible');
        structureDetails.innerHTML = `
            <div style="margin-bottom: 0.5rem; font-weight: 600;">Details: ${item.summary}</div>
            <div class="details-grid">
                <div class="detail-item"><span class="detail-label">Type:</span> <span class="detail-value">${item.type.toUpperCase()}</span></div>
                <div class="detail-item"><span class="detail-label">Sheets/Fins:</span> <span class="detail-value">${item.sheets}</span></div>
                <div class="detail-item"><span class="detail-label">Gate Length (Lg):</span> <span class="detail-value">${item.gateLength.toFixed(1)} nm</span></div>
                <div class="detail-item"><span class="detail-label">Sheet Thickness:</span> <span class="detail-value">${item.sheetThickness.toFixed(1)} nm</span></div>
                <div class="detail-item"><span class="detail-label">Oxide Thickness:</span> <span class="detail-value">${item.tox.toFixed(2)} nm</span></div>
                <div class="detail-item"><span class="detail-label">Thermal Layer:</span> <span class="detail-value">${item.hasThermalLayer ? 'Yes' : 'No'}</span></div>
            </div>
        `;
    }

    generateBtn.addEventListener('click', () => {
        const baseline = baselineSelect.value;
        const count = parseInt(numVariantsInput.value) || 50;
        
        generateBtn.textContent = 'Generating...';
        generateBtn.disabled = true;

        // Simulate a slight delay for better UX
        setTimeout(() => {
            try {
                currentData = generateStructures(baseline, count);
                displayResults(currentData);
            } catch (err) {
                console.error("Error generating structures", err);
                alert("Failed to generate structures.");
            } finally {
                generateBtn.textContent = 'Generate Structures';
                generateBtn.disabled = false;
            }
        }, 100);
    });
    
    // Initial generation
    generateBtn.click();
});
