//Angry Professor
//HackerRank: https://www.hackerrank.com/challenges/angry-professor/problem (completed in node.js)
//Repl.it: https://repl.it/@kcruzdev/AngryProfessor

// A Discrete Mathematics professor has a class of students. Frustrated with their lack of discipline, he decides to cancel class if fewer than some number of students are present when class starts. Arrival times go from on time (arrivalTiume <= 0) to arrived late (arrivalTime > 0).

// Given the arrival time of each student and a threshold number of attendees, determine if the class is canceled.

// Sample Input
// 2
// 4 3
//-1 -3 4 2
// 4 2
// 0 -1 2 1

// Sample Output
// YES
// NO

// Explanation
// For the first test case, k=3. The professor wants at least 3 students in attendance, but only 2 have arrived on time (-3 and -1) so the class is cancelled.

// For the second test case, k=2. The professor wants at least 2 students in attendance, and there are 2 who have arrived on time (0 and -1) so the class is not cancelled.


function angryProfessor(k, a) {
const onTime = a.filter(index => index <= 0).length; // 0 or negative number means on time
if (onTime < k){ //k is cancellation threshold
    return "YES"; // yes, class is cancelled
}
    return "NO"; // no, class will take place
}

const numberOfTestCases = 2;

const NumStudentsCase1 = 4;
const cancellationThresholdCase1 = 3;
const attendanceArrayCase1 = [-1, -3, 4, 2];

const NumStudentsCase2 = 4;
const cancellationThresholdCase2 = 2;
const attendanceArrayCase2 = [0, -1, 2, 1];

console.log(angryProfessor(cancellationThresholdCase1, attendanceArrayCase1)); //expected output: YES
console.log(angryProfessor(cancellationThresholdCase2, attendanceArrayCase2)); //expected output: NO