/**Index.js*/

/**App.js */

import React, {useState} from 'react';
/*********************************************************************
 * ( Example of Conditional rerending )
 * History component that loads different react elements depending on
 * the state of the application.
 ********************************/
const History = (props) => {
    if( props.allClicks.length === 0){
        return(
            <div>
                The app is used by pressing the buttons
            </div>
        )
    }

    return(
        <div>
            button press history: {props.allClicks.join(' ')}
        </div>
    )
}

/**Button component from passing-state-to-child*/
const Button = ({ handleClick, text }) => {
    return(
        <button onClick={handleClick}>
            {text}
        </button>
    )
    
}

const App = () => {
   
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
    const [allClicks, setAll] = useState([]) 

    
    const handleLeftClick = () => {
        setAll( allClicks.concat('L')) 
        setLeft( left + 1 )
    }

    const handleRightClick = () => {
        setAll( allClicks.concat('R') )
        setRight( right + 1 )
    }


   return(
    <div>
        {left}
        <Button handleClick={handleLeftClick} text='left'/>
        <Button handleClick={handleRightClick} text='right'/>
        {right}
        <History allClicks={allClicks}/>
    </div>
   )
   
}


export default App
