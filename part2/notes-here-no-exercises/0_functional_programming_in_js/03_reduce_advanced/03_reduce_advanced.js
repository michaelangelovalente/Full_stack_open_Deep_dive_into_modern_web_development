/** 
 * reduce() --> can reduce a list to a number, an array or an object.
 * 
*/

// to deal with files we import fs using:
//import fs from 'fs'
//var fs from 'fs' 
//var output = fs.readFileSync('data.txt', 'utf8')
//  .trim()
//  .map(line => line.split('\t'))
//  .reduce()
// (problem, could not import fs :( --> I'll manually create the output that line 9,10,11,12 would make )
let output =  [
    ['mark johansson', 'blender', '200', '1'],
    ['mark johansson', 'knife', '10', '4'], 
    ['Nikita Smith', 'waffle iron', '80', '1'],
    ['Nikita Smith', 'knife', '10', '2'],
    ['Nikita Smith', 'pot', '20', '3']
]

//first argument: function. The second argument: starting object. ( in this case, we start
// with an object)
                                                // line is the list(?) i iterate through
let reduced_output = output.reduce( (customers, line) => {
    customers[line[0]] = customers[line[0]] || [] // creating properties, note that we are adding to existing items. to recreate customers every loop
    customers[line[0]].push( // we now push an object inside customer[line[0]]
        {
            name: line[1],
            price: line[2],
            quantity: line[3]

        }
    )
    return customers // customers is the starting object's variable ( {} )
}, {} ) 

console.log('reduced_output', JSON.stringify( reduced_output, null, 2))