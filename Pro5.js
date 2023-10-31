// todo: WAP in JavaScript to check whether the given number if palindrome or not.
let num = prompt("Enter The Number : ");
let temp = num;
let rev = 0;
while (num>0){
    rev = rev * 10 + num % 10;
    num = Math.floor(num/10);
}
if (temp==rev){
    console.log("This is a palindrome number!");
}else{
    console.log("This is not an palindrome number");
}
