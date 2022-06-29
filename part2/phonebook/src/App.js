
/**
2.19: Phonebook step11
  Use the improved error message example from part 2 as a guide to show a notification that 
  lasts for a few seconds after a successful operation is executed (a person is added or a number is changed)
*/

import { useState, useEffect } from 'react'
import _ from 'lodash'
import personsService from './services/persons'
import Notification from './components/Notification'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import InformationTable from './components/InformationTable'


const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch ] = useState('')
  const [confirmationMess, setConfirmationMess ] = useState(null)

  useEffect( () => {
    personsService
      .getAll()
      .then(  personInfo => {
        setPersons(personInfo)
      } )
  }, [] )


  const handleConfirmation =(action, name)=>{
    const addedMessage = `${action} ${name}`
    setConfirmationMess(addedMessage)
    setTimeout( ()=>{ setConfirmationMess( null)}, 5000 )
  }

  const addName =(event)=> {
    event.preventDefault() // Prevents default action of "onSubmit"/submitting forms
    const newPerson = { name: newName, number: newNumber, id: persons.length + 1 }
    let addedMessage = '';

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
          handleConfirmation('Added', response.name)
        })
      
    }else{
      if ( window.confirm( `${newPerson.name} is already added to phonebook, replace the old number with a new one?`) ) {
        const existingPerson = persons.find( person => person.name.toLowerCase() === newPerson.name.toLowerCase() );
        const modifiedPerson ={ ...existingPerson, number: newPerson.number }
        personsService
          .update( modifiedPerson, modifiedPerson.id )
          .then( response =>{
            //setPersons( persons.concat( response)) //is wrong
            setPersons( persons.map( person => person.id !== modifiedPerson.id ? person : modifiedPerson))
            setNewName('')
            setNewNumber('')
            handleConfirmation('Modified', modifiedPerson.name ) 
<<<<<<< HEAD
          })        
=======
          })
          .catch( error =>{
              
              setConfirmationMess(`Information of ${modifiedPerson.name} has already been removed from the server`)
              setErrorMessage(true)
              setPersons( persons.filter( person =>{ return person.id !== modifiedPerson.id }) )
              setTimeout( ()=>{ 
                setConfirmationMess(null)
                setErrorMessage(false)
              },15000)
            }
            
          )       
>>>>>>> 8878fc3 (ex 2.20: The phonebook step12 -done)
      }
      

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
        .catch( error => {
          setPersons( persons.filter( person => person.id !==id ) )
        })      
    }
    
  }
 return(
    <div>
      <h2>Phonebook</h2>
      <Notification message={confirmationMess} />
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