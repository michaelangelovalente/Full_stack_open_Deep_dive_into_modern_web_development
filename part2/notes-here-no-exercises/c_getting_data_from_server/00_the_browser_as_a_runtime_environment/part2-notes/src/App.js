import { useState, useEffect } from 'react'
import axios from 'axios'
import Note from './components/Note'



const App = () => {
  const [ notes, setNotes ] = useState([])
  const [ newNote, setNewNote ] = useState('')
  const [showAll, setShowAll] = useState(true)
  
 /* useEffect( () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/notes')
      .then( response => {
        console.log('promise fulfilled')
        setNotes( response.data )
      })
  }, [] )

    
  */
 /*
  // Alternative way to write the code above:
  useEffect( () => {
      console.log('effect')

      const eventHandler = response => {
        console.log('promise fulfilled')
        setNotes(response.data)
      }

      const promise = axios.get('http://localhost:3001/notes')
      promise.then(eventHandler)
  }, [] )
*/
 /*
  //An improved way to write the 'effect hook' above:
  const hook = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/notes')
      .then( response => {
        console.log('promise fulfilled')
        setNotes( response.data )
      })
  }
   // useEffect takes two parameters. 
   // The first is a function, the effect itself 
  useEffect( hook, [] )
  
  */

  /*The more compact way to represent the part is sufficient 
  for most apps */
  useEffect( () => {
      console.log('effect')
      axios
        .get('http://localhost:3001/notes')
        .then( response => {
          console.log('promise fulfilled')
          setNotes( response.data )
        }, [] )
  })
  
  console.log( 'render', notes.length, 'notes' )

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => 
          <Note key={note.id} note={note} />
        )}
      </ul>
    </div>
  )
}

export default App

/**index.js */
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