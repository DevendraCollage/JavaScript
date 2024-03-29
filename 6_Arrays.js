//* =====================================
//*         ARRAYS IN JAVASCRIPT
//* =====================================

//! Iterable - object where you can use the for-of loop
//! Array-like object - Any object with length property and use indexes to access items.
//! Arrays as Objects: Arrays in JavaSCript are a specific type of object that has numeric keys (indices) and a length property. The indices are automatically maintained, and the length property is automatically updates when you add or remove elements from the array.
//! typeof Operator: The typeof operator in JavaScript returns "object" for both arrays and regular objects.

//* JavaScript Array is a data structure that allows you to store and organize multiple values within a single variable. It is a versatile and dynamic object. It can hold various data types, including numbers, strings, objects, and even other arrays. Arrays in JavaScript are zero-indexed i.e., the first element is accessed with an index 0, the second element with an index of 1, and so forth.

//* =====================================
//*          Creating Arrays:
//* =====================================

//? Arrays in JavaScript can be created using the Array constructor or with array literals (square brackets []).

let arr = new Array("Java", "Python", "React");
console.log(arr);
console.log(typeof arr); // Output: object

//? Using array literal
// let fruits = ["Apple", "Orange", "Watermelon"];
// console.log(fruits);
// console.log(typeof fruits); // Output: object

//? We can also create an empty array
let demoArr = [];
console.log(demoArr);
console.log(typeof demoArr); // Output: object

//* =====================================
//*         Accessing Elements:
//* =====================================
//? 👉 Accessing Elements: Array elements are accessed using zero-based indices.
// let fruits = ["Apple", "Orange", "Watermelon"];
// console.log(fruits[2]); // Output: Watermelon
// console.log(fruits["Apple"]); // Output : undefined - we can not access elements like this

//* =====================================
//*         Modifying Elements:
//* =====================================
//? 👉 Modifying Elements: You can modify array elements by assigning new values ot specific indices.
let proLang = ["Java", "JS", "HTML", "CSS", "Python"];
proLang[1] = "JavaScript"; // Now this can be modify the second elements of the array
console.log(proLang);

//* ============================================
//*   Array Traversal / Iterating Over Arrays
//* ============================================
//? 👉 Array Traversal /  Iterating Over Arrays

let numArr = [10, 20, 30, 40, 50];

//? 1: for of loop, also known as iterable
//* for...of Loop: The for...of loop is used to iterate over the values of an iterable object, such as arrays, string, or other iterable objects.
for (const itr of numArr) {
  console.log(itr);
}

//? 2. for in (index) loop
//* for...in Loop: The for...in loop is used to iterate over the properties (including indices) of an object.
for (const itr in numArr) {
  console.log(itr);
}

//? 3. forEach Method - This will only return and data of the array
//* The arr.forEach() method calls the provided function once for each element of the array. The provided function may perform any kind of operation on the elements of the given array.
numArr.forEach((currElem, index, numArr) => {
  console.log(`${currElem} ${index}`); // This will print current element with their index
  console.log(numArr); // This will print the whole array
});

//? 4. map function - This will return a new array
//* map() creates a new array from calling a function for every array element. map() does not change the original array.
numArr.map((currElem, index, numArr) => {
  console.log(`${currElem} ${index}`); // This will print current element with their index
  console.log(numArr); // This will print the whole array
});

// todo: Practice Time
//! Write a program to Multiply each elements with 2
// const numbers = [1, 2, 3, 4, 5];

//? 1. map - Performs an action on each element
// const newArr = numbers.map((currElem, index, numbers) => {
//   return `${currElem * 2}`;
// });
// console.log(newArr);

//? 2. forEach - Perform an action on each element
// numbers.forEach((currElem, index, numbers) => {
//   console.log(currElem * 2);
// });

//* Key Differences
//! Return Value:
//? forEach : It doesn't return a value. The forEach method is used for iterating over the elements of an array and performing a side effect, such as modifying the array or performing a task for each element.

//? map: It return a new array containing the results of applying a function to each element in the original array. The original array remains unchanged.

//! Chaining:
//? forEach: It doesn't return a value, so it be directly chained with other array methods.

//? map : Since it returns a new array, you can chain other array methods after using map.

//* Use Case:
//? forEach: Use when you want to iterate over the array elements and perform an action on each element, but you don't need a new array.

//? map: Used whe you want to create a new array a new array based on the transformation of each elements in the original array.

//* ============================================================================
//*     How to Insert, Add, Replace and Delete Elements in Array (CRUD) - p1
//* ============================================================================

//? 👉 How to Insert, Add, Replace, and Delete Elements in Array (CRUD)

//* This is my array to perform all the CRUD operation on this array
// let fruits = ["Apple", "Mango", "Watermelon", "Pineapple", "Orange"];

