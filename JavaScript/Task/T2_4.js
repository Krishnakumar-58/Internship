// Task 2_4: Find the sum of odd numbers from 1 to N
let N = 20;
let sumOdd = 0;

for (let i = 1; i <= N; i++) {
  if (i % 2 !== 0) {
    sumOdd += i;
  }
}

console.log("Sum of odd numbers from 1 to", N, "is:", sumOdd);
