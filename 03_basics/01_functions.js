// function sayMyName(){
//     console.log("A");
//     console.log("N");
//     console.log("U");
//     console.log("J");
// }
// //writing only name of fn is refrence to fn
// //writing with () invokes the fn
// sayMyName();

// function addTwoNumbers(number1, number2){
//     return (number1 + number2);
// }
// const result=addTwoNumbers(3, 7);
// console.log("the result is:",result);


// new function with condition basics
function userlogedin(username){
if(username===undefined){
    console.log("please enter username");
    return;
}
return `${username} is logged in`;
}
console.log(userlogedin());
console.log(userlogedin("Anuj"));