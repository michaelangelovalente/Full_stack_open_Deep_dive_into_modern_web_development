/**
 * 2.6 The Phonebook Step1.
 * 
 */

import { useState } from 'react'

const Name = ({ pName }) =>{
  //console.log("refreshed: ", pName)
  return(
    <div>{pName}</div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    {id: 0, name: 'Arto Hellas' }
  ])

  const [newName, setNewName] = useState('')


  const addName =(event)=> {
    event.preventDefault() // Prevents default action of "onSubmit"/submitting forms
    setPersons( persons.concat( { id:persons.length , name: newName } ))
    setNewName('')

  }

  const handleChange =(event)=> {
    //console.log('event target:', event.target)
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