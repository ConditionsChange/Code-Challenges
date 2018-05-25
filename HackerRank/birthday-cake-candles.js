//Birthday Cake Candles
//HackerRank: https://www.hackerrank.com/challenges/birthday-cake-candles/problem (completed in node.js)
//Repl.it: https://repl.it/@kcruzdev/BirthdayCakeCandles

// Complete the function birthdayCakeCandles that takes your niece's age and an integer array containing height of each candle as input, and return the number of candles she can successfully blow out (she is only able to blow out the tallest candles).

// Sample Input
//3 2 1 3

// Sample Output
// 2

// Explanation
// We have one candle of height 1, one candle of height 2, and two candles of height 3. Your niece only blows out the tallest candles, meaning the candles where height = 3. Because there are 2 such candles, we print 2 on a new line.


function birthdayCakeCandles(ar) {

    const maxValueFound = ar.reduce(function(a, b) {
    return Math.max(a, b);
    });

    return ar.filter(value => value == maxValueFound).length;
    
}

const candles = [3,2,1,3];
console.log(birthdayCakeCandles(candles));