// const user={
//     name: "Alice",
//     price: 300,
// greetings: function(){
//     console.log("Hello, " + this.name)
// }
// }

// user.greetings();

// const chai= function(){
//     let username= "Bob";
//     console.log(this.username);
// }

const chai=()=> {
    let username= "Bob";
    console.log(this.username);
}
chai()