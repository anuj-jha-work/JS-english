//falsy values: false, 0,-0, "", null, undefined, NaN
//truthy values: everything else
//"0",'false',[],{},function(){},42,-42,3.14,-3.14,Infinity,-Infinity

// const emptyobject = {};
// if(Object.keys(emptyobject).length===0){
//     console.log("emptyobject is truthy");
// } else {
//     console.log("emptyobject is falsy");
// }

//Nullish coalescing operator (??)
// let username = "Anuj";
// let defaultname = "Guest User";
// let name = username ?? defaultname;
// let value = null ?? 10;
// console.log(value); // Output: 10
// console.log(name); // Output: Anuj
// //it only checks for null or undefined, not other falsy values like "", 0, false



//ternary operator
let age = 2;
let canVote = (age >= 18) ? "Yes, can vote" : "No, cannot vote";
console.log(canVote); // Output: Yes, can vote