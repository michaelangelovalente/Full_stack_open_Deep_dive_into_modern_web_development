/* index.js */
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render( <App />,
document.getElementById('root'))

/*App.js*/

import React, {useState} from 'react';

/* registering an event handler with 'click' on react */
const App = (props) => {
    
    const [counter, setCounter ] = useState(0)

    const handleClick = () => {
        console.log('clicked')
    }

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
    return(
        <div>
            <div>{counter}</div>
            <button onClick={ () => setCounter( counter + 1)}>
                plus
            </button>
            <button onClick={ ()=> setCounter(0)}>
                zero
            </button>
        </div>
    )
}



export default App
