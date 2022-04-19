/**index.js */
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'


ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)


/**App.js */
import React, {useState} from 'react';
import REACTDOM from 'react-dom'

/**If a component has been declared as a single state. Using console.log
 * Might be more difficult.
 * const Course = ({ course }) => (
        <div>
            <Header course={course} />
        </div>
    )
 * 
 */
    const Header = ({course}) => {
        <h1>Header is {course}</h1>
    }
    /**If we undo the destructuring, debugging might be simpler....*/
    const Course = (props) => {
        console.log(props)
        const { course } = props
        return(
            <div>
                <Header course={course} />
            </div>
        )
    }

const App = () => {
    const course = {
        // ...
    }
    console.log("App works ...")
    return(
        <div>
          <Course course={"course"} />
  
        </div>
    )
}

export default App