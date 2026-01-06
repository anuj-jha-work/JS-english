//var let const
//global scope
// let a=100;
//     const b=200
//     //local scope
// if(true){
//     let a=10;
//     const b=20
//     var c=30
// }
// console.log(a);
// console.log(b);


//nested scope
// if(true){
//     const username="hitesh"
//     if(username=="hitesh"){
//         const website="example.com"
//         console.log(username+website)
//     }
//     //outside nested block
//    //console.log(website)
// }
//outside block
//console.log(username)

//not resulted in error due to hoisting
console.log(addone(5));
function addone(num){
    return num+1;
}
// resulted in error: Cannot access 'addtwo' before initialization
console.log(addtwo(5));
const addtwo=function(num){
    return num+2;
}