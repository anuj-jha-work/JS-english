// const newArray = [1, 2, 3, 4, 5];
// console.log(newArray);
// // Output: [1, 2, 3, 4, 5]

const NewArray2= Array(6, 7, 8, 9, 10);
// console.log(NewArray2);
// // Output: [6, 7, 8, 9, 10]
NewArray2.push(11);
NewArray2.push(12);

NewArray2.pop();

NewArray2.unshift(0);

NewArray2.shift();

//join creates a string from an array
const newArray3=NewArray2.join()
// console.log(NewArray2)
// console.log(newArray3)
// console.log( typeof newArray3)

//splice vs Slice
console.log("A",NewArray2)
const myn1=NewArray2.slice(0,4)
console.log(myn1);
//Splice changes the original array and returns the removed elements
console.log("B",NewArray2)
const myn2=NewArray2.splice(0,4)
console.log(myn2)
console.log("C",NewArray2)