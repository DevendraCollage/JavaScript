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

const myBestname = "Devendra";
// myBestname = "Dev";
console.log(myBestname); // Output: Error: Assignment to constant variable
