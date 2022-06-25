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
        <span>{pName}{" "}{pNumber}</span>
        <span><button onClick={ handleDeletion}>delete</button></span>
        </div>
      </div>
      
    )
  }
  
  
  
export default InformationTable  