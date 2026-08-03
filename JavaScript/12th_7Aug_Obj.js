// what is object: objects store data in key value pairs 
let student={
    name:"rahul",
    age:23,
    city:"lucknow"
}
console.log(student)
console.log(student.name)
student.city="delhi";
console.log(student)
//add new property
student.course="Mern";
console.log(student)
// delete property
delete student.age;
console.log(student)