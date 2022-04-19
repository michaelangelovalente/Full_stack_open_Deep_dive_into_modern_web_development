/**
 * reduce() higher order function
 * 
 * 
 */

var orders = [
    { amount: 250 },
    { amount: 400 },
    { amount: 100 },
    { amount: 325 }
]

/*Solution with loop */
/*
var totalAmount = 0
for( var i = 0; i < orders.length; i++){
    totalAmount += orders[i].amount
}

console.log(totalAmount)*/


/*Implementation with reduce 
//reduce is a function that works on the array object
var totalAmount = orders.reduce( function(sum, orders){
        console.log('hello', sum, orders)
        return sum + orders.amount // the return value will in turned
                                   // be passed as the sum of the next iteration
}, 0) 
/**(function(x, array){}, n --> starting point for x)*/
/*console.log(totalAmount)*/

//Version of the above code with ECMAScript 6
var totalAmount = orders.reduce( (sum, orders) => sum + orders.amount, 0 )
console.log('final:', totalAmount)