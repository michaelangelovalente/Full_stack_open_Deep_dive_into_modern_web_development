import {useState} from 'react'
/**
 * 1.10 unicafe step5
 * 
 * Extract the following two components:
 * 
 *-> Button for defining the buttons used for submitting feedback
 *-> StatisticLine for displaying a single statistic, e.g. the average score.
 * 
 * To be clear: the StatisticLine component always displays a single statistic, 
 * meaning that the application uses multiple components for rendering all of the statistics:
 * 
 */
const buttonStyle = {
  margin: "3px",
  border: '2px grey solid',
}

const Button = ({style, handleClick, text}) => <button style={style} onClick={handleClick}>{text}</button>
const Feedback = (props) => {
  return(
    <div>
      <h1>give feedback</h1>
      <div>
        <Button style={buttonStyle} handleClick={props.handleGood} text={'good'}/>
        <Button style={buttonStyle} handleClick={props.handleNeutral} text={'neutral'}/>
        <Button style={buttonStyle} handleClick={props.handleBad} text={'bad'} />
      </div>
      
    </div>
  )
}


const StatisticLine = ({text, value, optional}) =>  <div>{text} {value} {optional}</div>

const Statistics = (props) => {
  const all_values = () => props.value_g + props.value_n + props.value_b
  let n_vals = all_values()

  if( n_vals == 0 ){
     return (
       <div>
         <h1>statistics</h1>
          <p>No feedback given</p>
       </div>
     )
  }
  const avg = () => {
    return (props.value_g - props.value_b)/ n_vals
  }

  const pos_percent = () =>{
    return (props.value_g * 100)/n_vals
  }

  return(
    <div>
      <h1>statistics</h1>    
      <div>
        <StatisticLine text={props.text_g} value={props.value_g}/>
        <StatisticLine text={props.text_n} value={props.value_n}/>
        <StatisticLine text={props.text_b} value={props.value_b}/>

        <StatisticLine text={props.text_all} value={ all_values()}/>
        <StatisticLine text={props.text_average} value={avg()} />
        <StatisticLine text={props.text_positive} value={pos_percent()} optional={"%"} />
        
      </div>
    </div>
    
    
  )
}


const App = () => {
  // save clicks of eaach button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const funcHandleGood = (newVal) =>{
      setGood( newVal )
  }

  const funcHandleNeutral = (newVal) => {
    setNeutral( newVal )
  }

  const funcHandleBad = (newVal) => {
    setBad(newVal)
  }

  return(
    <>
    
    <Feedback handleGood={() => funcHandleGood(good+1) }
              handleNeutral ={ () => funcHandleNeutral(neutral+1)}
              handleBad={ ()=> funcHandleBad(bad+1) }/>

    <Statistics text_g={'good'} text_n={'neutral'} text_b={'bad'} 
                value_g={good} value_n={neutral} value_b={bad}

                text_all={'all'}
                text_average={'average'}
                text_positive={'positive'} 
                />
    </>
    
  )
}

export default App;
