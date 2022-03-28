/*Example of Js ES6 syntax. ( Note: in the course we do not use this syntax but, we use the "Hooks" feature of react.)*/
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log( 'Hello, my name is ' + this.name )
    }
}

const adam = new Person('Adam Ondra', 35);
adam.greet();

const janja = new Person('Janja Garnbret', 22);
janja.greet();