
/**
  2.15: Phonebook step7
  Let's return to our phonebook application.

  Currently, the numbers that are added to the phonebook
  are not saved to a backend server. Fix this situation.

*/

import { useState, useEffect } from 'react'
import _ from 'lodash'
import personsService from './services/persons'


const InformationTable = ({pSearch, persons}) =>{
  if( pSearch === ''){
      return (
        <>
        {
          persons.map( person => <Information key={person.id} pName={person.name} pNumber={person.number}/> )
        }
        </>
      )
  }else{
    const filteredPersons = persons.filter( person => { 
      return person.name.toLowerCase().includes( pSearch.toLowerCase() )
     } )
    return(
      <>
      {
        filteredPersons.map( person => <Information key={person.id} pName={person.name} pNumber={person.number} /> )
      }
      </>
    )
  }
}


const Information = ({ pName, pNumber }) =>{
  return(
    <div>{pName} {pNumber}</div>
  )
}


const Filter = ({ psearch, handleFilter }) => {
  return(
    <>
      <div>{/**Is this fine outside the form or without a form?*/}
        filter show with <input 
                            value={psearch}
                            placeholder={"Enter a filter"}
                            onChange={handleFilter}
                          />
      </div>
    </>
  )
}


const Input = ({text, newInput, placeholder, handleChange}) => {
  return(
    <>
      <div>
          {text}: <input
                  value={newInput}
                  placeholder={placeholder}
                  onChange={handleChange}                  
                />
        </div>
    </>
  )
}


const PersonForm = ({ addName, newName, handleChangeName, newNumber, handleChangeNumber }) => {
  return(
    <div>
      
      <form onSubmit={addName}>
          <Input text={"name"} newInput={newName} 
                 placeholder={"Enter a name"}
                 handleChange={handleChangeName}
                 />  
          
          <Input text={"number"} newInput={newNumber}
                 placeholder={"Enter a number"} 
                 handleChange={handleChangeNumber}
                 />
        
        <div>
          <button type="submit">add</button>
        </div>

      </form>
    </div>
  )
}


const App = () => {


  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch ] = useState('')

  useEffect( () => {
    personsService
      .getAll()
      .then(  personInfo => {
        setPersons(personInfo)
      } )
  }, [] )

  const addName =(event)=> {
    event.preventDefault() // Prevents default action of "onSubmit"/submitting forms
    const newPerson = { name: newName, number: newNumber, id: persons.length + 1 }
    
    // Is this the best way to do this???
    if( (persons.filter( person => person.name.toLowerCase() === newPerson.name.toLowerCase() )).length === 0 ){
      personsService
      .create( newPerson )
      .then( response => { 
        setPersons( persons.concat( response ))
        setNewName('')
        setNewNumber('')
      })
      
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
  const handleFilter = (event) =>{
    setSearch(event.target.value)
  }

 return(
    <div>
      <h2>Phonebook</h2>
      <Filter pSearch={search} handleFilter={handleFilter}/>
      <h2>add a new</h2>
      <PersonForm addName={addName} newName={newName} newNumber={newNumber}
               handleChangeName={handleChangeName} 
               handleChangeNumber={handleChangeNumber}/>
      <h2>Numbers</h2>
      <div>
        <InformationTable pSearch={search} persons={persons} /> 
      </div>
      
    </div>
  )
}

export default App