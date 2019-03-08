// //This is for(Es5):

const arr = [14,56,7,8];
const b = arr[0];
console.log(b); //14

// //This is for Destructuring ARRAY(Es6):

const arr = [34,5,6,7];
let [x,a,c,d] = arr;
console.log(a); //5
console.log(d); //7 

//This is for Destructuring Object(Es6):
//(i)
const obj = {
    name: 'sultan mahmd',
    email: 'Rasel@gmail.com',
}
let{name,email} = obj;
console.log(name); //sultan mahmd
console.log(email); //Rasel@gmail.com
console.log(name,email); //sultan mahmd Rasel@gmail.com

// //(ii)
const obj = {
    name: "mahim",
    email: "mahim@gamil.com",
    
}
let{name,email} = obj;
console.log(name,email); //mahim mahim@gamil.com

function print(name,email){
    console.log(`Hello ${name} Email: ${email}`) //Hello mahim  Email:mahim mahim@gamil.com
}
print(name,email);


// //(iii)
const obj = {
    name: "mahim",
    email: "mahim@gamil.com",
    
}
let{name,email} = obj;
console.log(name,email); //mahim mahim@gamil.com

function print(name,email){
    console.log(`Hello ${name} Email: ${email}`) //Hello mahim@gamil.com Email: mahim
}
print(email,name);

// //(iv)
const obj = {
    name: "mahim",
    email: "mahim@gamil.com",
    
}
let{name,email} = obj;
console.log(name,email); //mahim mahim@gamil.com

function print({name,email}){
    console.log(`Hello ${name} Email: ${email}`) //Hello mahim  Email:mahim@gmail.com
}
print({email,name});

