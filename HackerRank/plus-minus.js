//Plus Minus
//HackerRank: https://www.hackerrank.com/challenges/plus-minus/problem (completed in node.js)
//Repl.it: https://repl.it/@kcruzdev/PlusMinus

// Given an array of integers, calculate the fractions of its elements that are positive, negative, and are zeros. Print the decimal value of each fraction on a new line.

// Sample Input
// 6
// -4 3 -9 0 4 1  

// Sample Output
// 0.500000
// 0.333333
// 0.166667

// Explanation
//There are 3 positive numbers, 2 negative numbers, and 1 zero in the array. The proportions of occurrence are positive: 0.500000, negative: 0.333333 and zeros: 0.166667.

function plusMinus(arr) {
    let positives = 0;
    let negatives = 0;
    let zeroes = 0;
    
    for (var i=0; i<arr.length ;i++){
        if (arr[i] > 0){
            positives++
        }
        else if (arr[i] < 0){
            negatives++
        }
        else if (arr[i] == 0){
            zeroes++
        }
    }
    
    return console.log(`${positives/arr.length}\n${negatives/arr.length}\n${zeroes/arr.length}`)
}

arr = [-4, 3, -9, 0, 4, 1 ]
plusMinus(arr); //expected result: 0.500000 0.333333 0.166667