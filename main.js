// Task 10: Collatz Sequence (Simplified)
// set variable for a number. Repeat the following:
// - If the number is even: divide it by 2.
// - If it's odd: multiply by 3 and add 1.
// - Stop when the number becomes 1.
// Print each step.

let number = 6; // INPUT

// (keep the "// INPUT" comments - the tests use them to try other values)

// write your code below this line

while (number != 1) {
    if (number % 2 == 0) {
        number = Math.floor(number / 2)

    } else {
        number = number * 3 + 1
    }
    console.log(number)
}