
/**
2.17: Phonebook step9
Make it possible for users to delete entries from the phonebook. 
The deletion can be done through a dedicated button for each person in the phonebook list. 
You can confirm the action from the user by using the window.confirm method.


The associated resource for a person in the backend can be deleted by making an HTTP DELETE 
request to the resource's URL. 

If we are deleting e.g. a person who has the id 2,
we would have to make an HTTP DELETE request to the URL localhost:3001/persons/2.

No data is sent with the request.

You can make an HTTP DELETE request with the axios library in the same way that 
we make all of the other requests.

NB: You can't use the name delete for a variable because it's a reserved word in JavaScript. 
*/

import { useState, useEffect } from 'react'
import _ from 'lodash'
import personsService from './services/persons'


const InformationTable = ({pSearch, persons, handleDeletion}) =>{
  if( pSearch === ''){
      return (
        <>
        {
          persons.map( person => <Information key={person.id} 
                                              pName={person.name}
                                              pNumber={person.number}
                                              handleDeletion={() => handleDeletion(person.id)}
                                              /> )
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
        filteredPersons.map( person => <Information key={person.id} 
                                                    pName={person.name} 
                                                    pNumber={person.number} 
                                                    handleDeletion={() => handleDeletion(person.id)}
                                                    /> )
      }
      </>
    )
  }
}


const Information = ({ pName, pNumber, handleDeletion }) =>{
  return(
    <div>
      <div>
      {pName} {pNumber} 
      <button onClick={ handleDeletion}>delete</button> 
      </div>
      
    </div>
    
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
    if( ( persons.filter( person => person.name.toLowerCase() === newPerson.name.toLowerCase() ) ).length === 0 ){
      
      if(persons.filter( person => person.id === newPerson.id)){
        let new_id = 1
        while( persons.map( person_id => person_id.id   ).includes( new_id ) ){
          new_id++
        }
        newPerson.id = new_id
      }
      
      personsService
      .create( newPerson )
      .then( response => { 
        //const sortedPersons = persons.sort( (a, b) => { return ( a.id - b.id)  }).concat( response )//sort does not create a copy, but concat does
        setPersons( persons.concat( response ) )
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

  const handleDeletion =(id)=>{
    
    if( window.confirm(`Delete ${ persons.filter( name => name.id === id)[0].name } ?`)){
      personsService
        .deletePerson(id)
        .then( deleted => {
          setPersons( persons.filter( person => person.id !== id  ) )
          return deleted;
        } )      
    }
    
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
        <InformationTable pSearch={search} persons={persons} handleDeletion={handleDeletion}/> 
      </div>
      
    </div>
  )
}

export default App