//const never change 
const a = 10;
a = 20; //not valid
console.log(a);


//we can include some value in array
const arr = [];
arr.push(10);
arr.push(20);

arr = []; //not posible

console.log(arr);


//var key word work for all position 
var a = 50;
if(true){
    var a = 40;
    console.log(a) //40
}
console.log(a); //40


//let,const key words work for only on block {}
example:1
let a = 70;
if (true){
    let a = 80;
    console.log(a); // 80
}
console.log(a); //70

example:2
let a = 10;
{
let a = 20;
console.log(a); //20
}
console.log(a); //10

//more example for var,const,let 
function start(){
    {
        var  a = 30;
        {
            const a = 6;
            console.log(a); //6
           
        }
        {
            let a = 99;
            console.log(a); //99
        }
        a = 60;
        console.log(a); //60
    }
    console.log(a); //60

}
start();
let a = 10;
{
let a = 20;
console.log(a); //20
}
console.log(a); //10

