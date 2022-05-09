/**
 * 2.10 The Phonebook Step5.
 * 
 * Refactor your application by extracting suitable parts
 * into  new components.
 * Maintain the application's state and all event handlers
 * in the 'App' root component.
 * 
 * 
 * It is sufficient to extract 'three' components from the application.
 * (
 *  example:
 *  - search filter (done)
 *  - form for adding new people into the phonebook (done)
 *  - component that renders all people from the phonebook (done)
 *  - component that renders a single person's details (done)
 * )
 * 
 * 
 */

import { useState } from 'react'
import _ from 'lodash'

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

const SearchFilter = ({ psearch, handleFilter }) => {
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
const Input = (props) => {
  return(
    <>
      <div>
          {props.text}: <input
                  value={props.newInput}
                  placeholder={props.placeholder}
                  onChange={props.handleChange}                  
                />
        </div>
    </>
  )
}
const AddForm = (props) => {
  return(
    <div>
      
      <form onSubmit={props.addName}>
          <Input text={"name"} newInput={props.newName} 
                 placeholder={"Enter a name"}
                 handleChange={props.handleChangeName}
                 />  
          
          <Input text={"number"} newInput={props.newNumber}
                 placeholder={"Enter a number"} 
                 handleChange={props.handleChangeNumber}
                 />
        
        <div>
          <button type="submit">add</button>
        </div>

      </form>
    </div>
  )
}
const App = () => {
  const [persons, setPersons] = useState([
    {id:1, name: 'Arto Hellas', number:'39-44-5323523'}, 
    {id:2, name: 'Bart Simpsons', number:'40-55-6433523'},
    {id:3, name: 'Lada Lovelace', number:'49-66-63453523'},
    {id:4, name: 'bArt SImpsons', number:'40-55-6433523'},
    {id:5, name: 'BartOLOMEw JoJo Simpsons', number:'40-55-6433523'}
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch ] = useState('')


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
      <SearchFilter pSearch={search} handleFilter={handleFilter}/>
      <h2>add a new</h2>
      <AddForm addName={addName} newName={newName} newNumber={newNumber}
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