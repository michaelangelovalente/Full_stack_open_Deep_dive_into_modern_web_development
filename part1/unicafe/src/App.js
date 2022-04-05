import {useState} from 'react'
/**
 * 1.8 unicafe step3
 * 
 * Refactor your application so that displaying the statistics is 
 * extracted into its own Statistics component. 
 * The state of the application should remain in the App root component.
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


const StatVal = ({text, val, optional}) =>  <div>{text} {val} {optional}</div>

const Statistics = (props) => {
  const all_values = () => props.value_g + props.value_n + props.value_b
  const avg = () => {
    let n_vals = all_values()
    if( n_vals === 0 ){
      return 0
    }
    return (props.value_g - props.value_b)/ n_vals
  }

  const pos_percent = () =>{
    let n_vals = all_values()
    if( n_vals === 0 ){
      return 0
    }
    return (props.value_g * 100)/n_vals
  }

  return(
    <div>
      <h1>statistics</h1>    
      <div>
        <StatVal text={props.text_g} val={props.value_g}/>
        <StatVal text={props.text_n} val={props.value_n}/>
        <StatVal text={props.text_b} val={props.value_b}/>

        <StatVal text={props.text_all} val={all_values()}/>
        <StatVal text={props.text_average} val={avg()} />
        <StatVal text={props.text_positive} val={pos_percent()} optional={"%"} />
        
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
