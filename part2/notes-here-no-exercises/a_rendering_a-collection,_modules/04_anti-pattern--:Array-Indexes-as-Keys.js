// React can also use indexes as keys.
// Although this is not recommended.

// The indexes can be retrieved by passing
// a second parameter to the callback function
// of the 'map' method

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

const result = notes.map( note => note.content )
console.log(result)

/**App.js*/
import React, {useState} from 'react';
import REACTDOM from 'react-dom'

const App = (props) => {
    const { notes } = props

    return(
        <div>
            <h1>Notes</h1>
            <ul>
                
                {notes.map( (note , i) =>
                    <li key={i}>
                        {note.content}
                    </li>
                )} 
                {/* The above generates an array of li elements*/ }
                
            </ul>
        </div>
    )
}

export default App