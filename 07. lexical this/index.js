// Normal function for this keyword:

const obj = {
    Name: 'sultan mahmud',
    func: function(){
        setTimeout(function(){
            console.log(this); //{Name: "sultan mahmud", func: ƒ}
        }.bind(this),1000);
    }
}
obj.func();

// Arrow function for this keyword:

const obj = {
    Name: "sultan mahmud",
    func: function(){
        setTimeout( () => {
            console.log(this); //{Name: "sultan mahmud", func: ƒ}
        },1000);

        
    }

}
obj.func();