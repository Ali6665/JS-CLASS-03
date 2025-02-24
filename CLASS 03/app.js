// Chapter 10-15

// Chapter 10 (if statements)


// Q 01

var city = "karachi";

if (city.toLowerCase() == "karachi");
    {

  console.log("The city light",city);

}

// Q 02


 var x = "y";
 var y = "y";
if (x === y) {
    var Zvalue = prompt("Please enter the value of z?");

  }

// Q 03


var z = 10010;

if (z === 10010) {
    alert("Karachi");
  } else {
    alert("Please write correct city");
  }

// Q 04

var x_2 = 10; 

if (x_2 === 10) {
  x_2 = 1;  
}

console.log(x_2); 

// Chap Chapter 11 (Comparison Operators)

// Q 01

var a = 8
var b = 5
if (!(a === b)) {

}



// Q 02

var a = 8
var b = 5
if (a >= b) {

}

// Q 03

var myVar = 7;

if (myVar !== 10) { 
  myVar = 10;     
  
console.log(myVar);
}

// Q 04

var number1 = 5;
var number2 = 10;


if (number1 !== number2) {

    alert("Congratulations!");
}


// Q 04


var firstName = prompt("Please enter your first name:");


var otherName = "Ahmed";


if (firstName !== otherName) {

  alert("No match");

}


// Chap 12 (if…else and else if statements)

// Q 01

var value1 = 10;
var value2 = 5;


if (value1 >= value2) {
    alert("if so, display ");
} 
else {
    alert("if not, display ");
}

// Q 02


var marks = parseFloat(prompt("Enter your marks out of 100:"));

// Validate the input
if (isNaN(marks) || marks < 0 || marks > 100) {
  console.log("Invalid marks entere! Please enter  number 0 and 100.");
} else {

  var marks = parseFloat(prompt("Enter your marks out of 100:"));percentage = marks;
  var marks = parseFloat(prompt("Enter your marks out of 100:")); grade;

  // Determine the grade using if, else if, and else statements
  if (percentage >= 90) {
    grade = "A";
  } else if (percentage >= 80) {
    grade = "B";
  } else if (percentage >= 70) {
    grade = "C";
  } else if (percentage >= 60) {
    grade = "D";
  } else if (percentage >= 50) {
    grade = "E";
  } else {
    grade = "F";
  }
  console.log("Your Percentage: " + percentage + "%");
  console.log("Your Grade: " + grade);
}

// Q 03 

// The correct value of a is 10


// Q 04

var city1 = prompt("Please enter a city:");

if (city1 === "Karachi") {
  alert("You have enter Karachi!");
} else if (city1 === "Lahore") {
  alert("You have enter a different Lahore");
} else {
  alert("You have enter a different city");
}


// Chap 13 (Testing sets of conditions)

// Q 01

var c = 8;
var d = 8;


if (a === b && c === d) {

}


// Q 02

if (a === b || c !== d) {

}

// Q 03


if ((name === "Hamza" || name === "Arsalan") && age < 60) {

}

// Q 04

var num1 = 10;
var num2 = 20; 

if (num1 < num2 || num1 > num2) {
    alert("Condition num1 , mum2");
}


// Chapter 14 (If statements nested)


// Q 01


var password = "mypassword";
if (password !== "") { 
    if (password <= 5) { 
        alert("Password  greater than 5");
    } else {
        alert("Ok");
    }
} else {
    alert("Password cannot empty");
}


// Q 02

var h = 1; // Assigning a value to 'a'
var f = 10; // Assigning a value to 'c'
var Max = 10; // Defining 'Max'

if (a === 1) { 
    if (c === Max) {
        alert("Ok");
    }
}


// Q 03

if (a === 1 && c === Max) {
  alert("OK");
}

// Q 04


var num_1 = 10;
var num_2 = 10;

if (num_1 === num_2) {
    if (num_1 <= num_2) {
        alert(" conditions are true: num1 equals num2 and num1  num2.");
    }
}

// 1 pdf ennd



// Chapter 9-11 pdf


// USER INPUT & CONDITIONAL STATEMENT


// Q 01


var city = prompt("Enter your city name:");


if (city && city.toLowerCase() === "karachi") {
    alert("Welcome to city");
} 
else {
    

    alert("You are not in Karachi.");
}

// Q 02


var gender = prompt("Enter your gender (Male/Female):");
var genderLower = gender.toLowerCase();

