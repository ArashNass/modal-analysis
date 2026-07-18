# Modal Analysis Calculator

**Live:** https://arashnassirpour.com/modal-analysis/

Solves the real generalized eigenvalue problem for an idealised lumped-mass
shear building, giving genuine periods, mode shapes, and modal participation
factors — not an approximation. Configure storeys, mass and stiffness
distribution (uniform, tapered, or edited per floor), and see how many modes
are needed to capture 90% of the building's mass.

Built as a single self-contained `index.html`. Hosted on GitHub Pages; any commit
to `main` goes live automatically. The companion, rigorous counterpart to the
Building Response Lab's illustrative animation. Made for learning and
exploration, not for structural design or code compliance.

## Numerical verification

The solver reports convergence, normalized eigenvalue residuals, mass and
stiffness orthogonality errors, and the complete effective-modal-mass total.
Warnings are shown in the calculator and included in exported JSON.

Run the closed-form 1-, 2-, and 3-storey benchmarks with:

```sh
npm test
```
