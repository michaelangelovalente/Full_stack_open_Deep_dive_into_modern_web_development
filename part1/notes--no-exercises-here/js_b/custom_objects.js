/*Example of conventional way to creating method functions
and assigning references to them inside the constructor.*/

function Person(first, last){
    this.first = first;
    this.last = last;
}

Person.prototype.fullName = function(){
    return this.first + ' ' + this.last;
};

Person.prototype.fullNameReversed = function(){
    return this.last + ', ' + this.first;
};


/*This is useful cause it means you can add extra methods to existing object at runtime*/
var s = new Person('Simon', 'Willison');
s.firstNameCaps(); // generates error s.firstnameCaps is not a function

Person.prototype.firstNameCaps = function() {
    return this.first.toUpperCase();
};

s.firstNameCaps(); // output --> "SIMON"

/*You can also add things (example below adds a method) to the prototypes built-in JavaScript Objects*/
var s = "Simon";
s.reversed(); // TypeError...: s.reversed is not a function

String.prototype.reversed = function(){
    var r = '';
    for( var i = this.length - 1; i >= 0; i-- ){
        r += this[i];
    }
    return r;
};

s.reversed();


/*This method also works with literals*/

"This a".reversed(); //a sihT

var s = new Person('Simon', 'Willison');
s.toString(); // [object Object]

Person.prototype.toString = function() {
  return '<Person: ' + this.fullName() + '>';
}

s.toString(); // "<Person: Simon Willison>"

/* applying an object to apply
function avg(...args) {
  let sum = 0;
  for (const item of args) {
    sum += item;
  }
  return sum / args.length;
}

avg(2, 3, 4, 5); // 3.5

remember: apply() --> allows you to call a function with an arbitrary array of arguments

avg.apply(null, [n0,..,n-1]) or you can achieve the same result with the "spread operator" avg(...numbers)
*/



/*First argument of apply is actually an object that should be treated as "this":*/
function trivialNew( constructor, ...args ){
    var o = {};// creating an object
    constructor.apply( o, args );
    return o;
}

/*call*/
var bill = trivialNew( Person, 'William', 'Orange'); /*is equivalent to*/
var bill = new Person( 'William', 'Orange');


/*call(), hasa similar behaviour to apply()*/

function lastNameCaps(){
    return this.last.toUpperCase();
}

var x = new Person('Simon', 'Willison');
lastNameCaps.call(s);

s.lastNameCaps = lastNameCaps;
s.lastNameCaps();


/*
Destructuring assignment:
let a, b, rest;
[a, b ] = [ 10, 20 ];

*/