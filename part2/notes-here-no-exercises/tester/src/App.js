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