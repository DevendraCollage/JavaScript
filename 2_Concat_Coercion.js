//* ======================================
//*     Data Types Section - Part-2
//* ======================================

//* Concatenation in JavaScript
//? In JavaScript, the + sign is not only used for arithmetic addition but also for string concatenation. When the + operator is used with strings, it concatenates the strings together.
//? It's important to note that if any operand of the + operator is a string, JavaScript will treat that other operands as strings as well, resulting in string concatenation. If both operands are numbers, the + operator performs numeric addition.

const myStr = "Hello" + " " + "World";
console.log(myStr);

//* Type coercion is the automatic conversion of "values" from one data type to another.
//? It is a fundamental part of JavaScript and an be used to make code more readable and efficient.
//? There are two types of coercion in JavaScript: implicit and explicit. Implicit coercion happens automatically, while explicit coercion is done manually by the programmer.
//! It's worth noting that type conversion can lead to unexpected results, so it's essential to be aware of how JavaScript handles these situations.

//* ============================
//*  Tricky Interview Questions
//* ============================
console.log(10 + "20"); // Output: 1020
console.log(9 - "5"); // Output: 4
console.log("Java" + "Script"); // Output: JavaScript
console.log(" " + " "); // Output: (a blank space)
console.log(" " + 0); // Output: 0
console.log("Devendra" - "Parmar"); // Output: NaN
console.log(true + true); // Output: 2
console.log(true + false); // Output: 1
console.log(false + true); // Output: 1
console.log(false - true); // Output: -1
