/**
 * 
 * This creates an anonymous function and
 * we can assign it to another variables.
 * 
 */
var triple = function(x) {
    return x * 3
}

var waffle = triple
waffle(30)



////------------------------------//
/**
 * Example using filter()
 */

var animals = [
    { name: 'Fluffykins', species: 'rabbit' },
    { name: 'Caro', species: 'dog' },
    { name: 'Hamilton', species: 'dog' },
    { name: 'Harold', species: 'fish' },
    { name: 'Ursula', species: 'cat' },
    { name: 'Jimmy', species: 'fish' }
]

// for example if we wanted to filter out the 'dogs'

//normal version, using a for loop
/*
var dogs = []
for( var i = 0; i < animals.length; i++){
    if( aniamls[i].species === 'dog'){
        dogs.push(animals[i])
    }
}*/

/**Higher order function, with callback argument (function as argument) */
//version using filter function:
/*
var dogs = animals.filter(function(animal){ 
    return animal.species === 'dog'
})*/

//less compact version, for better understanding
var isDog = function(animal) {
    return animal.species === 'dogs'
}

var dogs = animals.filter(isDog)
var otherAnimals = animals.reject(isDog)