//? 1: push(): Method that adds one or more elements to the end of an array.
// console.log(fruits); // Without push
// fruits.push("Grapes"); // And we will print this will return the new size of array
// console.log(fruits); // With push

//? 2. pop(): Method that removes the last element from the an array.
// console.log(fruits); // Without pop
// fruits.pop(); // This will return an element that will be remove from the array
// console.log(fruits); // Without pop

//? 3. unshift(): Method that adds one more more elements to the beginning of the array
// console.log(fruits); // Without unshift
// fruits.unshift("Banana");
// console.log(fruits); // With unshift

//? 4. shift(): Method that removes the first elements from an array.
// console.log(fruits); // Without shift
// fruits.shift();
// console.log(fruits); // With shift

//* ==========================================================================
//*      what if, we want to add or remove anywhere in an elements - p2
//* ==========================================================================

//? The splice() method of Array instance changes the contents of an array by removing existing elements and/or adding new elements in place

//* syntax
//? splice(start, deleteCount, item1, item2, /* …, */ itemN)
let fruitsArr = ["Apple", "Orange", "Mango"];
fruitsArr.splice(1, 2, "Grapes");
console.log(fruitsArr);

//! What is you want to add the element at the end
// fruitsArr.splice(-1, 0, "Grapes");
// fruitsArr.splice(1, 0, "Grapes");
// console.log(fruitsArr);

//* =========================================
//*         Searching in an Array
//* =========================================
//? 👉 Searching and Filter in an Array

//? For Search we have - indexOf, lastIndexOf & includes
const numberArr = [1, 2, 3, 4, 5];

//? 1. indexof Method: The indexOf method returns the first index at which a give element can be found in the array, or -1 if it is not present.
// syntax
// indexOf(searchElement);
// indexOf(searchElement, fromIndex);
console.log(numberArr.indexOf(5)); // Output: 5

//? 2. lastIndexOf Method: The lastIndexOf() method of Array instances returns the last index at which a give element can be found in the array, or -1 if it is not present. The array is searched backwards, staring at fromIndex.
// syntax
// lastIndexOf(searchElement);
// lastIndexOf(searchElement, fromIndex);
console.log(numberArr.lastIndexOf(3)); // Output: 2
// console.log(numberArr.lastIndexOf(1, 1));

//? 3. The includes method checks whether an array includes a certain element, returning true or false.
console.log(numberArr.includes(1)); // Output: False

// TODO: Challenge time
//? 1. Add Dec at the end of an array?
// const month = ["Jan", "March", "April", "June", "July"];
// month.push("Dec");
// console.log(month);

//? 2. What is the return value of splice method?
console.log(numberArr.splice(1, 3)); // When used to add elements, the splice method returns an empty array ([]).

//? 3. Update March to Mar (update)?
// const month2 = ["Jan", "Mar", "April", "June", "July"];
// month2.splice(1, 1, "March");
// console.log(month2);

//? 4. Delete June from an Array?
// const months = ["Jan", "March", "April", "June", "July"];
// months.splice(3, 1);
// console.log(months);

//* =========================================
//*          Filter in an Array
//* =========================================
//? Search + Filter
const numAll = [1, 2, 3, 4, 5, 6, 4, 5, 1, 4, 8, 9];

//? 1. find Method: The find method is used to find the first element in an array that satisfies a provided testing function. It returns the first matching element or undefined if no element is found.

// const eleGreaterFive = numAll.find((currElem) => {
//   return currElem > 5;
// });
// console.log(eleGreaterFive);

//? 2. findIndex Method: The findIndex() method of TypeArray instances returns the index of the first element in a types array that satisfies the provided function. If no elements satisfy the testing function, -1 is returned.

// const eleGreaterFive = numAll.findIndex((currElem) => {
//   return currElem > 2;
// });
// console.log(eleGreaterFive);

//* 3: filter Method: The filter method creates a new array with all elements that pass the test implemented by the provided function.
// syntax:
//? filter(callbackFn)
//? filter(callbackFn, thisArg)

// const numbersAll = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const result = numbersAll.filter((currElem) => {
//   return currElem > 2;
// });
// console.log(result);

// UseCase: In E-commerce website when we want to Remove ro delete any product from addToCart page.
//! Ex. le'ts say user wants to delete value 6 and remaining value will be displayed to the console.

const num = [6, 2, 6, 4, 5, 6, 7, 8, 6];

// TODO: This function is used to find the elements from the array that will equals to 6
let indexOfSix = num.filter((currElem) => {
  return currElem !== 6;
});
console.log(indexOfSix);

