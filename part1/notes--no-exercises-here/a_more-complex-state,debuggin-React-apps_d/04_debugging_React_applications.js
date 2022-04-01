/*App.js*/

import React, {useState} from 'react';

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

/* 
 * Debugging 101 --> we first need to transform our component into a less compact 
 * version
 *
 * Button component from passing-state-to-child
 * */
const Button = (props) => {

    console.log(props)
    /**Note: 
     * When debugging don't combine 'object' using
     * the plus operator: > console.log( 'props value is' + props ) // this gives an uninformative message: props value is [Object object]
     * Instead you should use a comma: > console.log('props value is', props) // 
     */
    const { handleClick, text} = props

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
    //debugger // Adding this allows to pause execution exactly aat this point. This can also be done via the tool in the browser

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
