// todo: WAP in JavaScript to make simple calculator using popup box.
let num1 = prompt("Enter The Number 1 Here : ");
num1 = Number.parseInt(num1); 
let num2 = prompt("Enter The Number 2 Here : ");
num2 = Number.parseInt(num2);
let choice = prompt("Enter The Choice Between the +,-,*,/ Here : ");
switch (choice){
    case '+':
        console.log("The Sum of",num1,"+",num2,"=",num1+num2);
        break;
    case '-':
        console.log("The Sum of",num1,"-",num2,"=",num1-num2);
        break;   
    case '*':
        console.log("The Sum of",num1,"*",num2,"=",num1*num2);
        break;         
    case '/':
        console.log("The Sum of",num1,"/",num2,"=",num1/num2);
        break;        
}