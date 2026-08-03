// Store 5 student names in an array
const studentNames = ["Aman", "Bhavna", "Chetan", "Diya", "Esha"];

console.log("Student names:", studentNames);
console.log("First student:", studentNames[0]);
console.log("Last student:", studentNames[studentNames.length - 1]);

// Add a new city to an array
const cities = ["Delhi", "Mumbai", "Jaipur", "Lucknow"];
cities.push("Bengaluru");
console.log("adding new city:", cities);

// Remove the last element
cities.pop();
console.log("remove last element:", cities);

// Find the length of an array
console.log("cities array:", cities.length);

// Print all elements using a loop
console.log("All cities:");
for (let i = 0; i < cities.length; i++) {
  console.log(i + 1 + ". " + cities[i]);
}
