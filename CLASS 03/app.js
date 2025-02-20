// Chapter 10-1



//QUESTION 6

var greeting;
var hour = 19;
if (hour < 18) {
    greeting = "Good day";
} else { 
    greeting = "Good evening";
}
console.log(greeting)

//QUESTION 7

var time = prompt("Enter time in 24-hour format (e.g., 1900 for 7 PM):");

if (time >= 0 && time < 1200) {
    console.log("Good Morning!");
} else if (time >= 1200 && time < 1700) {
    console.log("Good Afternoon!");
} else if (time >= 1700 && time < 2100) {
    console.log("Good Evening!");
} else if (time >= 2100 && time <= 2359) {
    console.log("Good Night!");
} else {
    console.log("Invalid time entered. Please enter a valid 24-hour format time.");
}

//QUESTION 7

var city = prompt("Enter the name of your city:");

if (city.toLowerCase() === "karachi") {
    console.log("Welcome to the city of lights");
} else {
    console.log("Welcome to " + city);
}

//QUESTION 8

var gender = prompt("Enter your gender")

if (gender.toLowerCase() === "male"){
    console.log("Welcome sir")
} else if (gender.toLowerCase() === "female"){
    console.log("welcome mam")
} else {
    console.log("welcome")
}

//QUESTION 9

var signalColor = prompt("Enter the traffic signal color (Red/Yellow/Green):");

if (signalColor.toLowerCase() === "red") {
    console.log("Must Stop");
} else if (signalColor.toLowerCase() === "yellow") {
    console.log("Ready to move");
} else if (signalColor.toLowerCase() === "green") {
    console.log("Move now");
} else {
    console.log("Invalid color entered");
}

//QUESTION 10

var fuel = prompt("Enter the remaining fuel in your car (in litres):");

if (fuel < 0.25) {
    console.log("Please refill the fuel in your car");
} else{
    console.log("You have enough fuel")
}


//QUESTION 11

var subject1 = +prompt("Enter marks obtained in first subject:");
var subject2 = +prompt("Enter marks obtained in second subject:");
var subject3 = +prompt("Enter marks obtained in third subject:");
var totalMarks = 300;
var obtainedMarks = subject1 + subject2 + subject3;
var percentage = (obtainedMarks / totalMarks) * 100;
var grade;
var remarks;

if (percentage >=80) {
    grade = "A-one";
} else if (percentage >=70) {
    grade = "A";
} else if (percentage >= 60) {
    grade = "B";
} else{
    grade = "F";
}

if (percentage >=80) {
    remarks = "Excellent";
} else if (percentage >=70) {
    remarks = "Good";
} else if (percentage >=60) {
    remarks = "You need to improve";
} else  {
    remarks = "Sorry";
}
document.write("<h1>Mark sheet</h1>")
document.write("Total Marks = ",totalMarks , "<br>")
document.write( "Obtained Marks = ", obtainedMarks,"<br>")
document.write( "Percentage= ", percentage,"<br>")
document.write( "Grade = ", grade,"<br>")
document.write( "Remarks = ", remarks,"<br>")

//QUESTION 12

var secretNumber = 8;

if (secretNumber !== 8) {
  console.log("“Close enough to the correct answer”.");
} else {
  console.log("“Bingo! Correct answer”.");
}

//QUESTION 13

var number = +prompt("Enter a number to check if it is divisible by 3:");

if (number % 3 === 0) {
    console.log("The number is divisible by 3");
} else {
    console.log("The number is not divisible by 3");
}



//QUESTION 14

var evenOddNumber = +prompt("Enter a number to check if it is even or odd:");

if (evenOddNumber % 2 === 0) {
    console.log("The number is even");
} else {
    console.log("The number is odd");
}


//QUESTION 15

var T = 40;

if (T>=40) {
    console.log("“It is too hot outside.”")
} else if (T>30) {
    console.log("“The Weather today is Normal.”")
} else if (T>20) {
    console.log("Today’s Weather is cool.")
} else  {
    console.log("“OMG! Today’s weather is so Cool.”")
}


// QUESTION 16

var firstNumber = +prompt("Enter the first number:");
var secondNumber = +prompt("Enter the second number:");
var operation = prompt("Enter the operation (+, -, *, /, %):");

if (operation === "+") {
    console.log("Result: " + (firstNumber + secondNumber));
} else if (operation === "-") {
    console.log("Result: " + (firstNumber - secondNumber));
} else if (operation === "*") {
    console.log("Result: " + (firstNumber * secondNumber));
} else if (operation === "/") {
    console.log("Result: " + (firstNumber / secondNumber));
} else if (operation === "%") {
    console.log("Result: " + (firstNumber % secondNumber));
}

//QUESTION 17

var city = "karachi"; 
if (city = "Karachi"); {
     console.log("The City OF Lights")
}
