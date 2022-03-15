

/*Total renders the total number of exercises.*/
const Total = (props) => {
  return(
    <>
    <p>Number of exercises {props.ex1 + props.ex2 + props.ex3}</p>
    </>
  )
}

/*Content renders the parts and their number of exercises */
const Content = (props) => {
  return(
    <>
    <p>{props.partName} {props.exercises}</p>
    </>
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
      <Content partName={part1} exercises={exercises1} />
      <Content partName={part2} exercises={exercises2} />
      <Content partName={part3} exercises={exercises3} />
      <Total ex1={exercises1} ex2={exercises2} ex3={exercises3}/>
    </div>
  )
}
export default App