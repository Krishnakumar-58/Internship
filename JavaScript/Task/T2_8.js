// Task 2_8: Count how many odd numbers are between 1 and N
let N = 30;
let countOdd = 0;

for (let i = 1; i <= N; i++) {
  if (i % 2 !== 0) {
    countOdd++;
  }
}

console.log("Number of odd numbers from 1 to", N, "is:", countOdd);
