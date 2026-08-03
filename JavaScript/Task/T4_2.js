// Find the sum of all numbers in an array
const numbers = [12, 8, 25, 6, 31, 14, 7];

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log("Sum of all numbers:", sum);

// Find the largest number
let largest = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > largest) {
    largest = numbers[i];
  }
}
console.log("Largest number:", largest);

// Count even numbers
let evenCount = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenCount++;
  }
}
console.log("Even numbers count:", evenCount);

// Reverse an array using a loop
const reversedNumbers = [];
for (let i = numbers.length - 1; i >= 0; i--) {
  reversedNumbers.push(numbers[i]);
}
console.log("Reversed array:", reversedNumbers);
