const arto = {
    name: 'Arto Hellas',
    age: 35,
    education: 'PhD',
    greet: function() {
        console.log('Hello, my name is ' + this.name)
    },
    doAddition: function(a,b){
        console.log( a + b)
    }
}

arto.greet()
/*Assigning a method after the creation of the object*/
arto.growOlder = function(){
    this.age += 1;
}

/*console.log( arto.age );
arto.growOlder();
console.log( arto.age );
arto.doAddition( 1, 4);

const referenceToAddition = arto.doAddition
referenceToAddition( 10, 15 );*/

/* referencing arto.greet() does not work --> when a method is called through a reference, the global variable "this" is lost. you can preserve "this" 
using the method bind*/

/*Example how 'this' is lost through ref. */
const referenceToGreet = arto.greet;
referenceToGreet();

/* You can also lose ref. while setting a timeout*/
setTimeout( arto.greet, 500);

/*Solution: using "bind" method*/
setTimeout( arto.greet.bind( arto ), 500 );

/**/