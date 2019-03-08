// Normal function(es5):

function demo(x){
    console.log(x) //80 
}
demo(80);
console.log('good night') //good night


// Normal annonimas function(es5):
var a = function(x){
    return x;
}
console.log(a(10)); //10



// Arrow functions(es6):
// ========================:

//(0) arrow function structure
const funName = (parametar) => {
    //body Here
    return parametar;
}
console.log(funName("argument Here"));


// (i)
const print = () =>{
    console.log("Hellow world") //Hello world
}
print();


//(ii)
const sum = (name) =>{
    console.log("hello world",name) //hello world sumon
}
sum("sumon");


//(iii)
const sultan = (a,b) =>{
    return a*b;
}
console.log(sultan(3,6)); //18


//(iv) if return 1 line then, we can use that easily (iii == iv) 
const sk = (a,b) =>a*b;
console.log(sk(3,6)); //18


console.log("we alredy finish our all ARROW function")
