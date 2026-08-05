const prompt=require('prompt-sync')();
let name = prompt ("enter your name")
let output=name.split(" ").map(word=>word[0]).join("")
console.log(output)
//split = "jay" "kashyap"
//map(word=>word[0])=get first letter of word join()
//join() andd whole
let msg = "good morning";
console.log(msg.replace("morning","evening"))
let skills = "html,css,js";
console.log(skills.split(",")
)