// TODO: Practice Time
//? Question: Given an array of products where each product has a name and a price, write a function that uses the filter method to return an array containing only the products with a price less thn or equal to 500.
//! Example 2: Filtering Products by Price
const products = [
  { name: "Laptop", price: 1200 },
  { name: "Phone", price: 800 },
  { name: "Tablet", price: 300 },
  { name: "Smartwatch", price: 150 },
];
// Filter products with a price less than or equal to 500
let filterProducts = products.filter((currElem) => {
  return currElem.price <= 500;
});
console.log(filterProducts);

//! Filter unique values from the given array
const ArrayOfNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 5, 6, 7, 6, 15, 8, 6, 8, 6];
let filterUniqueValue = ArrayOfNumber.filter(
  (currElem, index, ArrayOfNumber) => {
    // console.log(ArrayOfNumber[index]);
    return ArrayOfNumber.indexOf(currElem) === index;
  }
);
console.log(filterUniqueValue); // Type-1
console.log(new Set(ArrayOfNumber)); // Type-2

//* =========================================
//*     How to Sort and Compare an Array
//* =========================================
//? How to Sort and Compare an Array
//? Sorting an Array: The sort method sorts the elements of an array in place and returns the sorted array. By default, it sorts elements as strings.

const fruits = ["Banana", "Mango", "Apple", "Orange"];

// TODO: Sort the above fruits array
fruits.sort();
console.log(fruits);

// const numbers = [4, 3, 1, 2, 7, 6, 4, 5, 8, 5, 4, 2, 3, 9, 7, 5, 6];

// TODO: Soft the above numbers array
// numbers.sort();
// console.log(numbers);

//? compare callback function
// syntax
// const sortedNumbers = numbers.sort((a, b) => a - b);
// if(a>b) return 1  => switch the order
//  if(b>a) return -1  => keep the order

// numbers.sort((a, b) => {
//   if (a > b) {
//     return -1;
//   }
//   if (b > a) {
//     return 1;
//   }
// });
// console.log(numbers);

// //? For Ascending order
// const ascendingOrder = numbers.sort((a, b) => {
//   if (a > b) {
//     return 1;
//   } else if (b > a) {
//     return -1;
//   }
// });
// console.log(ascendingOrder);

// //? For Descending order
// const descendingOrder = numbers.sort((a, b) => {
//   if (a > b) {
//     return -1;
//   } else if (b > a) {
//     return 1;
//   }
// });
// console.log(descendingOrder);

//* =========================================
//*     Very Important Array Methods
//* =========================================

//? Map(), Filter(), Reduce()
// map() creates a new array from calling a function for every array element.
// map() does not execute the function for empty array elements.
// map() does not change the original array.

// Original array of numbers
// const numbers = [1, 2, 3, 4, 5];

//! Using map to square each number and create a new array
const numbers = [1, 2, 3, 4, 5];
const squareArrayElem = numbers.map((currElem, index, numbers) => {
  return currElem * currElem;
});
console.log(squareArrayElem);

//! 1. Using the map method, write a function that takes as array of strings and returns a new array where each string is capitalized.
const words = ["apple", "orange", "banana", "watermelon", "pineapple"];
const capiFruits = words.map((currElem, index, words) => {
  return currElem.toUpperCase();
});
console.log(capiFruits);

//! 2. Using map method, write a function that takes an array of numbers and returns a new array where each number is squared, but only if it's an even number.
const nAll = [1, 2, 3, 4, 5];
const squareEvenNum = nAll.map((currElem, index, nAll) => {
  if (currElem % 2 == 0) {
    return currElem * currElem;
  } else {
    return currElem;
  }
});
console.log(squareEvenNum);

//! 3. using the map method, write a function that takes an array of names and returns a new array where each name is prefixed with "Mr. ".
const name = ["Devendra", "Divin", "Jay", "Paresh", "Prince"];
const appendName = name.map((currElem, index, name) => {
  return "Mr. " + currElem;
});
console.log(appendName);

//! 4. Sum of the array numbers elements
const sumOfNumbers = [152, 245, 200, 10, 85];
const sum = sumOfNumbers.reduce((currElem, nextElem) => {
  return currElem + nextElem;
});
console.log(sum);

//? Reduce method
// The reduce method in JavaScript is used to accumulate or reduce an array to a single value. It iterates over the elements of an array and applies a callback function to each elements, updating an accumulator value with the result. Teh reduce method takes a callback function as its first argument and an optional initial value for the accumulator as the second argument.
// syntax
// array.reduce(function callback(accumulator, currentValue, index, array) {
//   // Your logic here
//   // Return the updated accumulator value
// }, initialValue);

// callback : A function that is called once for each element in the array.
// accumulator : The accumulator result of the previous iterations.
// currentValue : The current elements being processed in the array.
// index (optional) : The index of the current elements being processed.
// array (optional) : The array reduce was called upon.
// initialValue (optional) : An initial value for the accumulator. If not provided, the first element of the array is used as the initial accumulator value.
