/**
 * 2.11 The Phonebook Step6.
 * Modify the application such that the initial 
 * state of the data is fetched from the server using the axios-library. 
 * 
 * Complete the fetching with an Effect hook.
 * 
 */

import { useState, useEffect } from 'react'
import _ from 'lodash'
import axios from 'axios'

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
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then( response => {
        console.log('data')
        console.log(response)
        setPersons(response.data)
      } )
  }, [] )

  const addName =(event)=> {
    event.preventDefault() // Prevents default action of "onSubmit"/submitting forms
    const newPerson = { name: newName, number: newNumber, id: persons.length + 1, show: true }
    
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