//* =========================================
//*         String in JavaScript
//* =========================================

//? Strings in JavaScript are a fundamental data type that represents a sequence of characters.

// Note:
//? Strings created with single or double quotes works the same.
// There is no difference between the two.

//* String Properties:
//? length: Property that returns the length of the strings (number of characters).

const str = "Hello, world!";
console.log(str.length);
// including space n all

//* =========================================
//*           Escape Character
//* =========================================

//? Escape Character: In JavaScript, the backslash \ is used to escape character. It allows you to include special characters in a strings.

//?     Code	   Result	    Description
//*     \'	        '	        Single quote
//*     \"	        "	        Double quote
//*     \\	        \	        Backslash

let myIntro = "My name is \"Devendra\" and i am a 'React.js' Web Developer";
console.log(myIntro);

//* =========================================
//*         String Search Methods
//* =========================================

//? 2: Strings Search Methods

//? a: indexOf(): The indexOf() method returns the index (position) of the first occurrence of a string in a string, or it returns -1 if the string is not found.
// syntax
// indexOf(searchString)
// indexOf(searchString, position)

let text = "Devendra Parmar";
console.log(text.indexOf("Devendra Parmar")); //* Output: 0
//? The indexOf method is case sensitive.
console.log(text.indexOf("devendra")); //* Output: -1

let textArr = Array.from(text);
console.log(textArr);
const strMap = textArr.map((currElem, index, textArr) => {
  console.log(`${currElem} = index(${index})`);
});

//? b: lastindexOf(): The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:
// syntax
// lastIndexOf(searchString)
// lastIndexOf(searchString, position)

const demoText = "Hello JavaScript, welcome to JavaScript";
let index = demoText.indexOf("JavaScript"); //* This method will give the first index
console.log(index);
let index2 = demoText.lastIndexOf("JavaScript"); //* This method will give the last index of the the string
console.log(index2);
let index3 = demoText.lastIndexOf("JavaScript", 40); //* This method will search the backward if you can specify the index
console.log(index3);

//? c: search(): The search() method searches a string for s string (or a regular expression) and returns the position of the match.
//* Returns the index number where the first match is found. Returns -1 if the match is not found.

// let txt = "Hello JavaScript, welcome to the JavaScript!";
// let result = text.search(/Javascript/i); //* This will ignore the case of the string like mongoDB
// console.log(result);
// console.log(txt.search("JavaScript"));

//* 👉 Important Tips
// The search() method cannot take a second start position argument.
// The indexOf() method cannot take powerful search values (like regular expressions).
// They accept the same arguments (parameters), and return the same value.

//? match() : Returns an array of the matched values or null if no match is found.

// let text2 = "Hello Javascript, welcome to our world best JavaScript course";
// console.log(text2.match("JavaScript"));
// console.log(text2.match("Javascript"));
// TODO: Here the js converts the normal text into regular expression text.match(/JavaScript/); without the g flag
// let results = text2.match(/JavaScript/gi); //* If we will use global flag than this will give the array of the how many time we will use the value
// console.log(results);

//? matchAll(): Returns an iterator of all matches, providing detailed information about each match. Returns an empty iterator if no match is found.

// let text3 = "Hello Javascript, welcome to JavaScript";
// let matchResult = text3.matchAll("JavaScript");
// let matchResult = text3.matchAll("Javascript");

// console.log(text3.matchAll("JavaScript")); //* This method perform operation like give below this
// console.log(text3.matchAll("Javascript")); //* This method perform operation like give below this

// TODO: Here the js converts the normal text into regular expression text.match(/JavaScript/g); also adds the g flag at the end
// console.log(text3.matchAll(/JavaScript/g));

//? This both will be the same return the array and this is the iterator
// console.log(...matchResult);
// for (let item of matchResult) {
//   console.log(item);
// }

//? You can access particular item of the array by using index
// for (let item of matchResult) {
//   console.log(item[0]);
// }

//? includes(): Returns true if the string contain the specified value, and false otherwise.
let txt = "Hello JavaScript, Welcome to JavaScript!";
console.log(txt.includes("Java")); //* Output: true
// console.log(txt.includes(/java/i)); //* Output: TypeError - we cannot use regular expression here

//! Note: includes() is case sensitive. includes() is an ES6 feature.

//? startsWith(): The startsWith() method returns true if a string begins with a specified value. Otherwise it returns false:
let myCollageName = "Darshan University";
console.log(myCollageName.startsWith("Dar")); //* Output: true
console.log(myCollageName.startsWith("shan", 3)); //* Output: true

//? endsWith(): The endsWith() method returns true if a string ed with specified value. Otherwise it returns false:
let myCollageName2 = "Saurashtra University";
console.log(myCollageName.endsWith("sity")); //* Output: true
console.log(myCollageName.endsWith("University")); //* Output: true

//* =========================================
//*         Extracting String Parts:
//* =========================================
//! Extracting String Parts:

//? String.prototype.substr() is is deprecated ❌

//? a: slice() extracts a part of a string and returns the extracted part in a new string
// syntax
// slice(start, end);

// TODO: JavaScript counts positions from zero.
//? First position is 0. Second position is 1.
// let newString = "hi my name is devendra parmar!";
// console.log(newString.slice(4, 9));
// console.log(newString.slice(5)); //* This start with index and will get the length of the string

//? a: substring: Extracts a position of the string based on starting ad ending includes.
//* camelCase is used to separate words, substring is not to be intended as Sub String but as Substring.
// syntax
// substring(indexStart) // index starts with 0
// substring(indexStart, indexEnd)

//* substring() is similar to slice(). The difference is that start and end values less than 0 are treated as 0 in substring().
let newString = "hi my name is devendra parmar!";
console.log(newString.substring(4, 9));

