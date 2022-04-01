
import React, {useState} from 'react';


/**
 *'useState' function mustn't
 *be called from inside a loop, or a conditional expression.
 * This is because we have to ensure that the hooks are called in the same order.
 * If this isn't done the application might have unexepected behavior. 
 * 
 * Examples of good and bad practice are shown below
 * *//*
const App = () => {
   // Correct hook usage:
   const [age, setAge] = useState(0)
   const [name, setName] = useState('Juha Tauriainen')


   //Examples of incorrect usage of useState() hook
   if( age > 10 ){
     // This is bad practice
     const [foobar, setFoobar] = useState(null)
   }

   for ( let i = 0; i < age; i++ ){
       //This is bad practice 2.0
       const [rightWay, setRightWay] = useState(false)
   }

   const notGood = () => {
       // illegal
       const [x,setX] = useState(-1000)
   }

   return(
       //....
   )
}
*/

export default App
