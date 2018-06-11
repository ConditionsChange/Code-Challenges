//Divisible Sum Pairs
//HackerRank: https://www.hackerrank.com/challenges/divisible-sum-pairs/problem (completed in node.js)
//Repl.it: https://repl.it/@kcruzdev/DivisibleSumPairs

// You are given an array of n integers, a0, a1, ..., a(n-1), and a positive integer, k. Find and print the number of (i, j) pairs where i < j and ai + aj is divisible by k.

// Sample Input
//6 3
//1 3 2 6 1 2

// Sample Output
// 5

// Explanation
// Here are the 5 valid pairs when k = 3:
//(0, 2) => a0 + a2 = 1 + 2 = 3
//(0, 5) => a0 + a5 = 1 + 2 = 3
//(1, 3) => a1 + a3 = 3 + 6 = 9
//(2, 4) => a2 + a4 = 2 + 1 = 3
//(4, 5) => a4 + a5 = 1 + 2 = 3


// Complete the divisibleSumPairs function below.
function divisibleSumPairs(n, k, ar) {
    //n = length of array 
    //k = target number to be divisible by
    //ar = array
    let solutionCounter = 0;
    for (let i = 0; i < n ; i++){ //left index
        for (let j = 0; j < n; j++){ //right index
            
            if (j <= i){ //skip loop if right index is equal or less than left index
                continue;
            }        
            
            if ((ar[i] + ar[j]) % k === 0){
                solutionCounter++;
            }            
            
        }
    }   
    
    return solutionCounter;
}

const lengthOfArray = 6;
const divisibleBy = 3;
const array = [1, 3, 2, 6, 1, 2];
console.log(divisibleSumPairs(lengthOfArray, divisibleBy, array)); //expected result is 5