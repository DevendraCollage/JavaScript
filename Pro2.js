// todo: WAP in JavaScript to check whether the given number is prime or not.
let num = prompt("Enter The Number Here : ");
let flag = false;
for (let i=2; i<num;i++){
    if (num%i==0){
        flag = true;
        break;
    }else{
        flag = false;
    }
}
if (flag==true){
    console.log("The Number Is Not Prime!");
}else{
    console.log("The Number Is Prime Number!");g
}