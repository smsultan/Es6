import Person from './person';

class Student extends Person{

    constructor(name,email,id){
        super(name,email);
        this.z = id; //this.id = id

    }
    welcome(){
        super.print();
        console.log(`ID: ${ this.z }`);
    }
}
export default Student;