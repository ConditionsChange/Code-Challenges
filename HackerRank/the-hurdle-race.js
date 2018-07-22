//The Hurdle Race
//HackerRank: https://www.hackerrank.com/challenges/the-hurdle-race/problem (completed in node.js)
//Repl.it: https://repl.it/@kcruzdev/TheHurdleRace

// Dan plays a video game in which his character competes in a hurdle race. Hurdles are of varying heights, and Dan has a maximum height he can jump. There is a magic potion he can take that will increase his maximum height by 1 unit for each dose. How many doses of the potion must he take to be able to jump all of the hurdles?

// Given an array of hurdle heights, and an initial maximum height Dan can jump, k, determine the minimum number of doses Dan must take to be able to clear all the hurdles in the race.

// Sample Input
// 5 4
// 1 6 3 5 2

// Sample Output
// 2


function hurdleRace(k, height) {
    if (Math.max(...height) - k < 0){
        return 0;
        }
    return Math.max(...height) - k;
}

const numberOfHurdles = 5;
const maxJump = 4;
const hurdles = [1, 6, 3, 5, 2];
console.log(hurdleRace(maxJump, hurdles)); //expected output: 2