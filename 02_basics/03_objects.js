//singleton object
Object.create


//object literal
const mysym=Symbol("key1");
const user = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    age: 30,
    mysym:"mykey1",
    isAdmin: true,
    email:"hitesh@gmail.com",
    isLogged_in:false,
    lastloginDays: ["Monday", "Friday", "Saturday"]
}
// console.log(user.name);
// console.log(user["name"]);
// //better way to acess properties is using square brackets
// console.log(user["full name"]);
// console.log(user[mysym]);
// console.log(typeof mysym);
user.email="hitesh@yahoo.com";
// Object.freeze(user);
user.email="hitesh@google.com"

// console.log(user);
// here our function does not return anything so it gives undefined
user.greeting = function(){
    console.log("Hello user");
}
console.log(user.greeting());
user.greeting = function(){
    console.log(`Hello user ${this.name}`);
    return "Greeting sent!";  // Add a return value
}
console.log(user.greeting());