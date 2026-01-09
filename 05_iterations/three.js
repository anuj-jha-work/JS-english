// //for of loops
// const colors = ['red', 'green', 'blue', 'yellow'];

// for (const i of colors) {
//   console.log(i);
// }
// const str1 = 'hello welcome to javascript';
// for (const char of str1) {
//   console.log(char);
// }


//for of loops with objects
//objects are not iterable
//they need to be converted into iterable form
// const person = {
//   name: 'John',
//   age: 30,
//   city: 'New York'
// };

// for (const [key,value] of person) {
//    console.log(`${key} : ${person[key]}`);
//  }
//  //iterating over values
//  for (const key of Object.keys(person)) {
//    console.log(`${key} : ${person[key]}`);
//  }


// //map
// const map1 = new Map();
// map1.set('IN', 'India');
// map1.set('US', 'United States');
// map1.set('FR', 'France');

// for (const [key, value] of map1) {
//   console.log(`${key} : ${value}`);
// }

//map is iterable by default