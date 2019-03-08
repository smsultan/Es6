//Default parameter , Rest & Spread Operator:

//Default Parameter:

//(i) when use one Argument:
let sum = (a, b) => a+b;
console.log(sum(10)); //NaN  //cause parameter (2) but argument (1)

//ii
let sqr = (a, b=5) => a*b;
console.log(sqr(6)); //30

//(iii)
let sqr = (a, b=a) => a*b;
console.log(sqr(8)); //64

//(iv)
let sqr = (a=2, b=a) => a*b;
console.log(sqr()); //4

//(v)
let sqr = (a=3, b=a) => a*b;
console.log(sqr(9,8)); //72



// Rest Operator:

//(i)
function sum(...num){     //here num turn to array 
    console.log(num);   //[1,23,4,6,7], []
}
sum(1,23,4,6,7); //Here I didn't pass Array but num get Array
sum();

// (ii)
function sum(...num){   
    return num.reduce((a, b) => a+b);
}

let total = sum(4,2,7,8);
console.log(total); //21


//Spread Operator:
(i)
var arr = [5,2,9,11];
console.log(arr); //[5,2,9,11]
console.log(...arr); // (...) make normal value  //5 2 9 11  

//(ii)
var arr = [2,5,1,4];
arr = [...arr,7,0,9];
console.log(arr); //[2,5,1,4,7,0,9 ]

//(iii)
const obj = {
    name: "sultan",
    email: "rasel@gamil.com",
}
const obj1 = {
    ...obj
}
console.log(obj1); //{name: 'sultan' , email: 'rasel@gamil.com'}

//(iv)
const obj = {
    name: "sultan",
    email: "rasel@gamil.com",
}
const obj1 = {
    ...obj,
    name:'alom'
}
console.log(obj1); //{name: 'alom' , email: 'rasel@gamil.com'}

//(iv)

const obj = {
    name:'sultan',
    email:'rasel@gamil.com',
}
const obj2 = {
    ...obj,
    name:'alom',
    age:24,
}
console.log(obj2);  ////{name: 'alom' , email: 'rasel@gamil.com' ,age:24}