//* ====================================
//*    Conditional statement Section
//* ====================================

//* ===============================
//*         If Statement
//* ===============================

//? If Else: The if...else statement executes a statement if a specified condition is truthy. If the condition is Falsy, another statement in the optional lse clause will be executed.

// Syntax
// if (condition) {
//   // Code to be executed if the condition is true
// } else {
//   // Code to be executed f the condition is false
// }

var temperature = 45;
if (temperature > 40) {
  console.log("Let's go on tracking in the mountain.");
} else {
  console.log("It's too hot, let's stay at home.");
}

//? We can also use an else if clause to check additional conditions in the if else clause:
var temp = 40;
if (temp > 40) {
  console.log("Let's go on tracking in the mountain.");
} else if (temp == 40) {
  console.log("Let's decide the best activity later.");
} else {
  console.log("It's too hot, let's stay at home.");
}

//* ===============================
//*      Interview Question
//* ===============================

//! Requirements:
//? If the person is 18 years or older, a citizen, and registered to vote, display a message saying they are eligible to vote.
//? If the person is younger than 18, not a citizen, or not registered to vote, display a message saying they are not eligible to vote.
//? If the person is 18 or older but not a citizen, display a message saying they are not eligible due to citizenship status.
//? If the person is 18 or old, a citizen, but not registered to vote, display a message saying they are not eligible due to registration status.
//? Extended voting eligibility checker with additional conditions.

//? Assume the user's age, citizenship status, and registration status as inputs
let userAge = 19;
let isCitizen = false; // Assume true for citizen, false for non-citizen
let isRegistered = false; // Assume false for not registered, true for registered
//! Check eligibility using is...else statements with multiple conditions.

//? Solution: My-solution and simple approach
if (userAge >= 18 && isCitizen == true && isRegistered == true) {
  console.log("You are eligible to vote!");
  if (userAge > 18 && isCitizen == false && isRegistered == false) {
    console.log("You are not eligible to vote!");
  } else if (userAge >= 18 && isCitizen == false) {
    console.log("You are not eligible due t citizenship status!");
  }
} else {
  console.log("You are not eligible due to registration status!");
}

//? Solution: More complex but efficient approach
if (userAge) {
  if (isCitizen) {
    if (isRegistered) {
      console.log("You are eligible to vote!");
    } else {
      console.log("You are not eligible due to registration status!");
    }
  } else {
    console.log("You are not eligible due to citizenship status!");
  }
} else {
  console.log("You are not eligible to vote!");
}

//* ===============================
//*      Interview Questions
//* ===============================

//! 1. Write a program to check if a number is even or odd.
let num = 16;
if (num % 2 == 0) {
  console.log("The number is even!");
} else {
  console.log("The number is odd!");
}

//! 2. Write a program to check if a number is prime or not.
// todo: Prime numbers are numbers that have only 2 factors: 1 and the number itself.
//? All prime numbers greater than 2 are odd.
//? However, not all odd numbers are prime.
let userNum = 2;
let flag = 1;
for (let i = 2; i < userAge - 1; i++) {
  if (userAge % i == 0) {
    flag = 0;
    break;
  }
}
if (flag) {
  console.log("The number is prime!");
} else {
  console.log("The number is not prime!");
}

//! 3. Write a program to check if a number is positive, negative, or zero.
let a = 5;
if (a > 0) {
  console.log("The number is positive!");
} else if (a == 0) {
  console.log("The number is zero!");
} else {
  console.log("The number is negative!");
}

//* ===============================
//*      Switch Statement
//* ===============================

//? Switch Statement: The switch statement is used to perform different actions based on different conditions.
//? Syntax:
// switch (expression) {
//   case value1:
//     //   Code to be executed if expression === value1
//     break;

//   case value2:
//     //   Code to be executed if expression === value2
//     break;

//   //  More cases can be added as needed

//   default:
//   //  Code to be executed if none of the cases match
// }

// todo: Let's see the example
//! Explain how the switch statement works and what will be the output when the variable day is set to different values.
let day = 0;
switch (day) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid Day!");
}

//? =========================
//?      Challenge time
//? =========================

//! Write a JavaScript switch statement that takes a variable areaOfShapes representing different shapes, and based on its value, calculate and log the area of the corresponding shapes. Consider three shapes: 'Rectangle', 'Circle', and 'Square'. For 'Rectangle', use variable a and b as the sides; for 'Circle', use a variable r as the radius; and for 'Square', use variable a as the side length. If the provided shape is not recognized, log a message saying, 'Sorry the shape is not available'. Test your switch statement with areaOfShapes set to 'Square' and sides a and b set to 5 and10, respectively. Ensure that the correct area (25 in this case) is logged to the console.

//? Solution

//! Question: Explain the purpose of the code. what is it calculating based on the values of areaOfShapes, a, and b?
//? Solution: The code calculates and logs the area of different shapes (rectangle, circle, and square) based on the value of the areaOfShapes variable.

//! Question: What will be the output if areaOfShapes is set to 'Square' and why?
//? Solution: When set areaOfShapes to 'square' then switch case will be match with that variable value and that case will be executed.

//! Question: Why is there a break statement after each case in the switch statement?
//? Solution: The break statement is used to exit the switch statement after the corresponding case is executed, preventing fall-through to subsequent cases.

//! Question: If areaOfShape is set to 'Circle', what will be logged to the console, and why is the variable r defined within the case block?
//? Solution: The output will be the area of a circle r (the output of the radius value of the circle) since the case matches 'Circle', and r is defined within the case block.

//! Question:
