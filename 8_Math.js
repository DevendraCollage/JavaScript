//* =========================================
//*        1.Math Object in JavaScript
//* =========================================

//* Math: The Math namespace object contains static properties and methods for mathematical constants and functions.
//* Math works with the Number type. It doesn't work with BigInt.

//? 1: Constants
//* Math.PI : Represents the mathematical constants PI (π).
// const piValue = Math.PI;
// console.log(piValue);

//* =========================================
//*           2.Basic Operations
//* =========================================

//? Math.abs(): The Math.abs() static method returns the absolute value of a number.
// or in simple, how far the number is from 0. It will be always positive.
// console.log(Math.abs(-354)); // Output: 354
// console.log(Math.abs(154)); // Output: 154

//? Math.round(x): Rounds a number to the nearest integer.
// const roundedValue = Math.round(45.88);
// const roundedValue = Math.round(45.12);
// console.log(roundedValue);

//? Math.ceil(x): Returns the value of x rounded up to its nearest higher integer.
// const ceilValue = Math.ceil(45.01);
// console.log(ceilValue); // Output: 46

//? Math.floor(x): Returns the value of x rounded to its nearest lower integer.
// const floorValue = Math.floor(45.91);
// console.log(floorValue); // Output: 45
