// Task 9: Multiplication Table for a Number
// set variable for a number between 1 and 12. Print its multiplication table (1-10).
// Example: Input: 4 -> Output:
// 4 x 1 = 4
// 4 x 2 = 8
// ...
// 4 x 10 = 40

let number = 4; // INPUT

// (keep the "// INPUT" comments - the tests use them to try other values)
let mul = 0
// write your code below this line
for (let i = 1; i <= 10; i++) {
    mul = number * i 
    console.log(`${number} x ${i} = ${number * (i)}`)
    
}
