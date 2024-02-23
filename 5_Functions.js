//* ===============================
//*     Function in JavaScript
//* ===============================
//? In JavaScript, a function is a block of reusable code that performs a specific task or set of tasks. Functions are used to organize code into modular and manageable pieces, promote code reuse, and make programs more readable.

// 3 students at a time wants to find the sum of two numbers
//? Without function you need to define every time many of the variable and perform the sum of this two number

// 1 Student
var n1 = 2,
  n2 = 2;
var sum = n1 + n2;
console.log(sum);

// 2 Student
var n1 = 5,
  n2 = 45;
var sum = n1 + n2;
console.log(sum);

// 3 Student
var n1 = 8,
  n2 = 4;
var sum = n1 + n2;
console.log(sum);

//? With function you can make code reusable. You create a block of code that performs a specific task and then call
function sumOfNum(num1, num2) {
  return num1 + num2;
}
// Use the function for every 3 students
console.log("The sum of 5 and 8 is " + sumOfNum(5, 8)); // This is for student 1 // Output: 13
console.log("The sum of 10 and 94 is " + sumOfNum(10, 94)); // This is for student 2 // Output: 104
console.log("The sum of 5 and 97 is " + sumOfNum(5, 97)); // This is for student 3 // Output: 102

//* 1. Function Declaration
// function nameFunc() {
//   console.log("Hello, world!"); // This is function body
// }

//* 2. Function Invocation
// nameFunc(); // This is function call

//* 3. Function Parameters
// function nameFunc(parameter1) {
//   console.log("Hello, world!"); // This is function body
// }

//* ===============================
//*     Function Declaration
//* ===============================

//? Declare a function using the function keyword, followed by the function name, parameters (if any), and the function body.
//? This step defined the function and specifies what code should be executed when the function is called.

function nameFunc() {
  console.log("Hello, world!"); // This is function body
}

//* =================================================
//*     Function Invocation (Calling a Function)
//* =================================================

//? After declaring a function, you can invoke or call it by using its name followed by parentheses.
//? If the function has parameters, provide values (arguments) for those parameters inside the parentheses.

//? How to call a function
nameFunc(); // This is function call

//! Practice Time
//! 1. Write a function to find the sum of two numbers.

// Function definition with parameters
function twoNumSum(n1, n2) {
  return n1 + n2;
}

// Function call with arguments
console.log(twoNumSum(10, 20)); // Output: 30

// todo: 1st declare the function & that call it In JavaScript, It's a good practice to declare (define) your functions before you call them. This ensures that the function is available for use when you try to call it.

//* ==============================
//*      Function Parameter
//* ==============================

//? A function parameter is a variable that is listed as a part of a function declaration. It acts as a placeholder for a value that will be provided when the function is called. Parameters allows you to pass information into a function, making it more versatile and reusable.

// Syntax: function functionName(parameter1, parameter2, ...params) {
//   // Function body
//   // Code to be executed when the function is called
// }

//* ==============================
//*      Function Argument
//* ==============================

//? A function argument is a value that you provide when you call a function. Arguments are passed into a function to fill the parameters defined in the function declaration.

//? syntax:
//? functionName(argument1, argument2, ...);

//! Practice Time
//? Let's say we want to greet students with one same line
//! Write a Javascript program that defines a function called greet to welcome individuals. The function should take a name parameter and output the message "Hello [name], Welcome to the our team." call the function twice, once with the arguments "Devendra" and once with the argument "Ram".

function greetingsToEmployee(name) {
  console.log("Hello %s, Welcome to the our team.", name);
}
greetingsToEmployee("Devendra"); // Output: Hello Devendra, Welcome to the our team
greetingsToEmployee("Ram"); // Output: Hello Ram, Welcome to the our team

//! 1. Write a function to find the sum of two numbers with parameters.

// function twoNumSum(n1, n2) {
//   return n1 + n2;
// }

// // Function call with arguments
// console.log(twoNumSum(10, 20)); // Output: 30

//* ==============================
//*      Function expressions
//* ==============================
//? A function expression is a way yo define a function as part of an expression. It can be wither named or anonymous. If it's names, it becomes a named function expression.

var result = function twoNumSum(n1, n2) {
  return n1 + n2;
};

console.log(result(12, 24)); // Output: 36

//* =============================
//*      Anonymous Function
//* =============================
//? An anonymous function is a function without a name. It can be created using a function expression or a function declaration without a specified name.

// Type-1
var add = function (x, y) {
  return x + y;
};
console.log(add(10, 2));

// Type-2
var sub = (a, b) => {
  return a - b;
};
console.log(sub(10, 2));

//* =============================
//*        Return Keyword
//* =============================
//? Return Keyword: In JavaScript, the return statement is used within a function to specify the value that the function should produce or provide back to the code that called it. The return statement stops the execution of a function and sends a value back to the caller.

//? Syntax
// return expression;

//! Example 1: Returning a sum of two number
var add = function (x, y) {
  return x + y;
};
console.log(add(10, 2));

//* ================================================
//*  IIFE - immediately invoked function expression
//* ================================================
//? An IIFE, or Immediately Invoked Function Expression, is a JavaScript function that is defined and executed immediately after its creation. It is a way to create a self-contained block of code that doesn't interfere with the surrounding code and executes immediately.

// Syntax
// (function () {
//   // code to be executed
// })();

// ! Practice Time ( IIFE with Parameters)
(function greetingsToEmployee(name) {
  console.log("Hello %s, Welcome to the our team.", name);
})("Devendra");

//? Interview Questions

//! 1. Question 1: Calculator Function
//! Write a JavaScript function calculator that takes two numbers and an operator as parameters and return the result of the operation. The function should support addition, subtraction, multiplication, and division.
function Calculator(num1, num2, operator) {
  switch (operator) {
    case "+":
      console.log(num1 + num2);
      break;
    case "-":
      console.log(num1 - num2);
      break;
    case "*":
      console.log(num1 * num2);
      break;
    case "/":
      console.log(num1 / num2);
      break;
    default:
      console.log("Enter valid operator");
  }
  return num1, num2;
}
Calculator(5, 3, "*");

//! Reverse a String:
//! Write a function to reverse a given string without using built-in reverse methods.
function reverseString(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}
console.log(reverseString("Dev")); // Output: veD

//! Palindrome Check:
//! Create a function to determine if a given string is a palindrome (reads the same backward as forward).
function checkPalindrome(str) {
  const lowerCaseStr = str.toLowerCase();
  for (let i = 0; i < Math.floor(lowerCaseStr.length); i++) {
    if (lowerCaseStr[i] !== lowerCaseStr[lowerCaseStr.length]) {
      return false;
    } else {
      return true;
    }
  }
}
console.log(checkPalindrome("DaD")); // Output: True
