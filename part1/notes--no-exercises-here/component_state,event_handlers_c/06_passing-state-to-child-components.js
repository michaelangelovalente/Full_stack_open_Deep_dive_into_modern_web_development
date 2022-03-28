/*index.js*/
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render( <App />,
document.getElementById('root'))

/*App.js*/

import React, {useState} from 'react';

/* We place the application's stae in the app component and pass it down to the Display 
component through prpops*/
const Display = (props) =>{
    return(
        <div>{props.counter}</div>
    )
}
/*We pass the event handler as well as the title of the button through the component's props*/
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
            <Button onClick={setToZero} text='zero' />
            <Button onClick={decreaseByOne} text='minus'/>
        </div>
    )
}



export default App
