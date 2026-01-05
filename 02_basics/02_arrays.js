//conacat vs push in arrays
//arrys in js take any data type maybe boolean, number, string, object, function, etc
// it can also take an array inside an array

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

// // Using concat
// let combinedArrConcat = arr1.concat(arr2);
// console.log("Using concat:", combinedArrConcat); // [1, 2, 3, 4, 5, 6]

// // Using push with spread operator
// arr1.push(arr2);
// console.log("Using push:", arr1); // [1, 2, 3, [4, 5, 6]]

// // To achieve similar result with push, we can use spread operator
// const combinedArr=[...arr1,...arr2];
// console.log(combinedArr); 

// const another_array=[1,2,3,[4,5,6],7,[6,7,[8,9,10]]];
// console.log(another_array);
// const real_array=another_array.flat(Infinity);
// console.log(real_array);

// //converting string to array
// console.log(Array.isArray("Hitesh"));
// console.log(Array.from("Hitesh"));

const score1=10;
const score2=20;
const score3=30;

const scores_array=Array.of(score1,score2,score3);
console.log(scores_array);