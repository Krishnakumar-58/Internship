// Task 2_7: Count how many even numbers are between 1 and N
let N = 30;
let countEven = 0;

for (let i = 1; i <= N; i++) {
  if (i % 2 === 0) {
    countEven++;
  }
}

console.log("Number of even numbers from 1 to", N, "is:", countEven);
