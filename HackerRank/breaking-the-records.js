//Breaking the Records
//HackerRank: https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem (completed in node.js)
//Repl.it: https://repl.it/@kcruzdev/BreakingtheRecords

// Given Maria's array of scores for a season of n games, find and print the number of times she breaks her records for most and least points scored during the season.

// Sample Input
// 9
// 10 5 20 20 4 5 2 25 1

// Sample Output
// 2 4

// Explanation
// She broke her best record twice (after games 2 and 7) and her worst record four times (after games 4, 4, 6, and 8), so we print 2 4 as our answer. Note that she did not break her record for best score during game 3, as her score during that game was not strictly greater than her best record at the time.

// Complete the breakingRecords function below.
function breakingRecords(scores) {

    let currentMax = scores[0];
    let currentMin = scores[0];
    let maxCount = 0;
    let minCount = 0;
    
    for (let i = 1; i < scores.length; i++){
        if (scores[i] > currentMax){
            currentMax = scores[i];
            maxCount++;
        }
        if (scores[i] < currentMin){
            currentMin = scores[i];
            minCount++;
        }
    }
    
    return [maxCount, minCount];

}

const mariasScores = [3, 4, 21, 36, 10, 28, 35, 5, 24, 42];
console.log(breakingRecords(mariasScores)) // expected result is [4, 0]