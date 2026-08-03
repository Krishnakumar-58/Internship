// Task 2_9: Check whether a number is an Armstrong number
function isArmstrong(num) {
  let original = num;
  let sum = 0;
  let digits = String(num).length;

  while (num > 0) {
    let rem = num % 10;
    sum += rem ** digits;
    num = Math.floor(num / 10);
  }

  return sum === original;
}

console.log(isArmstrong(153));
console.log(isArmstrong(370));
console.log(isArmstrong(123));
