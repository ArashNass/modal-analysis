'use strict';

const test=require('node:test');
const assert=require('node:assert/strict');
const {solveModes}=require('../modal-solver.js');

function assertClose(actual,expected,tolerance,message){
  assert.ok(Math.abs(actual-expected)<=tolerance,`${message}: expected ${expected}, got ${actual}`);
}

function uniformEigenvalues(n,k,m){
  return Array.from({length:n},(_,j)=>(k/m)*(2-2*Math.cos((2*(j+1)-1)*Math.PI/(2*n+1))));
}

for(const storeys of [1,2,3])test(`${storeys}-storey uniform shear building matches the closed-form benchmark`,()=>{
  const mass=120000,stiffness=180e6;
  const result=solveModes(new Array(storeys).fill(mass),new Array(storeys).fill(stiffness));
  const expected=uniformEigenvalues(storeys,stiffness,mass);
  assert.equal(result.modes.length,storeys);
  result.modes.forEach((mode,i)=>assertClose(mode.w2,expected[i],expected[i]*1e-11,`mode ${i+1} eigenvalue`));
  assert.equal(result.diagnostics.converged,true);
  assert.ok(result.diagnostics.maxEigenResidual<1e-12);
  assert.ok(result.diagnostics.maxMassOffDiagonal<1e-12);
  assert.ok(result.diagnostics.maxMassDiagonalError<1e-12);
  assert.ok(result.diagnostics.maxStiffnessOffDiagonal<1e-12);
  assert.ok(result.diagnostics.maxStiffnessDiagonalError<1e-12);
  assertClose(result.diagnostics.effectiveMassTotalPct,100,1e-10,'effective modal mass total');
  assert.deepEqual(result.diagnostics.warnings,[]);
});

test('reports a convergence warning when the sweep limit is reached',()=>{
  const result=solveModes([1,2,3],[10,20,30],{maxSweeps:1,tolerance:1e-16});
  assert.equal(result.diagnostics.converged,false);
  assert.match(result.diagnostics.warnings[0],/did not converge/);
});

test('rejects non-positive physical properties',()=>{
  assert.throws(()=>solveModes([1,0],[10,10]),/finite and positive/);
  assert.throws(()=>solveModes([1],[10,10]),/same non-zero length/);
});
