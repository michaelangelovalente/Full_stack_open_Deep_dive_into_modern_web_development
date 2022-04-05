import {useState} from 'react'
/**1.6 unicafe step1
 * 
 * The app needs to work only
 * during single browser session.
 * 
 * A refresh may cause the collected feedback to disappear.
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


const StatVal = ({text, val}) =>  <div>{text} {val} </div>

const Statistics = (props) => {
  return(
    <div>
      <h1>statistics</h1>    
      <div>
        <StatVal text={props.text_g} val={props.value_g}/>
        <StatVal text={props.text_n} val={props.value_n}/>
        <StatVal text={props.text_b} val={props.value_b}/>
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
                value_g={good} value_n={neutral} value_b={bad}/>
    </>
    
  )
}

export default App;
