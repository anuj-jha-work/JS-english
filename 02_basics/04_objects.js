//object singleton
const tinderUser = new Object();
//non singleton
const tinderUser2 = {};

//object properties
tinderUser.id = "123abc";
tinderUser.name = "John Doe";
tinderUser.isLoggedIn = false;

const regularUser = {
    email: "hitesh@gmail.com",
    password: "abcd1234",
    fullname: {
        userFullName: {
            firstName: "Hitesh",
            lastName: "Choudhary"
        }
    }
}
// console.log(regularUser);
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userFullName.firstName);
// console.log(regularUser.fullname.userFullName.lastName);

const object1 = {
    1: "a",
    2: "b"
};
const object2 = {
    "3": "c",
    "4": "d"
};
// const object3 = {object1, object2};
// console.log(object3);
//this empty {} because we dont want to change object1 and object2
// const object3 = Object.assign({}, object1, object2);
// console.log(object3);
// //latest method is spread operator
// const object4 = {...object1, ...object2};
// console.log(object4);

const users=[
    {
    id: 1,
    email: "americanexpress@gmail.com",
},
{
    id: 2,
    email: "visa@gmail.com"	
}
]
users[1].email;
console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'))