//! Homework
// let course = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = course.substring(0); //* This will print same as string above
// let result = course.substring(1); //* This will print same as string above but subtract first word
// let result = course.substring(-1);
// console.log(result); //* This will print same as string above because negative index can not be support by substring function

//! Similarities
// TODO: In Both the slice() and substring() methods, the end parameter indicates the ending index up to which the extraction occurs, but the character at the end index is excluded from the extracted substring.

//* =========================================
//*           Interview Question
//* =========================================
//! What is the output for the following code?

let myText = "Hello JavaScript, welcome to our world best JavaScript course";
// console.log(myText.slice(1)); //* This print the whole string without the first character
// console.log(myText.replace("H", "")); //* This place the empty string at the character "H" so it removes that character
// console.log(myText.substring(1)); //* This will print same like slice of above
// console.log(myText.replace("JavaScript", "React")); //* This will replace the first occurrence of the string
// console.log(myText.replaceAll("JavaScript", "React")); //* This will replace all the characters of the string

//* =========================================
//*      Extracting String Characters
//* =========================================
//! Extracting String Characters
// There are 3 methods for extracting string character:

//? The charAt(position) Method
//? The charCodeAt(position) Method
//? The at(position) Method
//* Let's see how they work

//? charAt() : The charAt() method returns the characters at a specified index (position) in a string.
// let demoStr = "Hello Devendra, Welcome to the JavaScript Development";
// console.log(demoStr.charAt(5)); //* Output: "" (Empty string)
// console.log(demoStr.charAt(-5)); //* Output: This will not support the negative indexing

//? charCodeAt() : The charCodeAt() method returns the code of the character at a specified index in a string. The method returns a UTF-18 code (an integer between 0 and 65535)
// let demoStr = "Hello Devendra, Welcome to the JavaScript Development";
// console.log(demoStr.charCodeAt(8)); // Output: 118
// and uppercase and lowercase are both different and their ascii code are different

//TODO: ES2022 introduced the string method at():
//? The at() method returns the character at a specified index (position) in a string. The at() method returns the same as charAt():
// let demoStr = "Hello Devendra, Welcome to the JavaScript Development";
// console.log(demoStr.at(8)); // Output: v
// console.log(demoStr.at(-5)); // Output: p
// this method will allow and follow the negative indexing in a string

//TODO: Note
// The at() method is a new addition to JavaScript.
// It allows the use of negative indexes while charAt() do not.
// Now you can use demoStr.at(-2) instead of charAt() do not.

//* =========================================
//*       Replacing String Content:
//* =========================================
//! Replacing String Content:
//? replace(): The replace method is used to replace a specified value with another value.
// const demoStr = "Hello world, Welcome JavaScript Development World!";
// console.log(demoStr.replace(/world/, "Devendra")); // Output: Hello Devendra, Welcome JavaScript Developer World

//? Case-Insensitive Replacement: To perform a case-insensitive replacement, you can use the i flag in the regular expression.
// console.log(demoStr.replace(/world/gi, "Devendra")); // Output: Hello Devendra, Welcome JavaScript Developer Devendra

//* =========================================
//*         Other Useful Methods:
//* =========================================

//! Other Useful Methods:
//? toUpperCase and toLowerCase: Converts the string to uppercase and lowercase.
// const javaScript = "JAVASCRIPT";
// console.log(javaScript.toLowerCase()); // Output: javascript

// const react = "react.js";
// console.log(react.toUpperCase()); // OUtput: REACT.JS

//? trim: Removes whitespace from both ends of the string.
// const myName = "     Devendra Parmar     ";
// console.log(myName);
// console.log(myName.length);
// console.log(myName.trim());
// console.log(myName.length);

//? split(): Splits the string into an array of substrings based on a specified delimiter.
// const fruits = "Apple, Orange, Banana";
// console.log(fruits.split(", ").reverse().join()); //* Join have an default comma seprated

//? repeat(): Repeat the string for the given number of times
// const repl = "Apple";
// console.log(repl.repeat(5));

//* =========================================
//*          Interview Questions
//* =========================================

//! 1. Write a JavaScript function that prints the letters 'a' through 'z' in the consol. You should use a loop to iterate through the letters and prints each one on a new line.

// ? First get the a to z asci code of the letters
console.log("a".charCodeAt());
console.log("z".charCodeAt());

// ? Now iterate the for loop and print the each letter on a new line
for (let i = 97; i <= 122; i++) {
  console.log(String.fromCharCode(i));
}

//! 2. Write a function to count the number of vowels in a string?

const vowelsString = (str) => {
  const countVowels = "aeiou";
  let countNum = 0;
  for (const count of str) {
    if (countVowels.includes(count)) {
      countNum++;
    }
  }
  return countNum;
};
console.log(vowelsString("Devendra Parmar")); // Output: 5

//! 3. Write a function to check if all the vowels presents in a string or not?

const vowelsStr = (str) => {
  const countVowels = "aeiou";
  for (const count of str) {
    if (!countVowels.includes(count)) {
      return false;
    }
  }
  return true;
};
console.log(vowelsStr("Devendra Parmar")); // Output: false

//! 4. Write a JavaScript function to check if the give string is Pangram or not?
//? Pangram string means in that string all the characters from a to z are included in the string that string is known as Pangram string.

const pangramString = (str) => {
  const countVowels = "abcdefghijklmnopqrstuvwxyz";
  for (const iterator of str) {
    if (!countVowels.includes(iterator)) {
      return "This String is Not Pangram!";
    }
  }
  return "This String is Pangram String!";
};
console.log(pangramString("Devendra parmar"));
