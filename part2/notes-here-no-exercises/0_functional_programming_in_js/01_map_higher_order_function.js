/**
 * Map() higher order function
 * 
 * goes through array and transforms it
 */

var animals = [
    { name: 'Fluffykins', species: 'rabbit'},
    { name: 'Caro', species:'dog'},
    { name: 'Hamilton', species: 'dog'},
    { name: 'Harold', species: 'fish'},
    { name: 'Ursula', species: 'cat'},
    { name: 'Jimmy', species: 'fish'}
]

// We want to get an array of all the animals

/**Solution with for loop 
var names = []
for( var i = 0; i < animals.length; i++ ){
    names.push(animals[i].name)
}

console.log(names)
*/

/**Solution using map() . map takes a callback function as an argument
var names = animals.map( function(animal) {
    return animal.name // the callback function puts a transformed object, that will be put in the the new array
})

console.log(names)*/


/**Since map expects the callback to return any object
 * we can even use map to create completely new objects 

var names = animals.map( function( animal ){
    return animal['name'] + ' is a ' + animal.species
} )

console.log(names)*/


/**ECMAScript 6 and arrow functions */

//var names = animals.map( (animal) => { return animal.name} )
//Even better...
//var names = animals.map( (animal) => animal.name) // => implicitly returned
//console.log(names)
//In functional programming it is common to use x as argument name, for short functions
var names = animals.map( (x)=> x.name )
console.log(names)