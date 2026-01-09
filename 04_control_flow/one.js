//if condition
//syntax
// if (condition) {
//   // code to be executed if condition is true
// }   
//example
const score=200;
if(score>100){
    let powerUp = "extra life";
    console.log("You earned a " + powerUp);
    var powerdown="slow motion";
    console.log("You got a " + powerdown);
}
//console.log("You earned a " + powerUp);
console.log("You got a " + powerdown);
//The first console.log will give an error because powerUp is defined with let inside the if block and is not accessible outside of it.
//The second console.log will work because powerdown is defined with var and is function-scoped, making it accessible outside the if block.