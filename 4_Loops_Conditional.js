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
// If the person is 18 years or older, a citizen, and registered to vote, display a message saying they are eligible to vote.
// If the person is younger than 18, not a citizen, or not registered to vote, display a message saying they are not eligible to cote.
// If the person is 18 or older but not a citizen, display a message saying they are not eligible due to citizenship status.
// If the person is 18 or old, a citizen, but not registered to vote, display a message saying they are not eligible due to registration status.
// Extended voting eligibility checker with additional conditions.

// Assume the user's age, citizenship status, and registration status as inputs
// let userAge = 22;
// let isCitizen = true; // Assume true for citizen, false for non-citizen
// let isRegistered = false; // Assume false for not registered, true for registered
//! Check eligibility using is...else statements with multiple conditions.
