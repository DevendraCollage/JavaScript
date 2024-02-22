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
let userNum = 12;
let flag = 1;
for (let i = 2; i < userNum - 1; i++) {
  if (userNum % i == 0) {
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
var areaOfShapes = "square";
switch (areaOfShapes) {
  case "circle":
    var r = 5;
    var radius = 3.1415 * (r * r);
    console.log(radius);
    break;

  case "rectangle":
    var h = 5;
    var w = 4;
    var rectangleArea = h * w;
    console.log(rectangleArea);
    break;

  case "square":
    var side = 4;
    var squareArea = side * 4; //* because it's a square
    console.log(squareArea);
    break;

  default:
    console.log("There are no shapes match!");
}

//! Question: Explain the purpose of the code. what is it calculating based on the values of areaOfShapes, a, and b?
//? Solution: The code calculates and logs the area of different shapes (rectangle, circle, and square) based on the value of the areaOfShapes variable.

//! Question: What will be the output if areaOfShapes is set to 'Square' and why?
//? Solution: When set areaOfShapes to 'square' then switch case will be match with that variable value and that case will be executed.

//! Question: Why is there a break statement after each case in the switch statement?
//? Solution: The break statement is used to exit the switch statement after the corresponding case is executed, preventing fall-through to subsequent cases.

//! Question: If areaOfShape is set to 'Circle', what will be logged to the console, and why is the variable r defined within the case block?
//? Solution: The output will be the area of a circle r (the output of the radius value of the circle) since the case matches 'Circle', and r is defined within the case block.

//! Question: What will happen is areaOfShapes is set to a shape that is not covered by any of the existing case statements?
//? Solution: The default case logs "Sorry, the shape is not available" if areaOfShapes is set to a shape not covered by any existing case.

//! Question: How does switch statement handle the flow od control based on the value of areaOfShapes?
//? Solution: The switch statement evaluates the value of areaOfShapes and executes the code block corresponding to the matching case. The break statements ensure that only relevant code block is executed.

//* ===============================
//*          While Loop
//* ===============================

//? While loop: a while loop in JavaScript is a control structure that repeatedly execute a block of code as long as a specified condition remain true. The loop continuous iterating while the condition is true, and it terminates when the condition becomes false.

// while (condition) {
//   // Code to be executed as long as the condition is true
// }

//* Simple while loop to counter from 1 to 10;
var i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

//! Practice :
//? Let's create a table of 3
console.log("Printing table of 5 on the screen!");
var tableMul = 5;
var i = 1;
while (i <= 10) {
  //? This is simple method
  console.log(tableMul, " x ", i, " = ", i * tableMul);

  //? This is Template literals of ES2015
  console.log(`${tableMul} x ${i} = ${tableMul * i}`);
  i++;
}

//* ===============================
//*         Do-While Loop
//* ===============================

//? Do...While loo: A do...while look in JavaScript is similar to a while loop, but it guarantees that the loop body will be executed at least once before checking the loop condition. The loop continue to execute while the specified condition is true, and it terminates when the condition becomes false.

// Syntax: do {
//   // Code to be executed at least once
// } while (condition);

//* Simple do...while loop to count from 1 to 10.
var i = 1;
do {
  console.log(i);
  i++;
} while (i <= 10);

//? Common Use Cases:
// When you want o guarantee the execution of the loop body at least one.
// When the number of iterations is not know beforehand, and you want to validate the condition after the first iteration.

//? Example: Validating User Input with a do...while loop (user need to write a valid number)
do {
  var user = prompt("Enter a number here : ");
  user = Number.parseInt(user);
  if (user > 0) {
    console.log("The number is valid number!");
  } else {
    console.log("The number is not-valid");
  }
} while (isNan(user));

//* ===============================
//*           For Loop
//* ===============================

//? For loop : A for loop in JavaScript is a control flow statement that allows you to respectively execute a block of code a specified number of times. It's particularly useful whe you know the exact number of iterations needed.

// example: for (initialization; condition; iteration) {
//   // Code to be executed in each iteration
// }

// Initialization: Executed before the loop starts. Often used to initialize a counter variable.
// Condition: Evaluated before each iteration. If false, the loop terminates.
// Iteration: Executed after each iteration. Typically used to update the loop control variable.

//* Simple for loop to count from 1 to 10
console.log("Printing 1 to 10 using for loop!");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//? Key Point:
// The initialization, condition, and iteration expression are optional. You can omit any or all of them, but you must include the semicolons.
//* The code for (;;) {} represents an infinite loop in JavaScript. This construct is commonly used whe you want a loop to run indefinitely or until a break statement is encountered within the loop. It's equivalent to while (true) {].

//* use case: Game Development:
//? In game development, an infinite loop can be used to continuously update and render game frames until a specific condition (e.g., game over) is met.

// for (;;) {
//   // Update game logic and render frames
// }

//? Common Use Cases:
// When you know the exact number of iterations needed.
// Iterating over elements in an array.
// Performing a task a specific number of times.

//! Practice :
//! Calculate the sum of numbers rom 1 to 10 using a for loop 🧑‍💻
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum = sum + i;
}
console.log(sum);

//! Generating a Times Table: 🧑‍💻
//! Example 3: Generating a times table of 5 with a for loop.
let multiplier = 5;
for (let i = 1; i <= 10; i++) {
  console.log(multiplier, " x ", i, " = ", i * multiplier);
}

//! Homework ➡️ JavaScript program to print table for give number (8,9,12,15) using for loo?
//? Get the any number from the user
var getNum = prompt("Enter the number here : ");
getNum = Number.parseInt(getNum);
//? Generating the table
for (let i = 1; i <= 10; i++) {
  console.log(getNum, " x ", i, " = ", i * getNum);
}

//? More Practice
//! 1. Program to check if a year is a leap year or not 🧑‍💻
let year = prompt("Enter a year :");
year = Number.parseInt(year);
if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
  console.log("The year is leap year!");
} else {
  console.log("The year is not leap year!");
}

//! 2. Write a program to print the pattern.🧑‍💻
/*
 *
 * *
 * * *
 * * * *
 * * * * *
 */
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write("* "); //? This not append a new line character after the each character
    // console.log("* "); //? This will automatically adds the new line character after the each character
  }
  console.log();
}
