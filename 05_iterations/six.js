// // const codingLanguages = ["C++", "Python", "Java", "JavaScript", "Ruby"];

// // const values=codingLanguages.forEach((item)=>{
// //     console.log(item);
// // });
// // console.log(values); 


// // const values=[10, 20, 30, 40, 50];
// // // const Newvalues=values.filter(function(num){
// // //     return num>10
// // // })
// // // // const Newvalues=values.filter((num)=>num>10)
// // // console.log(Newvalues);

// // const Newvalues=[];
// // values.forEach((num)=>{
// //     if(num>10){
// //         Newvalues.push(num);
// //     }
// //     else if(num===10){
// //         Newvalues.push(15);
// //     }
// // })
// // console.log(Newvalues);




// const books=[
//     {title:"Book A", author:"Author X", rating:4.5},
//     {title:"Book B", author:"Author Y", rating:3.8},
//     {title:"Book C", author:"Author Z", rating:4.2},
//     {title:"Book D", author:"Author W", rating:2.9},
//     {title:"Book E", author:"Author V", rating:4.7},
// ]

// const highRatedBooks=[];
// const lowRatedBooks=[];
// const verylowRatedBooks=[];
// books.forEach((bk)=>{
//     if(bk.rating>4.0){
//         highRatedBooks.push(bk);
//     }
//     else if(bk.rating<=4.0 && bk.rating>3.0){
//         lowRatedBooks.push(bk);
//     }
//     else{
// verylowRatedBooks.push(bk);
//     }
// })

// console.log("High Rated Books:",highRatedBooks);
// console.log("Low Rated Books:",lowRatedBooks);
// console.log("Very Low Rated Books:",verylowRatedBooks);


const myNumbers=[5, 12, 8, 20, 3, 15, 7];
const newNumbers=myNumbers
                  .map((num)=> num*10)
                  .map((num)=> num+5)
                  .filter((num)=> num>100)

console.log(newNumbers);