//Time Conversion
//HackerRank: https://www.hackerrank.com/challenges/time-conversion/problem (completed in node.js)
//Repl.it: https://repl.it/@kcruzdev/TimeConversion

// Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

// Sample Input
// 07:05:45PM

// Sample Output
// 19:05:45


function timeConversion(s) {

    const meridiem = s.substring(s.length-2,s.length);
    let noMeridiem = s.substring(0,s.length-2);
    let timeArray = noMeridiem.split(':');


    timeArray[0] = parseInt(timeArray[0]);
    
    
    if (meridiem == "PM" & timeArray[0] != 12){
        timeArray[0] += 12;
    }
    
    if (meridiem == "AM" && timeArray[0] == 12){
        timeArray[0] = 0;
    }
    
    if (timeArray[0] == 24){
        timeArray[0] = 0;
    }
    
    if (timeArray[0] < 10){
        timeArray[0] = '0' + timeArray[0].toString();
    }
    else{
        timeArray[0] = timeArray[0].toString();       
    }
    
    return timeArray.join(":");

}

const time12HourFormat = "07:05:45PM";
console.log(timeConversion(time12HourFormat))