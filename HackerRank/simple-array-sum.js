//Simple Array Sum
//HackerRank: https://www.hackerrank.com/challenges/simple-array-sum/problem (completed in node.js)
//Repl.it https://repl.it/@kcruzdev/SimpleArraySum

// Given an array of integers, find the sum of its elements.

// Sample Input
// 6
// 1 2 3 4 10 11


// Sample Output
// 31


// Explanation
// We print the sum of the array's elements: 1 + 2 + 3 + 4 + 10 + 11 = 31


function simpleArraySum(ar) {
    return ar.reduce((accumulator, currentValue) => accumulator + currentValue)
}


myArray = [1,2,3,4,10,11] 


console.log(simpleArraySum(myArray)) //expected result is 31