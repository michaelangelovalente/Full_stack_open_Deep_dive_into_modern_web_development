/* index.js*/

import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render( <App />,
document.getElementById('root'))

/*App.js*/

import React, {useState} from 'react';

/* registering an event handler with 'click' on react */
const App = (props) => {
    
    /*
    const [counter, setCounter ] = useState(0)

    const handleClick = () => {
        console.log('clicked')
    }*/

    /*return(
        <div>
            <div>{counter}</div>
            <button onClick={handleClick}>
                plus
            </button>
        </div>
    )*/

    /* id we use the event handler form: onClick={ () => setCounter( counter + 1) }
        You achieve the desired behavior ( increased by one ) and
        the component gets re-rendered
    */


    /*
        Definition of an event handler within JSX-templates (as shown below) is not a good idea.
        <button onClick={ () => setCounter( counter + 1)}>
            plus
        </button>

        A better solution, and a good convention(?), is to seperate 
        event handlers into seperate functions ( as shown below)
    */

    const [ counter, setCounter ] = useState(0)

    const increaseByOne = () => setCounter(counter + 1)

    const setToZero = () => setCounter(0)

    return(
        <div>
            <div>{counter}</div>
            <button onClick={ increaseByOne }>
                plus
            </button>
            <button onClick={ setToZero }>
                zero
            </button>
        </div>
    )
    /*
    Above the event handlers have been defined correctly.
    
    The value of the onClick attribute is a variable containing a reference to a function
    */



export default App
