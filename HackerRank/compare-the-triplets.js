//Compare The Triplets
//HackerRank: https://www.hackerrank.com/challenges/compare-the-triplets/problem (completed in node.js)
//Repl.it: https://repl.it/@kcruzdev/LowestFumblingTriangles 

// Given A and B, can you compare the two arrays and print their respective comparison points?

// Sample Input
// A = [5, 6, 7]
// B = [3, 6, 10]

// Sample Output
// 1 1 

// Explanation
// A[0] > B[0] so A gets 1 point
// A[1] = B[1] so neither gets a point
// A[2] < B[2] so B gets 1 point 
// print A's points then B's points => 1 1


function solve(a0, a1, a2, b0, b1, b2) {
    
    let Alice = 0;
    let Bob = 0;
    
    if (a0 > b0){
        Alice++
    }
    else if (b0 > a0){
        Bob++
    }
    
    if (a1 > b1){
        Alice++
    }
    else if (b1 > a1){
        Bob++
    }
    
    if (a2 > b2){
        Alice++
    }
    else if (b2 > a2){
        Bob++
    }

    return [Alice, Bob]
}

const a = [5, 6, 7]
const b = [3, 6, 10]

const result = solve(a[0], a[1], a[2], b[0], b[1], b[2])

console.log(result.join(" ")) //expected 1 1