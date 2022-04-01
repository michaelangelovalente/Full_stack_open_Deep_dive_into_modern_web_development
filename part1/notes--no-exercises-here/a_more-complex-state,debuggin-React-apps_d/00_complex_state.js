/**Index.js */

import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render( <App />,
document.getElementById('root'))
/**App.js */

import React, {useState} from 'react';

/*A more complex state is done by using multiple 'useState' functions to create seperate pieces*/
const App = () => {
    /*

    const[left, setLeft] = useState(0)
    const[right, setRight] = useState(0)

    return (
        <div>
            {left}
            <button onClick={ () => setLeft( left + 1 ) } >
                left
            </button>
            
            <button onClick={ ()=> setRight( right + 1)} >
                right
            </button>
            {right}
        </div>
    )*/

    
    /*
    example implenetation using a singe object
    {
        left:0,
        right
    }

    >
   */

   const[clicks, setClicks] = useState({
       left:0, right:0
   })

   /*
    const handleLeftClick = () => {
       const newClicks = {
           left: clicks.left + 1,
           right: clicks.right
       }
       setClicks( newClicks )
   }

   const handleRightClick = () =>{
       const newClicks = {
           left: clicks.left,
           right: clicks.right + 1
       }
       setClicks( newClicks )
   }

    A better way using 'Obkect spread' syntax:

   */
  
   /*const handleLeftClick = () => {
       const newClicks = {
           ...clicks, /* {...clicks} ==> creates a new object htat has copies of all of the
           properties of the 'clicks' object*/
     /*      left: clicks.left +1
           /*The code above creates a copy of the object 'clicks' 
           where the value of left is increased by one*/
   /*    }
       setClicks( newClicks )
   }

   const handleRightClick = () => {
       const newClicks = {
           ...clicks,
           right: clicks.right +1
       }
       setClicks( newClicks )

       Ulterior simplification --> We do not need to assign the object to a variable (newClicks):
   }*/
   const handleLeftClick = () => setClicks({...clicks, left: left.clicks + 1}) /**
   equivalent to --> ... () => setClicks( const newClicks = { ...clicks, right: clicks.right + 1})*/
   const handleRightClick = () => setClicks({ ...clicks, right: right.clicks +1})

   /*Important Note:
    It is forbidden in React to mutate state direct on an object ( this can cause unexpectede behavior)
    Chaning state has to be always done through the creation of a new object ( the copy of the old object) 
    and setting state to the new object.
    If properties of the previous state did not change, they simply need to be copied to the new object.

    Storing state in a single object is a bad choice in this case, this causes the application to be more complex. 
    A better solution (for this application) would be to use. Storing the click counter into seperate pieces of 
    state is more suitable. 
   */

   return(
       <div>
           {clicks.left}
           <button onClick={ handleLeftClick }>left</button>
           <button onClick={ handleRightClick }>right</button>
           {clicks.right}
       </div>
   )

   

   
}


export default App
