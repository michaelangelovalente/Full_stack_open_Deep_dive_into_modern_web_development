/**index.js */
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

const notes = [
    {
        id: 1,
        content: 'HTML is easy',
        date: '2019-05-30T17:30:31.098Z',
        important: true
    },
    {
        id: 2,
        content: 'Browser can execute only JavaScript',
        date: '2019-05-30T18:39:34.091Z',
        important: false
    },
    {
        id: 3,
        content: 'GET and POST are the most important methods of HTTP protocol',
        date: '2019-05-30T19:20:14.298Z',
        important: true
    }
]

ReactDOM.createRoot(document.getElementById('root')).render(
    <App notes={notes} />
)

const result = notes.map( note => note.important )
console.log(result)

/**App.js */
import React, {useState} from 'react';
import REACTDOM from 'react-dom'
    const Note = ({note}) => {
        return(
            <li>{note.content}</li>
        )
    }

 /**
  * 
  * We use destructuring to
  * retrieve the field notes
  * of the props.
  * 
  * > const App = (props) => {
  * >  const { notes } = props
  * >  ... 
  * > }
  * 
  * 
  * Becomes...
  * > const App = ({ notes }) => { ... }
  * 
  * * * * * */
const App = ({ notes }) => {
    return(
        <div>
            <h1>Notes</h1>
            
            <ul>
                {
                /** We seperate then
                 *  displaying a single note 
                 *  into its own component called Note
                 * 
                 * {notes.map( (note , i) =>
                    <li key={note.id}>
                        {note.content}
                    </li>
                    )} 

                    The key attribute in 
                    case we create components
                    is defined for the component
                    and not for the li tags
                */}
                {notes.map( note =>
                    <Note key={note.id} note={note} />
                )}
                
            </ul>
        </div>
    )
}

export default App