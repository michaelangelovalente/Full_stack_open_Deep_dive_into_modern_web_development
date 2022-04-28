import Note from './components/Note'
import { useState } from 'react' // This is imported so that it allows us to store the notes
// in the App component's state using the useState function

const App = ( props ) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState(
    "a new note..."
  )
  //this state keeps track of which notes are displayed
  const [showAll, setShowAll] = useState(true)

  // notesToShow variable (is an array(?)) stores all the notes to be displayed.
  //The items of the list depend on the state of the component
  // const notesToShow = showAll ? notes : notes.filter( note => note.important === true) The comparison
  // operator is redundant. THis is because the value note.important is either true or false.
  // so we can instead write:
  const notesToShow  = showAll ? notes: notes.filter( notes => notes.important ) 
  //Important: val1 == val2 does not work as expected in JavaScript so it is safer to use val1 === val2
  // exclusively.
  console.log("showALL: ", showAll)
  console.log( "show: ", notesToShow )
  
  const addNote = (event) => {
    event.preventDefault() // Prevents the default acount, the action, amount other things, would cause the page to reload.
    console.log('button clicked', event.target) // the target of the 
    //event is stored in event.target, which in this case
    // is the form that we have defined in our component.

      //We create a new object that will receive its contents from
      // from the component's "newNote" state.
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < .5,
      id: notes.length + 1,
    }

    setNotes(notes.concat(noteObject)) // "concat" array method. Remember that
    // "concat" method does not mutate state direct, but instead creates a new 
    // new copy of the array with the new item added to the end.
    //This is important! considering that in React we NEVER MUTATE STATE DIRECTLY.
    setNewNote('')// teh eventhandler 'addNote' also resets the value of the 
    // controlled input elelement with "setNewNote('')".
  }

  const handleNoteChange = (event) => {

    // event.preventDefault() -->  we did not 
    // call this function like on the onSubmit event handler.
    // This is because there is no default action on "onChnage", unlike on a 
    // form submission.
    // 
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  return (
    <div>
      <h1>Notes</h1>
      {/**
       * 
       * We add a functionality that
       * toggles the showAll state of the application.
       * 
       */}
      <div>
       <button onClick={ () => setShowAll(!showAll) } >
        show { showAll? 'important':'all'}
       </button>
      </div>
      <ul>
        {/*{notes.map(note => 
          <Note key={note.id} note={note} />
        )}*/}
        {notesToShow.map( note => 
          <Note key={note.id} note={note}/>
          )}
      </ul>
      <form onSubmit={addNote}>
        <input 
          value={newNote} 
          onChange={handleNoteChange} 
          placeholder="input"
        /> 

        <button type='submit'>save</button>
      </form>
    </div>
  )
}

export default App