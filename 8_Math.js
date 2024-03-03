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

//? Math.trunc(x): Returns the integer value of x:
// const truncValue = Math.trunc(-3.7);
// console.log(truncValue);

//TODO: Math.trunc() and Math.floor() were added to JavaSCript 2015 - ES6.
// const truncValue = Math.trunc(-3.7);
// const floorValue = Math.floor(-3.1);
// console.log(truncValue, floorValue);

//TODO: Notes:
// No matter how many chars are there after decimal, they all will always return only number before the decimal.
// round rounds to the nearest integer.
// floor always rounds down.
// ceil always rounds up.

//* =========================================
//* 3. Exponential and Logarithmic Functions:
//* =========================================

//? Math.pow(x, y): Returns the value of x to the power of y.
// console.log(Math.pow(2, 4)); //* Output: 16
// console.log(2 ** 4); //* Output: 16

//? Math.sqrt(): Math.sqrt(x) returns the square root of x.
// let squareRoot = Math.sqrt(25);
// console.log(squareRoot); //* Output: 5

//? Math.log(x) returns the natural logarithm of x.
// let logResult1 = Math.log(1);
// let logResult2 = Math.log(2);
// console.log(logResult1, logResult2);

//? Math.log2() returns the base 2 logarithm of x.
// let logResultBase1 = Math.log2(1);
// let logResultBase2 = Math.log2(2);
// console.log(logResultBase1, logResultBase2);

//* =========================================
//*           Interview Question
//* =========================================

//! Generate Random number
//? Math.random(): Math.random() returns a random number between 0 (inclusive), and 10 (exclusive).
console.log(Math.floor(Math.random() * 10));
