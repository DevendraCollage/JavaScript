//* ======================================
//*  Modern JavaScript - EcmaScript 2015
//* ======================================

//* =====================================
//*    LET AND CONST - EcmaScript 2015
//* =====================================

//? let keyword: The let keyword is used to declare variable with bloc scope. variables declared with let are mutable, meaning their values can be reassigned.

let myName = "Devendra";
myName = "Dev";
console.log(myName); // Output: Dev

var myFavName = "Devendra";
myFavName = "Dev";
console.log(myFavName); // Output: Dev

//? Const keyword: The const keyword is used to declare variables with block scope, but once a value is assigned to a const variable, it cannot be reassigned. const variables are immutable.

// const myBestname = "Devendra";
// // myBestname = "Dev";
// console.log(myBestname); // Output: Error: Assignment to constant variable

//? 1st show what var can do
// var Name = "Devendra";

// if (true) {
//   Name = "Dev";
//   console.log(Name); // Output: Dev
// }

// Name = "Devdndra Parmar";
// console.log(Name); // Output: Devendra Parmar

//? 2nd show what let can do
// let myAge = 22;

// if (true) {
//   myAge = 20;
//   console.log(myAge); // Output: 20
// }

// myAge = 30;
// console.log(myAge); // Output: 30

//? 3rd show aht const can do
// const myProgrammingLang = "JavaScript";

// if (true) {
//   myProgrammingLang = "Java";
//   console.log(myProgrammingLang); // Output: Error: Assignment to constant variable
// }

// myProgrammingLang = "TypeScript";
// console.log(myProgrammingLang); // Output: Error: Assignment to constant variable

//* =========================================
//*    TEMPLATE STRINGS - EcmaScript 2015
//* =========================================

//? In ECMAScript 6 (ES6), template strings, also known as template literals, provide a convenient and flexible way to create strings in JavaScript. Template strings are enclosed in backticks (` `) rather than single or double quotes.

let firstName = "Devendra",
  lastName = "Parmar";

// Using template string for string interpolation
console.log(`My Full Name is ${firstName} ${lastName}`);

//? String Interpolation: Template strings support interpolation, allowing you to embed expressions directly within the string. Interpolated expressions are enclosed in ${}

let myFavoriteGame = "Cricket";

// String interpolation with variables
console.log(`My Favorite Game is : ${myFavoriteGame}`);

// Multi-line Strings: Template strings make it easy to create multi-line string without the need for concatenation or escape characters.
let multiLineStr = `
This is a multi-line
string using template literals.
It's much cleaner and easier to read.
`;
console.log(multiLineStr);

//? Expression Evaluation: Template expression can include any valid JavaScript expression.

//! Practice Time
let num = 5;
console.log("5 * " + num + " = " + 5 * num); // Without template strings
console.log(`5 * ${num} = ${5 * num}`); // With Template strings

//? Advantages:
//? Readability: Template strings make the code more readable, especially for complex string construction.

//? Conciseness: They eliminate the need for explicit string concatenation and reduce the use of escape characters.

//? Expression Flexibility: Any JavaScript expression can be embedded within ${}.

//? Multi-line Support: Creating multi-line strings is more straight-forward.

//* =========================================
//*           DEFAULT Parameters
//* =========================================

//? In ECMAScript 6 (ES6), default parameters were introduced, providing a more concise way to handle function parameter defaults. Default parameters allow you to specify default values for function parameters in the function declaration itself. If a parameter is not provided when the function is called, the default value is used.

//? Default function parameters allow named parameters to be initialized with default values if no value or undefined is passed.

//! Write a function to find sum of two numbers? What is during function call user only passed one argument?

// function sumOfTwoNum(n1 = 20, n2 = 10) {
//   return n1 + n2;
// }
// console.log(sumOfTwoNum());

//* =========================================
//*  FAT ARROW FUNCTION (Anonymous Function)
//* =========================================

//? In ECMAScript 6 (ES6), arrow function, also know as fat arrow function or anonymous function, were introduced as a concise way to write anonymous functions.

//! Syntax of the fat arrow function (Anonymous function)
// const functionName = (param1, param2, ...) => {
//     // Function body
//     return result; // Optional
//   };

const sumNum = (a, b) => {
  console.log(`The sum of ${a} + ${b} = ${a + b}`);
};
sumNum(10, 20);

// todo: NOTES

//? 🚀 1: If the function body consists of single expression, the braces {} and the return keyword can be omitted.
const sum = (a, b) => `The sum of ${a} and ${b} is ${a + b}`;
console.log(sum(5, 5));

//? 🚀 2: If there is only one parameter, the parenthesis () around the parameter list can be omitted.
const square = (a) => `The square of ${a} is  ${a * a}`;
console.log(square(5));

//? 🚀 3: If there are no parameters, use an empty set of parenthesis ().
const helloWorld = () => "Hello World";
console.log(helloWorld());
