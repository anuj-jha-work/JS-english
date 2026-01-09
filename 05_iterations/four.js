// const  languages = {
//     javascript: "JavaScript",       
//     python: "Python",
//     ruby: "Ruby",
//     java: "Java",
//     csharp: "C#"
// }
// for (const key in languages) {
//     console.log(key);
// }
// for (const key in languages) {
//     console.log(languages[key]);
// }
const coding =["js","ruby","py","java","csharp"]
// function printME(lang){
//     console.log(lang)
// }
// coding.forEach(printME)

coding.forEach((val,index,arr) => {
    console.log(val,index,arr)
})
