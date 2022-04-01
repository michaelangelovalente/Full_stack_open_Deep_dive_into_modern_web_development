
import React, {useState} from 'react';
import REACTDOM from 'react-dom'
const Button = (props) => {
   return(
    <button onClick={props.handleClick}>{props.text}</button>
   )
}

const App = () => {
    const [value, setValue] = useState(10)
 

    const setToValue = (newValue) => {
        console.log('value is now:', newValue)
        setValue(newValue)
    }
    
    //This is a mistake! ( It is bad practice to define a component inside another component)
    /**
     * This may cause problems, due to react treating a component defined inside of another 
     * component as a new component on every render
     * This doesn't allow react to optimize the component
    */
    const Display = props => <div>{props.value}</div>
    return(
        <div>
            
            <Display value={value}/>

            <Button handleClick={ () => setToValue( 1000 )} text={'thousand'}/>
            <Button handleClick={ () => setToValue( 0 )} text={'reset'} />
            <Button handleClick={ () => setToValue( value + 1)} text={'increment'} />
        </div>    
    )

}

export default App


/**Correct way: */