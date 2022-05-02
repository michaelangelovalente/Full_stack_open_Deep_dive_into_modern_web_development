/**
 * 2.7 The Phonebook Step2.
 * 
 * Prevent the user from being able
 * to add names that already exist in the phonebook.
 * 
 * Issue a warning alert command when such an action is attempted.
 * 
 */

import { useState } from 'react'
import _ from 'lodash'

const Name = ({ pName }) =>{
  return(
    <div>{pName}</div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    {name: 'Arto Hellas' }, 
    {name: 'Bart Simpsons'}
  ])

  const [newName, setNewName] = useState('')
  const [include, setInclude] = useState( true )


  const addName =(event)=> {
    event.preventDefault() // Prevents default action of "onSubmit"/submitting forms
    const newPerson = { name: newName }
    
    // Is this the best way to do this???
    if( (persons.filter( person => person.name === newPerson.name )).length === 0 ){
      console.log("unique")
      setPersons( persons.concat( newPerson ))
      setNewName('')
    }else{
      alert(`${newPerson.name} is already added to the phonebook`)
    }

    
    

 
  }

  const handleChange =(event)=> {
    setNewName(event.target.value)
  }

 return(
    <div>
      
      <h2>Phonebook</h2>
      
      <form onSubmit={addName}>

        <div>
          name: <input
                  value={newName}
                  onChange={handleChange}                  
                />
        </div>
        <div>
          <button type="submit">add</button>
        </div>

      </form>
      <h2>Numbers</h2>
      <div>
        {
          persons.map( (person) => {
            return <Name key={person.name} pName={person.name} />
          })
        }
        
      </div>
      
    </div>
  )
}

export default App