# Modal Analysis Calculator

**Live tool:** https://arashnassirpour.com/modal-analysis/

Solves the real generalised eigenvalue problem for an idealised lumped-mass shear building, reporting periods, frequencies, mode shapes, participation factors, effective modal masses, and cumulative mass participation.

## Features

- Uniform, tapered, and per-floor mass/stiffness input.
- Configurable storey count and geometry.
- Animated mode shapes.
- Numerical convergence and validation diagnostics.
- Mass and stiffness orthogonality checks.
- Effective-modal-mass accounting and the number of modes needed to exceed 90% participation.
- JSON export of inputs, modal properties, and numerical diagnostics.

The calculator is the rigorous modal-analysis companion to the illustrative Building Response Lab.

## Numerical verification

The solver includes closed-form benchmark coverage for one-, two-, and three-storey systems, convergence-limit warnings, and invalid-input rejection.

```bash
npm test
```

The project uses Node’s built-in test runner and has no runtime package dependencies.

## Run locally

Open `index.html` in a modern browser or serve the repository with any static web server. The numerical solver is kept separately in `modal-solver.js` so it can be tested outside the UI.

## Scope

The model assumes an idealised linear shear building with lumped floor masses. Results are for education and independent exploration, not final structural design or code compliance.

## Deployment

GitHub Pages publishes `main` at the live URL above.

## Licence

Copyright (C) 2026 Arash Nassirpour.

Licensed under the GNU Affero General Public License v3.0 only (`AGPL-3.0-only`). See [LICENSE](LICENSE).
