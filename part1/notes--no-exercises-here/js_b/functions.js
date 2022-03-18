const sum = (p1, p2) => {
	console.log( 'parameter 1:' + p1 );
	console.log( 'parameter 2:' + p2);
	return p1 + p2;
}

// single parameter
const p = p =>{
	console.log( 'parameter 1:' + p );
	return  p * p;
}

//single expression single paramter

const p_short = p => p*p;


// utility of s.exp s.param form --> array manipulation
// example /w map method
const t =  [ 1, 2, 3]
const tSquared = t.map( p_var2 => p_var2 * p_var2 );
