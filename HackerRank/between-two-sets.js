//Between Two Sets
//HackerRank: https://www.hackerrank.com/challenges/between-two-sets/problem (completed in node.js)
//Repl.it: https://repl.it/@kcruzdev/BetweenTwoSets

// You will be given two arrays of integers. You will be asked to determine all integers that satisfy the following two conditions:

// 1. The elements of the first array are all factors of the integer being considered
// 2. The integer being considered is a factor of all elements of the second array

// These numbers are referred to as being between the two arrays. You must determine how many such numbers exist.

// Sample Input
// 2 3
// 2 4
// 16 32 96

// Sample Output
// 3

// Explanation
// 2 and 4 divide evenly into 4, 8, 12 and 16. 
// 4, 8 and 16 divide evenly into 16, 32, 96.
// 4, 8 and 16 are the only three numbers for which each element of A is a factor and each is a factor of all elements of B.


// Complete the getTotalX function below.
function getTotalX(a, b) {

    const largestA = a.reduce(function(a, b) {
        return Math.max(a, b);
    });

    const smallestB = b.reduce(function(a, b) {
        return Math.min(a, b);
    });

    let values = [];
    
    for (let i=largestA; i <= smallestB; i++){ //i's are the numbers being tested between largesta and smallestB
        let failState = false;
        for (let j = 0; j < a.length; j++){ //j's are the indices of a
            if (i % a[j] > 0){
                failState = true;
                break
            }
        }
        
        if (failState == true){
            continue
        }
        
        for (let k = 0; k < b.length; k++){ //k's are the indices of b
            if (b[k] % i > 0){
                failState = true;
                break
            }
        }
        
        if (failState == true){
            continue
        }
        else{
            values.push(i)
        }
        
    }
    return values.length
}

const array1 = [2, 4];
const array2 = [16, 32, 96];
console.log(getTotalX(array1, array2)); //expected result is 3