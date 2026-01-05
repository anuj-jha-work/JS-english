//************
//Stack(primitive) Vs heap(non primitive)
//Stack me copy di jati hai not orignal
//heap me refrence dia jata hai so changes made in orignal

//Stack Memory
let myyoutubename="anuj_jha05";
let my_anothername=myyoutubename;
my_anothername="chaiAurCode";
console.log(myyoutubename);
console.log(my_anothername);

//heap memory
let userone={
    email:"hitesh@google.com",
    upi:"hitesh@oksbi"
}
usertwo=userone;
usertwo.email="hitesh@gmail.com";
console.log(usertwo.email);
console.log(userone.email);