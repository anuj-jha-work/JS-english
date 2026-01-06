//IIFE Imediately Invoked Function Expression
function chai (){
    console.log("IIFE Executed");
};
chai();


//or
(function chai (){
    console.log("IIFE Executed");
})();


//or with arrow function
(()=>{
    console.log("IIFE Executed with arrow function");
})();

//or with parameter	
((name)=>{
    console.log(`IIFE Executed ${name}`);
})("Anuj");