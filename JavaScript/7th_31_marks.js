const prompt=require('prompt-sync')();
 let marks=prompt("enter your marks:")
 marks=Number(marks)
 if(marks>=90)
 {
    console.log("grade A")
 }
 else if(marks>=75)
 {
    console.log("grade B")
 }
 else if(marks>=60)
 {
    console.log("grade C")
 }
 else
 {
    console.log("fail")
 }