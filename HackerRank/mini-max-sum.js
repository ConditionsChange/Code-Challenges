//Mini Max Sum
//HackerRank: https://www.hackerrank.com/challenges/mini-max-sum/problem (completed in node.js)
//Repl.it: https://repl.it/@kcruzdev/MiniMaxSum

// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers.

// Sample Input
// 1 2 3 4 5

// Sample Output
// 10 14

// Explanation
// Our initial numbers are 1, 2, 3, 4, and 5. We can calculate the following sums using four of the five integers:
// 1. If we sum everything except 1, our sum is 2 + 3 + 4 + 5 = 14.
// 2. If we sum everything except 2, our sum is 1 + 3 + 4 + 5 = 13.
// 3. If we sum everything except 3, our sum is 1 + 2 + 4 + 5 = 12.
// 4. If we sum everything except 4, our sum is 1 + 2 + 3 + 5 = 11.
// 5. If we sum everything except 5, our sum is 1 + 2 + 3 + 4 = 10.


function miniMaxSum(arr) {
    const min = arr.sort(function(a, b){return a-b}).slice(0,arr.length-1).reduce((accumulator, currentValue) => accumulator + currentValue);
    const max = arr.sort(function(a, b){return b-a}).slice(0,arr.length-1).reduce((accumulator, currentValue) => accumulator + currentValue);
    return console.log(`${min} ${max}`)
    
}

const arr = [1,2,3,4,5];
miniMaxSum(arr);