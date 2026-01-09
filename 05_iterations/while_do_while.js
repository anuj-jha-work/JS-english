// // ===== WHILE LOOP =====

// // Simple while loop - counting
// let count = 1;
// while (count <= 5) {
//     console.log(`Count: ${count}`);
//     count++;
// }

// // Medium while loop - user input simulation
// let attempts = 0;
// let maxAttempts = 3;
// while (attempts < maxAttempts) {
//     console.log(`Attempt ${attempts + 1}`);
//     attempts++;
// }

// // Medium while loop - break and continue
// let i = 0;
// while (i < 10) {
//     i++;
//     if (i === 3) continue; // skip 3
//     if (i === 7) break;    // exit at 7
//     console.log(`Value: ${i}`);
// }


// // ===== DO WHILE LOOP =====

// // Simple do while loop - counting
// let counter = 1;
// do {
//     console.log(`Counter: ${counter}`);
//     counter++;
// } while (counter <= 5);

// // Simple do while loop - find first even number
// let random = 1;
// do {
//     console.log(`Checking: ${random}`);
//     random += 2;
// } while (random < 10);

// Medium do while loop - password validation simulation
// let password = "";
// let isValid = false;
// do {
//     password = "user123";
//     isValid = password.length >= 6;
//     console.log(`Password valid: ${isValid}`);
// } while (!isValid);

// Medium do while loop - menu selection
let choice = 0;
do {
    choice = Math.floor(Math.random() * 4) + 1;
    console.log(`Menu choice: ${choice}`);
} while (choice !== 3);