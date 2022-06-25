
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

  export default Filter