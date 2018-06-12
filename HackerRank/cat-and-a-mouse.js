//Cats and a Mouse
//HackerRank: https://www.hackerrank.com/challenges/cats-and-a-mouse/problem (completed in node.js)
//Repl.it: https://repl.it/@kcruzdev/CatsAndAMouse

// Two cats and a mouse are at various positions on a line. You will be given their starting positions. Your task is to determine which cat will reach the mouse first, assuming the mouse doesn't move and the cats travel at equal speed. If the cats arrive at the same time, the mouse will be allowed to move and it will escape while they fight.

//You are given q queries in the form of x, y, and z representing the respective positions for cats A and B, and for mouse C. Complete the function catAndMouse to return the appropriate answer to each query, which will be printed on a new line.

//If cat A catches the mouse first, print Cat A.
//If cat B catches the mouse first, print Cat B.
//If both cats reach the mouse at the same time, print Mouse C as the two cats fight and mouse escapes.

// Sample Input
// A = [5, 6, 7]
// B = [3, 6, 10]

// Sample Output
// Cat B
// Mouse C

// Explanation
// Query 0: Cat B will catch the mouse first, so we print Cat B on a new line.
// Query 1: Because the mouse escapes, we print Mouse C on a new line.


// Complete the catAndMouse function below.
function catAndMouse(x, y, z) {
    // x = Cat A's position
    // y = Cat B's position
    // z = Mouse C's position
    
    const catADistance = Math.abs(x - z);
    const catBDistance = Math.abs(y - z);
    
    if (catADistance < catBDistance){
        return "Cat A";
    }
    else if (catBDistance < catADistance){
        return "Cat B";
    }
    else{
        return "Mouse C";
    }

}

const query1 = [1, 2, 3];
const query2 = [1, 3, 2];
console.log(catAndMouse(query1[0], query1[1], query1[2])); //expected result is "Cat B"
console.log(catAndMouse(query2[0], query2[1], query2[2])); //expected result is "Mouse C"