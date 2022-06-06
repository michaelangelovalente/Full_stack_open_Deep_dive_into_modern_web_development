import axios from 'axios'

const baseUrl = 'http://localhost:3001/notes'

const getAll = () => {
    const request = axios.get(baseUrl) // promise assigned to the request variable
    return request.then( response => response.data) //<----- // we then call its then method
}
/**
 * The last row is equivalent, and a more compact version of:
 * const getAll = () =>{
 *      const request = axios.get( baseUrl )
 *      return request.then( response => { <-----
 *          return response.data           <-----
 *      })                                 <-----
 * }
 */
// getAll returns a promise, and so does the then method promise 
// also return a promise

const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then( response => response.data)
}

const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then( response => response.data )
}

/** 
 * To the left are the keys of the object: The ones to the right are the variables that are
 * defined inside of the module.
 
export default{
    getAll: getAll,
    create: create,
    update: update
}
A more compact version:
*/
export default{ getAll, create, update }

/** Note on short-hand object definition
 *  const name = 'Leevi'
 *  const age = 0
 *  
 *  // We would've have to define the object person this way:
 *  const person = {
 *      name:name,
 *      age:age
 *  }
 *  //with ES6 we can define instead
 *  const person = { name, age } // age would still be 0, and name would be 'Leevi'
 */