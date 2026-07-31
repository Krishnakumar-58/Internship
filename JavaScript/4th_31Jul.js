const prompt=require('prompt-sync')();
let a=prompt("enter first number:")
let b=prompt("enter second number:")

console.log("before swapping:")
console.log(a,b)

// let c=a
//     a=b
//     b=c
a=Number(a)
b=Number(b)
a=a+b
b=a-b
a=a-b
console.log("after swapping:")
console.log(a,b)