/**
 * 
 * Part 2.3 course information step8
 * 
 * Use reduce() to sum the number of exercises.
 * 
 */


const Course = ( { course } ) => {
  return(
    <div>
      <Header  courseName={ course.name } />
      <Content partsContent={ course.parts} />
      <Total partsNumOfEx={course.parts}/>
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

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }
  
  
  return <Course course={course}/>
}
export default App