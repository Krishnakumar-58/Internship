// Array : array used to store multiple value in single variable.
let fruits = ["apple","banana","mango"]
console.log(fruits)
// access elements
console.log(fruits[0])
// update element
fruits[1]="orange"
console.log(fruits)
// common array methods
let numbers = [10,20,30]
numbers.push(40)  //add at end
numbers.push(50)
numbers.pop()  //remove last
numbers.unshift(5)
numbers.unshift(0) //add at start
numbers.shift() //remove first
console.log(numbers)

// loop through array
let students=["rahul","aman","preeti"]
for(let i=0; i<students.length;i++)
{
    console.log(students[i])
}
//for loop
let colors=["red","blue","green"]
for(let color of colors)
{
    console.log(color)
}