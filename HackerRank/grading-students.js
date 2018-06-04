//Grading Students
//HackerRank: https://www.hackerrank.com/challenges/grading/problem (completed in node.js)
//Repl.it: https://repl.it/@kcruzdev/GradingStudents

// HackerLand University has the following grading policy:

//  *Every student receives a grade in the inclusive range from 0 to 100.
//  *Any grade less than 40 is a failing grade.

//Sam is a professor at the university and likes to round each student's grade according to these rules:

//  *If the difference between the grade and the next multiple of 5 is less than 3, round grade up to the next multiple of 5.
//  *If the value of grade is less than 38, no rounding occurs as the result will still be a failing grade.

//For example, grade = 84 will be rounded to 85 but 29 will not be rounded because the rounding would result in a number that is less than 40.

//Given the initial value of grade for each of Sam's n students, write code to automate the rounding process. Complete the function solve that takes an integer array of all grades, and return an integer array consisting of the rounded grades. For each grade, round it according to the rules above and print the result on a new line.

//Sample Input
//4
//73
//67
//38
//33

//Sample Output
//75
//67
//40
//33


// Explanation
// 1. Student 1 received a 73, and the next multiple of 5 from 73 is 75. Since 75 - 73 < 3, the student's grade is rounded to 75.
// 2. Student 2 received a 67, and the next multiple of 5 from 67 is 70. Since ,70 - 67 = 3 the grade will not be modified and the student's final grade is 67.
// 3. Student 3 received a 38, and the next multiple of 5 from 38 is 40. Since 40 - 38 < 3, the student's grade will be rounded to 40.
//Student 4 received a grade below 38, so the grade will not be modified and the student's final grade is .


//Complete the gradingStudents function below.
function gradingStudents(grades) {

    for (let i=0;i < grades.length; i++){
        if (grades[i] < 38){
            
        }
        else{
            const leftover = grades[i] % 5;
            if (leftover > 2){
                grades[i] += 5 - leftover;
            }
        }
    } 
  
return grades
}

const grades = [73, 67, 38, 33];
console.log(gradingStudents(grades)); //expected result is [75, 67, 40, 33]