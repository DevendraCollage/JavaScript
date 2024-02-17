//* ============================
//*     Data Types Section
//* ============================

//* Data types define the type of values that a variable can hold.

//? Types of Primitive Data types (NNBBSSU)

//? Number: Represents numeric values, including integers and floating-point number
// Example:
var myAge = 22;
console.log(myAge);

//? String: Represents a sequence of characters enclosed in single or double quotes.
// Example:
var myCountry = "India";
console.log(myCountry);

//? Boolean: Represents a logical entity with two values: true or false
// Example:
var isMarried = false;
console.log(isMarried);

//? undefined: Represents the absence of a value or an uninitialized variable.
//? means you have declared a variable but can't define the value to it.
var my_firstName;
console.log(my_firstName);

//? Null: Represents the absence of a value. It is often used to explicitly indicate that a variable or object property has no assigned value.
// Example
var message = null;
console.log(message);

//? BigInt: Represents integers of arbitrary precision (available since ECMAScript 2020).
// Example
const bNumber = 12452178965231475n;
console.log(bNumber);

//? Symbol: Represents a unique and immutable data type, often used to create unique identifiers.
// Example
const mySymbol = Symbol("Hello");
console.log(mySymbol);

//! ======================================
//! Data Types related interview question
//! ======================================

//? 1. What is the difference between null and undefined and undefined in JavaScript?

// null: Imagine an Empty box
//* Explanation: Think of a variable as a box. When we say a box has null inside, it's like having an empty box. The box exists, but there's nothing valuable or meaningful inside it.

//? Example: You have toy box, but if it's null, it means there are no toys inside. It's not that the box is broken; it just doesn't have anything interesting in it right now.

// undefined: Imagine a Box that wasn't opened yet
//* Explanation: Now, if we talk about undefined, it's like having a box that you haven't opened yet. You know the box is there, but you haven't put anything inside or looked to see what's in it.

// Putting it together
// Summary: So, null is like having an empty box on purpose, and undefined is like having a box you haven't opened yet. Both tell us that there's nothing meaningful or known inside, but they imply different reasons why.

//? 2. What is the purpose of typeof operator in JavaScript?

var myName = "Devendra";
console.log(myName);
console.log(typeof myName);

//? 3. What is the result of 'typeof null' in JavaScript?
var message = null;
console.log(message);
console.log(typeof message); // Outputs: object

//? 4. What are the primitives data types in JavaScript?
// N (Number), N (Null), B (BigInt), B (Boolean), S (String), S (Symbol), U (Undefined)

//? 5. Convert a string to a number?
// We just need to add the '+' sign before the string
// Example:
var myFavNum = "19";
console.log(typeof myFavNum); // Output: String
console.log(typeof +myFavNum); // Output: Number
console.log(typeof Number(myFavNum)); // Output: Number

//? 6. Convert a number to a string?
// We just need to add an empty string after the number
// Example
let myFavNum2 = 10;
console.log(typeof (myFavNum2 + "")); // Output: String
console.log(typeof String(myFavNum2)); // Output: String

//? 7. Explain the concept of truthy and falsy values in JavaScript. Provide examples?
//* In JavaScript, values are either considered "truthy" or "falsy" when evaluated in a boolean context.

//? Truthy values are treated as true whn used in conditions. Examples include:
// -> true
// -> Any non-empty string ("Devendra")
// -> Any non-zero number (10)
// -> Arrays and objects, even it they're not empty

//? Falsy values are treated as false in boolean contexts. Examples include:
// -> false
// -> 0 (zero)
// -> '' (an empty string)
// -> null
// -> undefined
// -> NaN (Not a Number)

//? 8. To check if a not-empty string in truthy or falsy in JavaScript, we can directly use if statement.
var myName = "Devendra";
if (myName) {
  console.log("This is a truthy value!");
} else {
  console.log("This is a falsy value!");
}

//* ==========  Data Types Section End ==========
