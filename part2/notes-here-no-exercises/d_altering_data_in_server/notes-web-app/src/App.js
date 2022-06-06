//Promises and Errors
import { useState, useEffect } from 'react'
import Note from './components/Note'
import noteService from './services/notes'

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    noteService
      .getAll()
      .then(initialNotes=> {
        setNotes(initialNotes)
      })
  }, [])


  const toggleImportanceOf = (id) => {
    
    //individual notes can be modified in 2 different ways;
    //HTTP request --> HTTP PUT request replaces the entire note.
    // HTTP PATCH request  changes some of the note's properties
    const note = notes.find( n=>n.id === id); //finds the note we want to modify

    
    
    //we create a new object that is an exact copy of the old note, apart from
    //the 'important' property.
    //We use the object spread syntax to do so.

    //Note how we made a copy, and we did not modify
    //the variable 'note' above with :
    //>note.important = !note.important
    //This is because the 'note' variable is a reference to an item
    //in the 'notes' array in the component's state, and WE MUST
    //NEVER MUTATE STATE DIRECTLY IN REACT!

    //note 'changedNote' is a ''shallow copy'; a copy with the same objects that
    //references to the same objects(?)

    const changedNote = { ...note, important:! note.important}

    //The new note is sent to the BACKEND with a PUT request, where it will
    //replace the old object.
    /*
    axios.put( url, changedNote).then( response =>{
      console.log( response.data )
      //The callback function sets the component's note state
      //to a new array that contains all the items from the previous notes array(a copy that has been modified).
      //except for the old note which is replaced with the updated version of it returned by the server.
      setNotes( 
        //the above is accomplished with the 'map' method.
        notes.map( note => note.id !== id ? note: response.data )
        //The 'map' method creates a new array, copies the old values of the
        //the old array by mapping every item of the old array into the new one.
        //when the condition 'note.id !== id(the id above) then response.data is copied at the
        //id position. In other words, the object returned by the server
        //is added to the array instead.
         )
    })*/
    noteService
      .update( id, changedNote)
      .then( returnedNote => {
          setNotes( notes.map( note => note.id !== id ? note : returnedNote ) )
      })
      //error handler callback function
      .catch(error => {
        alert(
          `The note ${note.content} was already deleted from the server`
        )
        setNotes(notes.filter( n=> n.id !== id )) // Removing an already deleted note
        // is done through the 'filter' method.
        //The function returns a new array containing only the items from the list
        //for which the function that was passed as a parameter returns true for.
        //Note you shouldn't use alert for normal React applications
      })
  }


  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() > 0.5,
      //id: notes.length + 1, //--> we ommit the id proprty since, it is better (?)
      // to let the server generate ids for our resources
    }
    /*
    axios
      .post('http://localhost:3001/notes', noteObject)
      .then( response => {
        console.log( response )
        setNotes(notes.concat(response.data))
        setNewNote('')
      })
    */
    noteService
      .create(noteObject)
      .then( returnedNote => {
        setNotes(notes.concat(returnedNote))
        setNewNote('')
      })
  }

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  
  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important)

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div>   
      <ul>
        {notesToShow.map(note => 
          <Note 
            key={note.id}
            note={note}
            toggleImportance={ () => toggleImportanceOf(note.id)}
          />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input
          value={newNote}
          onChange={handleNoteChange}
        />
        <button type="submit">save</button>
      </form>
    </div>
  )
}

export default App