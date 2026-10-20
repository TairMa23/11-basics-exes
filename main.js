// Task 8: Detect if a Number Is a Palindrome
// set variables for a 3-digit number and check if it reads the same forward and backward.
// Example: Input: 121 -> Output: Palindrome
//          Input: 123 -> Output: Not a Palindrome

let number = 121; // INPUT

// (keep the "// INPUT" comments - the tests use them to try other values)

// write your code below this line
let number2 = number
res = 0
while (number2 > 0) {
    res *= 10;
    res += number2 % 10
    number2 = Math.floor(number2 / 10);
}
console.log(number === res ? "Palindrome" : "Not a Palindrome");