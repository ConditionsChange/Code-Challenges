//Diagonal Difference
//HackerRank: https://www.hackerrank.com/challenges/diagonal-difference/problem (completed in node.js)
//Repl.it: https://repl.it/@kcruzdev/DiagonalDifference

// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

// Sample Input
//const n = 3;
//let a = [[11,2,4],
//          [4,5,6],
//         [10,8,-12]];

// Sample Output
// 15

// Explanation
//The primary diagonal is:
//11
//   5
//     -12

//Sum across the primary diagonal: 11 + 5 - 12 = 4

//The secondary diagonal is:

//     4
//   5
//10

//Sum across the secondary diagonal: 4 + 5 + 10 = 19 
//Difference: |4 - 19| = 15


function diagonalDifference(a) {
    
    var n = a.length;
    
    var test = a[0][0] + a[1][1]

    var primaryDiagonal = 0;
    for (var i=0; i < n; i++){
        primaryDiagonal += a[i][i];
    }

    
    var secondaryDiagonal = 0;
    for (var j=0; j < n; j++){
        secondaryDiagonal += a[j][n-j-1];
    }
    

    return Math.abs(primaryDiagonal - secondaryDiagonal);

}

const n = 3;

let a = [[11,2,4],
          [4,5,6],
          [10,8,-12]];

let result = diagonalDifference(a);

console.log(result) //expected result 15

