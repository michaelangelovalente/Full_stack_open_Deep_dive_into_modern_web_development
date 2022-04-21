/**
 * 
 * Part 2.4 course information step9
 * 
 * Extend the applications to allow for an
 * arbitrary number of courses.
 * 
 */


const Course = ( { course } ) => {
  return(
    <div>
      <Header  courseName={ course.name } />
      <Content partsContent={ course.parts} />
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

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundaments of React',
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
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
    {
      courses.map( course => <Course key ={course.id} course={course}/>
       )
      
    }
      
    </div>
  )

  }
  
  


export default App