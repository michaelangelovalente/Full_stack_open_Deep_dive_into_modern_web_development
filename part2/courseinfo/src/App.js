

/*Total renders the total number of exercises.*/
const Total = (props) => {
  return(
    <>
    <p>Number of exercises {props.parts.parts[0].exercises + props.parts.parts[1].exercises + props.parts.parts[2].exercises}</p>
    </>
  )
}



/*Part renders the name and number of exercises of one part.*/
const Part = (props) => {
  return(
    <>
    <p>{props.partName} {props.exercises}</p>
    </>
  )
}
/* Content renders three Part components 
of which each renders the name and number of exercises */
const Content = (props) => {
  return(
    <div>
      <Part partName={props.partsContent.parts[0].name} exercises={props.partsContent.parts[0].exercises}/>
      <Part partName={props.partsContent.parts[1].name} exercises={props.partsContent.parts[1].exercises}/>
      <Part partName={props.partsContent.parts[2].name} exercises={props.partsContent.parts[2].exercises}/>
    </div>
  )
}

/*Header takes care of rendering the name of the course*/
const Header = (props) => {
  return(
    <>
    <h1>{props.courseName.name}</h1>
    </>
  )
}



const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      }
    ]
  }
  
  
  return( 
    <div>
      <Header courseName={course}/>
      <Content partsContent={course}/>
      <Total parts={course}/>
    </div>
  )
}
export default App