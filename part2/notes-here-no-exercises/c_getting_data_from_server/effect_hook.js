/*App.js*/
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