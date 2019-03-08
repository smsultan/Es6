class Preson{
    // let a = 44; //we can't use any variable in class

    constructor(name,email){
        this.x = name; //this.name = name;
        this.y = email; //this.email = eamil;
    }
    print(){
        console.log(`Name: ${ this.x }, Email: ${ this.y }`)
    }
}

export default Preson;