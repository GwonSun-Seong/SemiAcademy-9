/**
 * generator.js
 * Constrained Random Design Generator for FET Structures
 */

const BASELINES = {
    finfet: { name: 'FinFET', Ion: 1.0, Ioff: 1.0, deltaT: 1.0, Rsd: 1.0, sheets: 1, type: 'finfet' },
    mosfet: { name: 'MOSFET', Ion: 0.8, Ioff: 1.2, deltaT: 0.8, Rsd: 1.1, sheets: 1, type: 'mosfet' },
    gaafet: { name: 'GAAFET', Ion: 1.2, Ioff: 0.6, deltaT: 1.2, Rsd: 0.9, sheets: 3, type: 'gaafet' }
};

// Helper: generate random number in range
function randRange(min, max) {
    return Math.random() * (max - min) + min;
}

// Helper: generate random int in range
function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Hard constraints
const CONSTRAINTS = {
    maxSheetThickness: 8, // nm
    minGateLength: 10,    // nm
    minSheetSpacing: 4,   // nm
    maxDeltaT: 1.5        // Normalized limit relative to finfet
};

export function generateStructures(baselineKey, count) {
    const baseline = BASELINES[baselineKey];
    const results = [];
    let attempts = 0;
    const MAX_ATTEMPTS = count * 100; // prevent infinite loops

    while (results.length < count && attempts < MAX_ATTEMPTS) {
        attempts++;
        
        // 1. Randomize parameters
        const type = ['finfet', 'mosfet', 'gaafet'][randInt(0, 2)];
        const sheets = type === 'mosfet' ? 1 : randInt(1, 5); // MOSFET is planar
        const sheetThickness = randRange(3, 10);
        const sheetSpacing = type === 'gaafet' ? randRange(2, 8) : 0;
        const gateLength = randRange(8, 20);
        const tox = randRange(0.5, 2.5);
        const hasThermalLayer = Math.random() > 0.5;
        
        // 2. Apply Hard Constraints
        if (sheetThickness > CONSTRAINTS.maxSheetThickness) continue;
        if (gateLength < CONSTRAINTS.minGateLength) continue;
        if (type === 'gaafet' && sheetSpacing < CONSTRAINTS.minSheetSpacing) continue;

        // 3. Simplified Physics Model for Metrics
        // Base capabilities dependent on structure type
        let rawIon = 0, rawIoff = 0, rawDeltaT = 0, rawRsd = 0;
        
        if (type === 'gaafet') {
            rawIon = 1.1 * sheets * (1 / tox) * (gateLength / 12);
            rawIoff = 0.5 * Math.exp(tox - 1.5) / sheets; // Better control
            rawRsd = 0.8 + (0.1 * sheets); // Contact resistance increases slightly with stacked sheets
            rawDeltaT = 1.1 + (0.15 * sheets); // Self-heating worse in GAA
        } else if (type === 'finfet') {
            rawIon = 1.0 * sheets * (1 / tox) * (gateLength / 14);
            rawIoff = 0.8 * Math.exp(tox - 1.5) / sheets;
            rawRsd = 1.0 + (0.05 * sheets);
            rawDeltaT = 1.0 + (0.1 * sheets);
        } else { // mosfet
            rawIon = 0.7 * (1 / tox) * (gateLength / 16);
            rawIoff = 1.5 * Math.exp(tox - 1.0);
            rawRsd = 1.2;
            rawDeltaT = 0.8; // Planar has better heat dissipation
        }

        // Adjust based on variables
        if (hasThermalLayer) {
            rawDeltaT *= 0.7; // 30% reduction in heat
            rawRsd *= 1.1;    // Slight penalty to resistance
        }

        rawIon *= (10 / gateLength); // Short channel effects
        rawIoff *= (15 / gateLength); // SCE degrades Ioff for very short gates

        // Process variation robustness penalty
        const processVariationPenalty = type === 'gaafet' && sheets > 3 ? 0.95 : 1.0;
        rawIon *= processVariationPenalty;

        // Ensure reasonable minimums/maximums
        rawIon = Math.max(0.1, rawIon);
        rawIoff = Math.max(0.01, rawIoff);
        
        // Check hard constraint on deltaT
        if (rawDeltaT > CONSTRAINTS.maxDeltaT) continue;

        // 4. Normalize against Baseline
        const normIon = rawIon / baseline.Ion;
        const normIoff = rawIoff / baseline.Ioff;
        const normDeltaT = rawDeltaT / baseline.deltaT;
        const normRsd = rawRsd / baseline.Rsd;
        const ionIoffRatio = normIon / normIoff;

        // 5. Calculate Score (Objective Function)
        // We want high Ion/Ioff, low DeltaT, low Rsd
        // Score = (Ion/Ioff weight * Ion/Ioff) - (DeltaT weight * DeltaT) - (Rsd weight * Rsd) - (Complexity Penalty)
        const processSteps = type === 'gaafet' ? 5 + sheets : (type === 'finfet' ? 4 : 2);
        const complexityPenalty = processSteps * 0.1;
        
        const score = (ionIoffRatio * 2.0) - (normDeltaT * 1.5) - (normRsd * 1.0) - complexityPenalty;

        // 6. Generate Summary and Cause
        let summary = `${type.toUpperCase()} with `;
        if (type !== 'mosfet') summary += `${sheets} sheets (${sheetThickness.toFixed(1)}nm), `;
        summary += `Lg=${gateLength.toFixed(1)}nm`;
        if (hasThermalLayer) summary += ` + Thermal Layer`;

        let cause = [];
        if (hasThermalLayer) cause.push("Thermal layer reduced ΔT.");
        if (type === 'gaafet' && sheets > baseline.sheets) cause.push("Increased sheet count boosted Ion.");
        if (tox < 1.0) cause.push("Thin oxide improved control but may impact Ioff.");
        if (gateLength < 12) cause.push("Short gate increased Ion but degraded Ioff.");
        
        results.push({
            id: crypto.randomUUID(),
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

    // Sort by score descending
    results.sort((a, b) => b.score - a.score);
    return results;
}
