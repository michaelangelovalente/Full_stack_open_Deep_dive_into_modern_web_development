/*index.js*/

import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render( <App />,
document.getElementById('root'))

/*App.js*/
import React, {useState} from 'react';
/*
    The component only uses the counter field of its props.
    So it can be simplified by using destructuring.

    const Display = (props) => {
        return(
            <div>{props.counter}</div>
        )
    }

    const Display = ({counter}) => {
        return(
            <div>{counter}</div>
        )
    }

    The function defining the component contains only the return state, it can be defined using
    a more compact form (arrow function):

    const Display = ({counter}) => <div>{counter}</div>


    Same simplification as show above with Button component
    const Button = (props) => {
        return(
            <button onClick={props.onClick}>
                {props.text}
            </button>
        )
    }

    will become:
    const Button = ({onClick, text}) => (
        <button onClick=(onClick)>
            {text}
        </button>
    )
*/


const Display = ({counter}) => (<div>{counter}</div>)
const Button = (props) => {
    return(
        <button onClick={props.onClick}>
            {props.text}
        </button>
    )
}

const App = (props) => {
    /*  */
    const [ counter, setCounter ] = useState(0)

    const increaseByOne = () => setCounter(counter + 1)
    const decreaseByOne = () => setCounter(counter -1)
    const setToZero = () => setCounter(0)

    return(
        <div>
            <Display counter={counter}/>
            <Button onClick={increaseByOne} text='plus'/>
            <Button onClick={decreaseByOne} text='minus'/>
            <Button onClick={setToZero} text='zero' />
        </div>
    )
}



export default App
