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

  export default PersonForm