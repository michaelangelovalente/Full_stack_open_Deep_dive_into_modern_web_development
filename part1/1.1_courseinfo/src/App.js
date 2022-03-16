

/*Total renders the total number of exercises.*/
const Total = (props) => {
  return(
    <>
    <p>Number of exercises {props.ex1 + props.ex2 + props.ex3}</p>
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
      <Part partName={props.part1} exercises={props.exN1}/>
      <Part partName={props.part2} exercises={props.exN2}/>
      <Part partName={props.part3} exercises={props.exN3}/>
    </div>
  )
}

/*Header takes care of rendering the name of the course*/
const Header = (props) => {
  return(
    <>
    <h1>{props.name}</h1>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return( 
    <div>
      <Header name={course}/>
      <Content part1={part1} part2={part2} part3={part3} 
      exN1={exercises1} exN2={exercises2} exN3={exercises3} />
      <Total ex1={exercises1} ex2={exercises2} ex3={exercises3}/>
    </div>
  )
}
export default App
