//************************
//dates
// let mydate=new Date()
// console.log(mydate)
// console.log(mydate.toString())
// console.log(mydate.toDateString())
// console.log(mydate.toLocaleString())
// console.log(typeof mydate);


// let currentdate=new Date(2026,0,5);
// console.log(currentdate)
// console.log(currentdate.toDateString())

let mycreatedDate=new Date("01-05-2026")
 //console.log(mycreatedDate.toDateString())

//  let mytimestamp=Date.now()
//     console.log(mytimestamp)
//     console.log(mycreatedDate.getTime())
//     console.log(Math.floor(mytimestamp/(1000)));
//     console.log(Math.floor(mytimestamp/(1000*60)));
//     console.log(Math.floor(mytimestamp/(1000*60*60)));
//     console.log(Math.floor(mytimestamp/(1000*60*60*24)));
//     console.log(Math.floor(mytimestamp/(1000*60*60*24*365)));


let newdate=new Date()
console.log(newdate.toLocaleString('default',{
    weekday:'long',
    year:'numeric',
    month:'long',
    day:'numeric'
}))