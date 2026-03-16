/**

* =====================================================
* Student Name    : QUIAMBAO, DUSTIN CLARK S.
* Course          : Math 101 — Linear Algebra
* Assignment      : Programming Assignment 1 — 3x3 Matrix Determinant Solver
* School          : University of Perpetual Help System DALTA, Molino Campus
* Date            : [DATE COMPLETED]
* Runtime         : Node.js (run with: node determinant_solver.js)
*
* Description:
* This program computes the determinant of a hardcoded
* 3x3 matrix using cofactor expansion along the first row.
* Each step of the calculation is printed clearly.
* =====================================================
  */

// ── SECTION 1: Matrix Declaration ─────────────────────────
const matrix = [
[6, 3, 4],
[2, 5, 1],
[4, 2, 3]
];

// ── SECTION 2: Print Matrix ───────────────────────────────
function printMatrix(m) {
console.log("+---------------+");
m.forEach(row => {
console.log(`|  ${row[0]}  ${row[1]}  ${row[2]}  |`);
});
console.log("+---------------+");
}

// ── SECTION 3: 2x2 Determinant Helper ─────────────────────
function computeMinor(a, b, c, d) {
return (a * d) - (b * c);
}

// ── SECTION 4: Determinant Solver ─────────────────────────
function solveDeterminant(m) {

const line = "=".repeat(50);

console.log(line);
console.log("3x3 MATRIX DETERMINANT SOLVER");
console.log("Student: QUIAMBAO, DUSTIN CLARK S.");
console.log(line);

printMatrix(m);

console.log("\nExpanding along Row 1 (cofactor expansion):\n");

// Minor M11
const minor11 = computeMinor(m[1][1], m[1][2], m[2][1], m[2][2]);
console.log(`Step 1 - Minor M11: det([${m[1][1]},${m[1][2]}],[${m[2][1]},${m[2][2]}]) = (${m[1][1]}*${m[2][2]}) - (${m[1][2]}*${m[2][1]}) = ${minor11}`);

// Minor M12
const minor12 = computeMinor(m[1][0], m[1][2], m[2][0], m[2][2]);
console.log(`Step 2 - Minor M12: det([${m[1][0]},${m[1][2]}],[${m[2][0]},${m[2][2]}]) = (${m[1][0]}*${m[2][2]}) - (${m[1][2]}*${m[2][0]}) = ${minor12}`);

// Minor M13
const minor13 = computeMinor(m[1][0], m[1][1], m[2][0], m[2][1]);
console.log(`Step 3 - Minor M13: det([${m[1][0]},${m[1][1]}],[${m[2][0]},${m[2][1]}]) = (${m[1][0]}*${m[2][1]}) - (${m[1][1]}*${m[2][0]}) = ${minor13}`);

// Cofactors
const c11 = m[0][0] * minor11;
const c12 = -m[0][1] * minor12;
const c13 = m[0][2] * minor13;

console.log();
console.log(`Cofactor C11 = (+1) * ${m[0][0]} * ${minor11} = ${c11}`);
console.log(`Cofactor C12 = (-1) * ${m[0][1]} * ${minor12} = ${c12}`);
console.log(`Cofactor C13 = (+1) * ${m[0][2]} * ${minor13} = ${c13}`);

// Final determinant
const det = c11 + c12 + c13;

console.log(`\n det(M) = ${c11} + (${c12}) + ${c13}`);

console.log(line);
console.log(`DETERMINANT = ${det}`);

if (det === 0) {
    console.log("The matrix is SINGULAR — it has no inverse.");
}

console.log(line);
}

// ── SECTION 5: Run Program ───────────────────────────────
solveDeterminant(matrix);
