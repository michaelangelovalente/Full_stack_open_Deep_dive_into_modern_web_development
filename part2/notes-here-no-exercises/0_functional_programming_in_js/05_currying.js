/*let dragon = (name, size, element) => 
    name + ' is a ' +
    size + ' dragon that breathes ' +
    element + '!'

    console.log(dragon('fluffykins', 'tiny', 'lightning'))*/
//The same function above in Currying version
/*
let dragon =
    name => 
        size => 
            element =>
                name + ' is a ' +
                size + ' dragon that breathes ' +
                element + '!'


let fluffykinsDragon = dragon('fluffykins') 
let tinyDragon = fluffykinsDragon('tiny')


console.log( tinyDragon('lightning'))*/


//Transforming a non curriable dfunction to a curriable function
/*import  _ from 'lodash'

let dragon = (name, size, element) =>
    name + ' is a ' +
    size + ' dragon that breathes ' + 
    element + '!'

dragon = _.curry(dragon)

let fluffykinsDragon = dragon('flufykins')
let tinyDragon = fluffykinsDragon('tiny')

console.log(tinyDragon('lightning'))*/


// we want to improve the code below with currying
let dragons = [
    {name: 'fluffykins', element: 'lightning'},
    {name:'noomi', element:'lightning'},
    {name:'karo', element: 'fire'},
    {name:'doomer', element:'timewarp'}
]

let hasElement =
    (element, obj) => obj.element === element

let lightningDragons = 
    dragons.filter( x => hasElement('lightning', x) )

console.log(lightningDragons)