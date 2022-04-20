

/*Total renders the total number of exercises.*/
/*
const Total = (props) => {
  return(
    <>
    <p>Number of exercises {props.parts.parts[0].exercises + props.parts.parts[1].exercises + props.parts.parts[2].exercises}</p>
    </>
  )
}
*/





/**
 * 
 * Part 2.1 course information step6
 * The exercises teaches well how to start using 
 * the map() high order function.
 * 
 * Define a component responsible for formatting a single course called
 * 'Course'
 * Course component will have the following structure 
 * App
 *  Course
 *    Header
 *    Content
 *      Part
 *      Part
 *      ...
 * 
 * - There is no need for the sum of the exercises.
 * - The app must work regardless of the number of parts a course has.
 * - the console must not show errors
 * 
 */


const Course = ( { course } ) => {
  return(
    <div>
      <Header  courseName={ course.name } />
      <Content partsContent={ course.parts} />
    </div>
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
      }
    ]
  }
  
  
  return <Course course={course}/>
}
export default App