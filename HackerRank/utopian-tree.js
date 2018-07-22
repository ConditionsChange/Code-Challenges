//Utopian Tree
//HackerRank: https://www.hackerrank.com/challenges/utopian-tree/problem (completed in node.js)
//Repl.it: https://repl.it/@kcruzdev/UtopianTree

// The Utopian Tree goes through 2 cycles of growth every year. Each spring, it doubles in height. Each summer, its height increases by 1 meter.

// Laura plants a Utopian Tree sapling with a height of 1 meter at the onset of spring. How tall will her tree be after n growth cycles?

// Sample Input
// 3
// 0
// 1
// 4

// Sample Output
// 1
// 2
// 7

// Explanation
// There are 3 test cases.

// In the first case (n=0), the initial height (h=1) of the tree remains unchanged.
// In the second case (n=1), the tree doubles in height and is 2 meters tall after the spring cycle.
// In the third case (n=4), the tree doubles its height in spring (n=1, h=2), then grows a meter in summer (n=2, h=3), then doubles after the next spring (n=3, h=6), and grows another meter after summer (n=4, h=7). Thus, at the end of 4 cycles, its height is 7 meters.


function utopianTree(n) {
        if (n === 0){
            return 1;
        }
        else {
            let cycles = 0;
            let height = 1;
            while (cycles < n){
                cycles++;
                if (cycles % 2 === 0){ //summer, height increases by 1
                    height++;
                }
                else{ //spring, height doubles
                    height *= 2;
                }
            }
            return height;
        }   
}

const numberOfTestCases = 3;
const cycles = [0, 1, 4];
cycles.forEach( cycle => console.log(utopianTree(cycle)) ); //expected output: 1, 2, 7