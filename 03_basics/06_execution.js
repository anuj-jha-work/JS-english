let val1 = 10;
let val2 = 5;

function addNum(num1, num2) {
    let total = num1 + num2;
    return total;
}

let result1 = addNum(val1, val2);
let result2 = addNum(10, 2);

console.log(result1); // Output: 15
console.log(result2); // Output: 12
// 1. Global Execution Context
// Everything starts here. When you run a JavaScript file, the engine creates the Global Execution Context.

// The this keyword: In the global context, this is immediately assigned. (In a browser, it points to the window object).

// 2. Memory Creation Phase (Cycle 1)
// Before any code actually runs, JavaScript scans the entire file and allocates memory for variables and functions.

// Variables (val1, val2, etc.): These are initially set to undefined.

// Functions (addNum): The entire function definition (the actual code inside the curly braces) is stored in memory.

// Placeholders: Even if the code hasn't reached that line yet, the names are "hoisted" and reserved with undefined.

// 3. Execution Phase (Cycle 2)
// Now, the engine goes through the code line-by-line to assign values and run functions.

// val1 becomes 10.

// val2 becomes 5.

// When a function like addNum is called, a New Execution Context is created.

// 4. Function Execution (The Mini-Sandbox)
// When addNum is invoked, it opens a "new variable environment" and a "thread of execution." It repeats the same two phases internally:

// Memory Phase: Parameters like num1, num2, and the local variable total are set to undefined.

// Execution Phase: * num1 gets 10 (passed from val1).

// num2 gets 5 (passed from val2).

// total is calculated as 15.

// Return: The value 15 is sent back to the Global Execution Context to be stored in result1.

// Note: Once the function finishes its work and returns a value, its entire "mini-sandbox" (Execution Context) is Deleted to save memory.