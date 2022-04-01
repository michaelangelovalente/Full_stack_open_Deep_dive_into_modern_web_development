/**index.js */

import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render( <App />,
document.getElementById('root'))

/**App.js*/

import React, {useState} from 'react';

/*The application example contains a piece of state that contains
an array 'allClicks', the array remembers every click that has occurred in the application*/
const App = () => {
   
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
    const [allClicks, setAll] = useState([]) /**allClicks is initally an empty array*/

    /**When The left button is clicked 'L' is added to the 'allClicks' array*/
    const handleLeftClick = () => {
        setAll( allClicks.concat('L')) /**Adding a new item to the array is done through the 
        concat method, this does not mutate the existing array, but instead returns a new copy of 
        the array with the item added to it.
        Note: we could've used the 'push' on 'allClicks' the issue would be 
        that by using the method, we update the state, and create a new copy of it*/
        setLeft( left + 1 )

        /*
            Example of a mistake that could lead to unexpected behavior.
            const handleLeftClick = () => {
                allClicks.push('L')
                setAll( allClicks )
                setLeft( left + 1)
            }

            This can lead to state that might appear to werk, but
            can be difficult to debug due to unexpected behavior.
        */
    }

    const handleRightClick = () => {
        setAll( allClicks.concat('R') )
        setRight( right + 1 )
    }


   return(
    <div>
        {left}
        <button onClick={handleLeftClick}>Left</button>
        <button onClick={handleRightClick}>Right</button>
        {right}
        <p>{allClicks.join(' ')}</p>
    </div>
    /*    <p>{allClicks.join(' ')}</p> --> The 'join' method simply
    joins all the items into a single string seperated by the string passed as the
    function parameter ( space character ).*/
   )
   
}


export default App
