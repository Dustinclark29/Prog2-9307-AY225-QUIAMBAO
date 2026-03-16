3×3 Matrix Determinant Solver
Student Information

Name: QUIAMBAO, Dustin Clark S.
Course: BSCS DS-1
Subject: Linear Algebra
Assignment: Determinant Solver

Assigned Matrix

[
M =
\begin{bmatrix}
6 & 3 & 4 \
2 & 5 & 1 \
4 & 2 & 3
\end{bmatrix}
]

Expected Determinant:

det(M) = 8
Program Description

This project implements a 3×3 Matrix Determinant Solver using the cofactor expansion method along the first row.

The program prints a step-by-step solution that includes:

The original matrix

Expansion along the first row

Each 2×2 minor calculation

Each cofactor term

The final determinant value

Two implementations are included:

Java version (DeterminantSolver.java)

JavaScript (Node.js) version (determinant_solver.js)

Both programs compute the same determinant value.

Formula Used

The determinant is calculated using the cofactor expansion formula:

det(M) =
M[0][0] * (M[1][1]*M[2][2] − M[1][2]*M[2][1])
− M[0][1] * (M[1][0]*M[2][2] − M[1][2]*M[2][0])
+ M[0][2] * (M[1][0]*M[2][1] − M[1][1]*M[2][0])
How to Run the Java Program

Compile:

javac DeterminantSolver.java

Run:

java DeterminantSolver
How to Run the JavaScript Program

Make sure Node.js is installed.

Run:

node determinant_solver.js
Sample Output
3x3 MATRIX DETERMINANT SOLVER
Student: QUIAMBAO, DUSTIN CLARK S.

| 6  3  4 |
| 2  5  1 |
| 4  2  3 |

Step 1 - Minor M11 = 13
Step 2 - Minor M12 = 2
Step 3 - Minor M13 = -16

Cofactor C11 = 78
Cofactor C12 = -6
Cofactor C13 = -64

DETERMINANT = 8
Repository Structure
linear-algebra/
└── assignment-01/
    ├── DeterminantSolver.java
    ├── determinant_solver.js
    └── README.md
Conclusion

The program successfully computes the determinant of the assigned 3×3 matrix using cofactor expansion and prints a clear step-by-step solution in both Java and JavaScript implementations.