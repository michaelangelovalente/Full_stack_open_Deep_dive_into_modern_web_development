/*Event Handling*/
const App = () => {
    const [value, setValue] = useState(10)

    /**
     * Example of defining an event 
     * handler with a function that returns a function
     * 
     * 
    */
    const hello = () => {
        const handler = () => console.log('Hello world')
        return handler
    }   

    return(
        <div>
          {value} 
           <button onClick={ hello() /** return value of hello is reference to handler */ }>button</button> {/**
           * This shouldn't work, considering that eventHandlers do not handle functions, but in this case, what gets rendered
           * is 
           * const hello = () => {
           *    const handler = () => console.log('Hello word')
           *    return handler
           * }
           * 
           * when react renders the <button ....  > line it assigns the 
           * return value of hello().
           * Essentially the line above is equivalent to
           * <button onClick={ () => console.log('hello world')}>button</button>
           * 
          */}
        </div>
    )
}



/**Example 2*/



import React, {useState} from 'react';

/*Functions that return functions
*/
const App = () => {
    const [value, setValue] = useState(10)

    /*const hello = (who) => {
        const handler = () => {
            console.log('hello', who)
        }
        return handler
    } */
    /**More compact versions
     * 
     * const hello = (who) => {
     *      return () => {
     *          console.log('hello', who)
     *      }
     *  
     * }
     * 
     *  |
     *  V
     * 
     * const hello = (who) => {
     *  return () => console.log( 'hello', who)
     * }
     * 
     *  |
     *  V
     * 
     * const hello = (who) =>  {
     *      ()=> {
     *          console.log('hello', who )
     *      }
     * }
     * 
     *  |
     *  V
     * 
     * const hello = (who) => () => {
     *      console.log('hello', who )
     * }
     * 
     * */  

    const hello = (who) => () => {
        console.log('hello', who)
    }

    /**If we wanted to set the state of the  component to a new value
     * using a function
    */
    const setToValue = (newValue) => () => {
        console.log('value is now:', newValue)
        setValue(newValue)
    }
    
    return(
        <div>
            <div>
                <button onClick={ hello('world')}>button</button>
                <button onClick={ hello('react')}>button</button>
                <button onClick={ hello('function')}>button</button>
            </div>
            <div>
                
                <button onClick={setToValue(1000)}>thousand</button>{
                    /**THe component is rendered as above, but the event handler is set to return
                     * the value:
                     *  ()=> {
                     *      console.log('value is now:', 1000)
                     *      setValue(1000)
                     *  }
                     */
                }
                <button onClick={setToValue(0)}>reset</button>
                {
                    /**
                     * The event handler is created by the function call 
                     * setTovalue( value + 1) the paramenter is ( the current value of 'value' e.g 10 ) + 1
                     * 
                     * the created event handler would be then
                     * () => {
                     *      console.log('value is now:', 11)
                     *      setValue(11)
                     * }
                     */
                }
                <button onClick={setToValue(value +1)}>increment</button>
            </div>
            {value} 
          
          {
              /**
               * 
               * The event handles is created by executing the function
               *  hello('...')
               * and it returns
               * () => {
               *    console.log('hello', '...')
               * }
               * 
               * functions reteurning function are useful for generic functions that can 
               * take parameters.
               * The 'hello' function can be thought of as a factory that customises event handlers
               * for greeting users
               * 
               */
          }
        </div>
    )
}

export default App



import React, {useState} from 'react';

/**
 * 
 * Using functions that RETURN function is not required,
 * you nca achieve the same by doing as shown below
 * 
 */

const App = () => {
    const [value, setValue] = useState(10)
 



    const setToValue = (newValue) => {
        console.log('value is now:', newValue)
        setValue(newValue)
    }
    
    return(
        <div>
            {value}
            <button onClick={()=> setToValue(1000)}>
                thousand
            </button>
            <button onClick={ ()=> setToValue(0)}>
                reset
            </button>
            <button onClick={ ()=> setToValue( value + 1)}> 
                increment
            </button>
        </div>    
    )
    /**This version of eventhandlers are functions that call functions (in this case we created a function
     * that calls setToValue) */
}

export default App
