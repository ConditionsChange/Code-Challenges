//Birthday Chocolate
//HackerRank: https://www.hackerrank.com/challenges/the-birthday-bar/problem (completed in node.js)
//Repl.it: https://repl.it/@kcruzdev/BirthdayChocolate

// Lily has a chocolate bar that she wants to share with Ron for his birthday. Each of the squares has an integer on it. She decides to share a contiguous segment of the bar selected such that the length of the segment matches Ron's birth month and the sum of the integers on the squares is equal to his birth day. You must determine how many ways she can divide the chocolate.


// Sample Input
// 5
// 1 2 1 3 2
// 3 2

// Sample Output
// 2

// Explanation
// Lily wants to give Ron m = 2 squares summing to d = 3. The following two segments meet the criteria:

//[(1, 2), 1, 3, 2] => 1 + 2 = 3
//[1, (2, 1), 3, 2] => 2 + 1 = 3


// Complete the solve function below.
function solve(s, d, m) {
    // s = chocolate array
    // d = target sum
    // m = segment length
    let segmentCounter = 0;
    for (let i=0; i < s.length; i++){ //left index
        for (let j=0; j < s.length; j++){ //right index
            if (j < i || j - i + 1 != m){ //skip loop if the right index is less than the left index or if the indices do not create a segment length equal to m
                continue;
            }
            
            //sum the chocolate segment
            const sumCheck = s.slice(i,j+1).reduce((accumulator, currentValue) => accumulator + currentValue);
            
            
            if (sumCheck === d){
                segmentCounter++;
            }
        }
    }
    return segmentCounter;
}

const chocolateArray = [1, 2, 1, 3, 2];
const birthMonth = 3;
const birthDay = 2;

console.log(solve(chocolateArray, birthMonth, birthDay)); //expected result is 2