import React from 'react'

/**
 * 
 * 'Part 2.5 seperate module'
 * 
 * Declare the Course component as a separate module, 
 * which is imported by the App component.
 * You can include all subcmponents
 * of the course into the same module.
 * 
 * 
 */


 const Course = ( { course } ) => {
    return(
      <div>
        <Header  courseName={course.name} />
        <Content partsContent={course.parts} />
        <Total key={course.id} partsNumOfEx={course.parts}/>
      </div>
    )
  }
  
  const Total = ({ partsNumOfEx }) => {
    let totalAmount = partsNumOfEx.reduce( ( prevVal, currVal ) => {
      return prevVal + currVal.exercises
    }, 0 )
    
    return(
      <>
      <p> <b>Total of {totalAmount} exercises </b></p>
      </>
    )
  }
  
  
  const Header = (props) => {
    return(
      <>
      <h1>{props.courseName}</h1>
      </>
    )
  }
  
  
  const Content = (props) => {
    const { partsContent } = props
    return(
      <div>
        {
          partsContent.map( part =>
            <Part key={part.id} 
              partName={part.name} partExercises={part.exercises} />
          )
        }
        
      </div>
    )
  }
  
  const Part = (props) => {
    return(
      <>
      <p>{props.partName} {props.partExercises}</p>
      </>
    )
  }

  export default Course