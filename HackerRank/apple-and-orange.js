//Birthday Cake Candles
//HackerRank: https://www.hackerrank.com/challenges/apple-and-orange/problem (completed in node.js)
//Repl.it: https://repl.it/@kcruzdev/AppleandOrange

// Given the value of d for n apples and m oranges, can you determine how many apples and oranges will fall on Sam's house? (See HackerRank problem for more detail.)

// Sample Input
// 7 11
// 5 15
// 3 2
// -2 2 1
// 5 -6

// Sample Output
// 1
// 1

// Explanation
// The first apple falls at position 5 - 2 = 3. 
// The second apple falls at position 5 + 2 = 7. 
// The third apple falls at position 5 + 1 = 6. 
// The first orange falls at position 15 + 5 = 20. 
// The second orange falls at position 15 - 6 = 9. 
// Only one fruit (the second apple) falls within the region between 7 and 11, so we print 1 as our first line of output. 
// Only the second orange falls within the region between 7 and 11, so we print 1 as our second //line of output.


// Complete the countApplesAndOranges function below.
function countApplesAndOranges(s, t, a, b, apples, oranges) {


let applesCounter = 0;
for (let i=0; i < apples.length; i++){
    if (a + apples[i] >= s && a + apples[i] <= t){
        applesCounter++
    }
}

    
let orangeCounter = 0;
for (let i=0; i < oranges.length; i++){
     if (b + oranges[i] >= s && b + oranges[i] <= t){
        orangeCounter++
    }  
}
    
return console.log(`${applesCounter}\n${orangeCounter}`)
}

const s = 7;
const t = 11;
const a = 5;
const b = 15;
const apples = [-2, 2, 1];
const oranges = [5, -6];

countApplesAndOranges(s, t, a, b, apples, oranges);