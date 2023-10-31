// todo: WAP in JavaScript to print the Fibonacci Series of a number.
let num = prompt("Enter The Number Here : ");
num = Number.parseInt(num);
let first = 0;
let second = 1;
let nextTerm;
for (let i = 1; i <= num; i++) {
    console.log(first);
    nextTerm = first + second;
    first = second;
    second = nextTerm;
}