// accessing data contained in the input form via 'controlled component'

/**App.js */
import Note from './components/Note'
import { useState } from 'react' // This is imported so that it allows us to store the notes
// in the App component's state using the useState function

const App = ( props ) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState(
    "a new note..."
  )
  
  
  const addNote = (event) => {
    event.preventDefault() // Prevents the default acount, the action, amount other things, would cause the page to reload.
    console.log('button clicked', event.target) // the target of the 
    //event is stored in event.target, which in this case
    // is the form that we have defined in our component.

      //We create a new object that will receive its contents from
      // from the component's "newNote" state.
    const noteObect = {
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
      <ul>
        {notes.map(note => 
          <Note key={note.id} note={note} />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input 
          value={newNote} 
          onChange={handleNoteChange} 
            /*The 'event handler' enables editing of the input element, 
            it synchronizes the changes mae to the input with the
          component's state*/ 
          placeholder="input"
        /> 
        {/** 
         * Assigning a piece of 
         * the App component's state
         * as the vlaue attribute of the input element, the App component 
         * now controls the behavior of the 
         * input element.
         * 
         * 
         * 
         */}
        <button type='submit'>save</button>
      </form>
    </div>
  )
}

export default App

/**index.js */