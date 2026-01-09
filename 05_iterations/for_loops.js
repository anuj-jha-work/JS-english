// Example 1: Using break in a for loop with if condition
console.log("Example 1: Break in for loop");
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        console.log("Breaking at i = 5");
        break;
    }
    console.log(i);
}

// Example 2: Break with nested if conditions
console.log("\nExample 2: Nested if with break");
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        if (i > 10) {
            console.log("Breaking at even number > 10:", i);
            break;
        }
        console.log("Even number:", i);
    }
}

// Example 3: Break in while loop with if condition
console.log("\nExample 3: Break in while loop");
let count = 0;
while (count < 100) {
    count += 10;
    if (count >= 50) {
        console.log("Breaking when count reaches:", count);
        break;
    }
    console.log("Count:", count);
}

// Example 4: Break with array iteration
console.log("\nExample 4: Break in array iteration");
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const num of numbers) {
    if (num === 6) {
        console.log("Found 6, breaking");
        break;
    }
    console.log(num);
}