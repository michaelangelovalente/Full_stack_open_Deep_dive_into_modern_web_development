

import React, {useState} from 'react';

/*Event Handling*/
const App = () => {
    const [value, setValue] = useState(10)

    /*  Defining event handler function in directly in the attribute of the button isn't best
        practice.
        The best solution, is to define them in a separate place.
        
        The function below gets assigned to 
        the handleClick variable in the body of the component function */
    const handleClick = () => {
        console.log('clicked the button')
        setValue(0)
    }
    /**return(
     *  <div>
     *      {value}
     *      <button onClick={handleClick}> button </button>
     *  </div>
     * ) */


    return(
        <div>
            {value}
            {/*
            Event handlers must always be either a reference to a function
            or a function
            
            examples that won't work:
            <button onClick="crap..">click here</button>
            <button onClick={value + 1}>reset to zero</button> 
            <button onClick={value = 0}>reset to zero</button> <-- not a func, but variable assignment. This is also bad practice, since there is an attempt to mutate state without creating a copy. aka you never mutate state directly in React
                
            console.log ==> returns 'undefined'
            <button on Click={console.log('clickyity clack')}> button </button> --> prints on the console once the component is rendered,
            but the event handler recieves 'undefined'

            <button onClick={setValue(0)}> click here</button> --> causes infinite recursion
            when the component is rendered setValue(0) is called, which causes the 
            component to be rerendered, this causes a call to setValue(0) .... and so on.

            
            The arrow function syntax used below gets the component rendered, when the component
            gets rendered no funciton gets called, and only the reference to the arrow function
            is set to the event handler. The function gets called once when the button gets
            clicked.
            <button onClick = {  ()=> console.log('clciked' })
            
            function that resets state
            < button onClick={() =>  setValue(0)} > </button> 

            */}
            <button onClick={handleClick}>reset to zero</button> 
        </div>
    )
}

export default App
