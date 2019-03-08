// Normal object create(es5):

let names = "sultan mahmud";
let emails = 'sultan@gmail.com';
const md = {
    name:names,
    email:emails,
    func: function(){
        console.log(this.name,this.email); //sultan mahmdu sulan@gamil.com
    }
}
md.func();
console.dir(md);


// es6 object create(es6):

let name = 'Rasel sarkar';
let email = "Rasel@gamil.com";
const md = {
    name,
    email,
    fun(){
        console.log(this.name,this.email); //sultan mahmdu sulan@gamil.com
    }
}
md.fun();
console.dir(md);

