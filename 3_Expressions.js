//* ==========================================
//*     EXPRESSIONS AND OPERATORS Section
//* ==========================================

//? 1st we will see what is expression means and also what is operand an operator in any expression?

//* Types of Operators in JavaScript
// Assignment operators
// Arithmetic operators
// In arithmetic we increment and decrement operator
// Comparison operators
// Logical operators
// String operators
// Conditional (ternary) operators

//* =================================
//*     1: Assignment operators
//* =================================

//? Assignment operators in programming are symbols used to assign values to variables. They take the value on the right side of the operator and assign it to the variable on the left side.

// Example
let x = 5;
let myName = "Devendra";

//* =================================
//*     2: Arithmetic operators
//* =================================

//? Arithmetic operators in programming perform basic mathematical operations on variables or values. They include addition, subtraction, multiplication, division, and modulus.

//? Addition (+): Adds two values or variables.
// Example:
let a = 10;
let b = 25;
let sum = a + b;
console.log(sum); // Output: 35

//? Subtraction (-): Subtracts the right operand from the left operand.
// Example:
let c = 20;
let d = 16;
let expression = c - d;
console.log(expression); // Output: 4

//? Multiplication (*): Multiplies two values or variables.
// Example:
let e = 5;
let f = 4;
let multiply = e * f;
console.log(multiply); // Output: 20

//? Division (/): Divides the left operand by the right operand.
// Example:
let g = 15;
let h = 3;
let division = g / h;
console.log(division); // Output: 5

//? Modulus (%): Returns the remainder when the left operand is divided by the right operand.
// Example:
let i = 17;
let j = 3;
let modulus = i % j;
console.log(modulus); // Output: 2

//* ===================================
//*          Challenge Time
//* ===================================

//! What will be the output
let result = "Hello" / 2;
console.log(result); // Output: NaN

//* ===================================
//*        InterView Question
//* ===================================

let expr = 0.1 + 0.2;
console.log(expr); // Output: 0.30000000000000004 and this will the number
console.log(expr.toFixed(1)); // Output: 0.3 and now this will string
//? When working with floating-point numbers in JavaScript, consider using methods like toFixed() when precise decimal representation is necessary.

//* =================================
//*     3: String operators
//* =================================

//? There are a few ways to concatenate strings in JavaScript. The most common way is to use the + operator. Few example, to concatenate the strings "Hello" and  "World", you would use the following code:
var str1 = "Hello";
var str2 = "World";
var concatenateStr = str1 + str2;
console.log(concatenateStr);

//* ===================================
//*        InterView Question
//* ===================================

console.log("5" + 3); // Output: 53

//* =================================
//*     4: Comparison operators
//* =================================

//? Comparison operators in JavaScript are used to compare values and return a boolean result (true or false).

//? Equal (==):
// Checks if two values are equal, performing type coercion if necessary.
console.log(5 == 5); // Output: true

//? Strict Equal (===):
// Checks if two values are equal without performing type coercion.
console.log(5 === "5"); // Output: false
console.log(5 === 5); // Output: true

//? Not Equal (!=):
// Checks if two values are not equal, performing type coercion if necessary.
console.log(5 != "5"); // Output: false
console.log(5 !== "5"); // Output: true

//? Greater than (>):
// Checks if the value on the left is greater than the value on the right.
// Example: 10 > 5 evaluates to true.
console.log(5 > 20); // Output: false

//? less than (<):
// Checks if the value on the left is less than the value on the right.
// Example: 5 < 10 evaluates to true.
console.log(5 < 10); // Output: true

//? Greater than or Equal to (>=):
// Checks if the value on the left is greater than or equal to the value on the right.
// Example: 10 >= 10 evaluates to true.
console.log(10 <= 10); // Output: true

//? Less then or Equal to (<=):
// Checks if the value on the left is less than or equal to the value on the right.
// Example: 5 <= 10 evaluates to true.
console.log(5 >= 10); // Output: false

//* ===================================
//*        InterView Question
//* ===================================

//! What is the difference between == and === operators in JavaScript?
//? The equality == operator is a comparison operator that compares two values and returns true if they are equal. The strict equality === operator is also a comparison operator, but it compares two values and returns true only if they are equal and of the same type.
