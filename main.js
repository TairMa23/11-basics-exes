// Task 6: Reverse a 4-Digit Number
// set variable for a 4-digit number and print its digits in reverse.
// Example: Input: 1234 -> Output: 4321
// Use only division/modulus - no string methods.

let number = 1234; // INPUT

// (keep the "// INPUT" comments - the tests use them to try other values)

// write your code below this line
res = 0
while (number>0) {
res*=10;
 res += number %10
  number = Math.floor(number / 10);
}
console.log(res);