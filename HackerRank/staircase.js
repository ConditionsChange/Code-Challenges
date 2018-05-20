//Staircase
//HackerRank: https://www.hackerrank.com/challenges/staircase/problem (completed in node.js)
//Repl.it: https://repl.it/@kcruzdev/HardtofindMelodicCybernetics

// Constuct a right-aligned starcase of integer n

// Sample Input
// 6

// Sample Output
//     #
//    ##
//   ###
//  ####
// #####
//######


// Explanation
// The staircase is right-aligned, composed of # symbols and spaces, and has a height and width of n=6.


function staircase(n) {

    var string = "";
    
    for (var i=1; i < n + 1 ; i++){ //i indicates line number
        var line = "";
        
        for (var j=1; j < n + 1; j++){// j indicates column number
            if (n - j >= i){
                line = line.concat(" ")
            }
            else{
                line = line.concat("#")   
            }
        }
        
        string = string.concat(line + "\n")
    }
    
    return console.log(string.trimRight())

}

const n = 6;
staircase(n);