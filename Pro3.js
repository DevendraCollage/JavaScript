// todo: WAP in JavaScript to find the factorial of given number!
let num = prompt("Enter The Number Here : ");
num = Number.parseInt(num);
let fact = 1;
for (let i = 0; i < num; i++) {
    fact = fact * (i+1);
}
console.log("The Factorial Of Given Number Is :",fact);