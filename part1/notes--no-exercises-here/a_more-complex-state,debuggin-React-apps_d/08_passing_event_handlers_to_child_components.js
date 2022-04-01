
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
    
    return(
        <div>
            {value}
            {
                /*1000, 0, value +1
                */
            }
            <Button handleClick={ () => setToValue( 1000 )} text={'thousand'}/>
            <Button handleClick={ () => setToValue( 0 )} text={'reset'} />
            <Button handleClick={ () => setToValue( value + 1)} text={'increment'} />
        </div>    
    )

}

export default App
