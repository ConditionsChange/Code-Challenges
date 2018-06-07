//Kangaroo
//HackerRank: https://www.hackerrank.com/challenges/kangaroo/problem (completed in node.js)
//Repl.it: https://repl.it/@kcruzdev/Kangaroo

// You are choreograhing a circus show with various animals. For one act, you are given two kangaroos on a number line ready to jump in the positive direction (i.e, toward positive infinity).

//The first kangaroo starts at location x1 and moves at a rate of v1 meters per jump.
//The second kangaroo starts at location x2 and moves at a rate of v2 meters per jump.

//You have to figure out a way to get both kangaroos at the same location as part of the show.

//Complete the function kangaroo which takes starting location and speed of both kangaroos as input, and return "YES" or "NO" appropriately. Can you determine if the kangaroos will ever land at the same location at the same time? The two kangaroos must land at the same location after making the same number of jumps.

// Sample Input
// 0 3 4 2

// Sample Output
// YES

// Explanation
// Kangaroo 1 starts at 0 and jumps 3 numbers per jump. Kangaroo 2 starts at 4 and jumps 2 numbers per jump. These kangaroos will meet at number 12 in 4 jumps. Therefore we print "YES".



// x is the current position of a kangaroo on the numberline
// y is how many jumps the kangaroo took to get to its current position

// The Kangaroo's position as a function of how many jumps it took is below:
// x1 + v1j = x
// x2 + v2j = x

// Solve for j (jumps) 
// x1 + v1j = x2 + v2j
// v1j - v2j= x2 - x1
// j(v1 - v2) = x2 - x1
// j = (x2 - x1) / (v1 - v2)

// then replug into one of the original equations to find x (position on the number line)
// if x is an integer return "YES", else return "NO"
// Complete the kangaroo function below.
function kangaroo(x1, v1, x2, v2) {

    if (x1 === x2 && v1 === v2){
        console.log(`These kangaroos are starting at the same place with the same velocity.`)
        return "NO";
    }
    
    const jumps = (x2 - x1) / (v1 - v2);
    if (jumps > 0 && Number.isInteger(jumps)){
        console.log(`Yes, these kangaroos will intersect in ${jumps} jumps at x = ${x1 + v1 * jumps}`)
        return "YES";
    }
    console.log(`These kangaroos will never land at the same place at the same time.`)
    return "NO";
    
}

console.log(kangaroo(0, 3, 4, 2)); //expected result is "YES"