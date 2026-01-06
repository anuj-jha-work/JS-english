//rest opoerator is used when we dont know how many arguments will be passed to a function
// function finalCartValue(...num1){
//     return num1;
// }
// const result = finalCartValue(10,20,30,40,50);
// console.log(result);


//function me val1,val2 to inital values lelelnga and rest operator se bache hue values lega
// function finalCartValue(val1,val2,...num1){
//     return num1;
// }
// const result = finalCartValue(10,20,30,40,50);
// console.log(result);


//passing objects to function
const user={
    username:"Anuj",
    email:"anuj@example.com",
    price:5000
}
function handleObject(anyObject){
    console.log(`The username is ${anyObject.username} and email is ${anyObject.email}`);
}
 handleObject(user);
handleObject({
    username:"Abhishek Prince",
    email:"abhishek@example.com",
    price:7000
})