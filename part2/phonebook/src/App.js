/**
 * 2.8 The Phonebook Step3.
 * 
 * Expand your application by allowing users 
 * to add phone numbers to the phone book. 
 * You will need to add a second input element to the 
 * form (along with its own event handler).
 */

import { useState } from 'react'
import _ from 'lodash'

const Information = ({ pName, pNumber }) =>{
  return(
    <div>{pName} {pNumber}</div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    {name: 'Arto Hellas', number:'39-44-5323523'}, 
    {name: 'Bart Simpsons', number:'40-55-6433523'}
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')


  const addName =(event)=> {
    event.preventDefault() // Prevents default action of "onSubmit"/submitting forms
    const newPerson = { name: newName, number: newNumber }
    
    // Is this the best way to do this???
    if( (persons.filter( person => person.name === newPerson.name )).length === 0 ){
      setPersons( persons.concat( newPerson ))
      setNewName('')
      setNewNumber('')
    }else{
      alert(`${newPerson.name} is already added to the phonebook`)
    }

    
    

 
  }

  const handleChangeName =(event)=> {
    setNewName(event.target.value)
  }
  const handleChangeNumber =(event)=>{
    setNewNumber(event.target.value)
  }
 return(
    <div>
      
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input
                  value={newName}
                  onChange={handleChangeName}                  
                />
        </div>
        <div>
          number: < input 
                    value={newNumber}
                    onChange={handleChangeNumber}
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
            return <Information key={person.name} pName={person.name} pNumber={person.number} />
          })
        }
        
      </div>
      
    </div>
  )
}

export default App