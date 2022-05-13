import React from 'react'
import ReactDOM from 'react-dom/client'


import axios from 'axios'
import App from './App'



//const promise = axios.get('http://localhost:3001/notes');
//console.log(promise)

//event handler used to register the promise
/*promise.then( response => {
  console.log( response)
} )
  Storing the promise object in a variable is generally 
  unecessary, it is instead common to chain the
  'then' method to the axios method call:
*/
/*
axios.get('http://localhost:3001/notes').then( response => {
  const notes = response.data
  console.log( notes )
})

A more readable way to format a chained method like above:
*/
  


    /**We render notes from our local server as the App component.
     * Note: this approach has many issue, due to us
     * rendering the entire App component only
     * when we successfully retrieve a response
     */

/** 
  axios
  .get('http://localhost:3001/notes')
  .then( response =>{
    const notes = response.data
    ReactDOM.createRoot(document.getElementById('root')).render(
      <App notes={notes} />
    )  
  })

  
A way to improve this is to fetch the data into the App component */
ReactDOM.createRoot(document.getElementById('root')).render(
  <App  />
) 