if (genderLower === "male") {
    alert("Good Morning Sir.");

} 
else if (genderLower === "female") {
    alert("Good Morning Ma'am.");
} 
else {
    alert("not a avaible");
}

// Q 04


var fuelInput = prompt("Enter the remaining fuel in car");
var remainingFuel = parseFloat(fuelInput);

if (remainingFuel < 0.25) {
    alert("Please fuel in your car");
}

// Q 05

// a

var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}


// b.
var b = 82;
if (b++ === 83) {
  alert("given condition for variable b is true");
} 


// c.
var c = 12;
if (c++ === 13) {
  alert("condition 1 is true");
} 


if (c === 13) {
  alert("condition 2 is true");
} 


if (++c < 14) {
  alert("condition 3 is true");
} 



if (c === 14) {
  alert("condition 4 is true");
} 


// d.
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
  alert("The cost equals");
} 



// e.
if (true) {
  alert("True");
}
if (false) {
  alert("False");
}


// Q 07


var secretNumber = 10 + 1;

var guess = prompt("Guess the secret number (between 1 and 10):" , 10);

if (guess === secretNumber) {
    alert("Correct answer");
} else if (guess + 1 === secretNumber) {
    alert("Close  correct answer");
} else {
    alert("Wrong answer. " + secretNumber);
}


// Q 08

// Prompt the user to enter a number
var number = parseInt(prompt("Enter a number:"), 10);

// Check if the number is divisible by 3
if (number % 3 === 0) {
  alert(number + " is divisible by 3.");
}
 else {
  alert(number + " is not divisible by 3.");
}


// Q 09

var input = prompt("Enter a number:");
var numer = parseInt(input, 10);

if (numer) {
  console.log("Please enter a valid number.");
} else {

  if (number % 2 === 0) {
    console.log(`${numer} is an even number.`);
  } else {
    console.log(`${numer} is an odd number.`);
  }
}

// Q 10


var temperature = prompt("Enter the temperature:");

if (temperature > 40) {
  alert("It is too hot outside.");
} else if (temperature > 30) {
  alert("The Weather today is Normal.");
} else if (temperature > 20) {
  alert("Today's Weather is cool.");
} else if (temperature > 10) {
  alert("OMG! Today's weather is so Cool.");
}
 else {
  alert("It seems quite cold outside.")
 }



//  chapter 9-11 end



// chapter 12-13



// IF...ELSE & ELSE IF STATEMENT,
// TESTING SET OF CONDITIONS


// Q 01


var inpu_t = prompt("Enter a character:");
  var ch =  inpu_t = prompt("Enter a character:");
  var ai = ch.charCodeAt(0);

if (inpu_t) {


  if (ai >= 48 && ai <= 57) {
    console.log(ch + " number.");
  } else if (ascii >= 65 && ai <= 90) {
    console.log(ch + " uppercase letter.");
  } else if (ascii >= 97 && ai <= 122) {
    console.log(ch + " lowercase letter.");
  } else {
    console.log("The character is not a number,");
  }
} else {
  console.log("No input provided.");
}


// Q 03

var input = prompt("Enter a number:");
var num = 1;


if (num) {
  if (num > 0) {
    console.log(" number is positive.");
  } else if (num < 0) {
    console.log(" number is negative.");
  } else {
    console.log(" number is zero.");
  }
} else {
  console.log(" Please enter a valid number.");
}


// Q 05



var correctPassword = "YourPassword123";
var userPassword = prompt("Please enter your password:");


if (userPassword === null) {
  
  alert("Please enter your password");
} else if (userPassword === correctPassword) {

  alert("Correct! The password you entered matches the original password");
} else {
  alert("Incorrect password");
}


// Q 06

var greeting;
var hour = 13;
if (hour < 18) {
  console.log ( "Good day");
} else {
  console.log ( "Good evening");
}



// Q 07


var hour = parseInt(time24.substring(0, 2));
  var minute = parseInt(time24.substring(2, 4));
  var period = "";

 
  if (hour >= 12) {
    period = "pm";
  } else {
    period = "am";
  }

 
  if (hour === 0) {
 
    hour = 12;
  } else if (hour > 12) {
    hour = hour - 12;
  } 

  
  if (minute === 0) {

    return hour + period;
  } else {
   
    if (minute < 10) {
      minute = "0" + minute;
    }
    return hour + ":" + minute + period;
  }
var timeInput = prompt("Enter time in 24-hour format (e.g., 1900 for 7pm):");
