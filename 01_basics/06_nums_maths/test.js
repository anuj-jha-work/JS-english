const balance=new Number(100)
console.log(balance)
console.log(balance.toString().length)

console.log(balance.toFixed())
const other_number=123.89637
console.log(other_number.toPrecision(5))

//++++++++++
//Math
//math.random() gives value in 0-1
// so we mult by 10
console.log(Math.random())
console.log((Math.random()*10)+1)
//famous MDn syntax for having num in our range to avoid 0
const min=10
const max=20
console.log(Math.floor((Math.random()*(max-min+1)+min)))