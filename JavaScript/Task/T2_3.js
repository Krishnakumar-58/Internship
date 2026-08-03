// Task 2_3: Find the sum of even numbers from 1 to N
let N = 20;
let sumEven = 0;

for (let i = 1; i <= N; i++) {
  if (i % 2 === 0) {
    sumEven += i;
  }
}

console.log("Sum of even numbers from 1 to", N, "is:", sumEven);
