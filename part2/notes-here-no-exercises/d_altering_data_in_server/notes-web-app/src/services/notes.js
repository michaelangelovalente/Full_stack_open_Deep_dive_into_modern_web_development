import axios from 'axios'

const baseUrl = 'http://localhost:3001/notes'

const getAll = () => {

      /**
     * The 'nonExisting' note does not exist in the server.
     * Recall that an application can be in one of three different states.
     * The promise is:
     *  Pending -> The final value is not available yet.
     *  Fulfilled -> Operation is completed, and final value is available. (operation successful)
     *  Rejected -> An error prevented the final value from being determined. (operation failed)
     * 
     * The associated promise with the nonExisting object is 'REJECTED'
     * The rejection of the promise is handled by providing the 'then' method
     * with a second callback function.
     * The function is called when the promise is rejected.
     * The more common way to add a handler is to use a catch method.
     * 
     *  > vers without catch method: const request = axios.get(baseUrl) 
     * 
     * error handler for rejected promises
     * > axios
     * >    .get('http:thiswillfail')
     * >    .then( response => {
     * >        console.log('success!')
     * >    })
     * >    .catch( error => { // if the request fails the event handler registered with the 'catch' method gets called
     * >        console.log('fail')
     * >    })
     */
    const request = axios.get(baseUrl) // promise assigned to the request variable
    


    const nonExisting = {
        id: 1000,
        content: 'This note is not saved to the server',
        date: '2019-05-30T17:30:31.098Z',
        important: true,
    }

    //return request.then( response => response.data) //<----- // we then call its then method
    return request.then( response => response.data.concat(nonExisting))
  
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