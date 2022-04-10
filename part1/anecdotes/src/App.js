import {useState} from 'react'

/**
 * 1.14*: anecdotes step3
 * 
 * Now implement the final version of
 * the application that displays the anecdote
 * with the largest number of votes.
 * 
 * 
 ****/

const buttonStyle = {
  margin: "3px",
  border: '2px grey solid',
}

const Button = ({text, handleFunc, style}) => <button onClick={handleFunc} style={buttonStyle}>{text}</button>
const Anecdotes = (props) => {
  return(
    <div>
      <h1>{props.header}</h1>
      <div>
        {props.anecdotes}
      </div>
    </div>
    
  )
}

const Votes = (props) => <div>has {props.numberOfVotes} votes</div>

const AnecdoteMaxVotes = (props) => {
  if( props.maxVotes == -1 ){
    return(
      <div>
        <Anecdotes anecdotes={"No anecdote was voted"} header={props.textForH}/>
      </div>
    )
  }
  return(
    <div>
      <Anecdotes anecdotes={props.anecdoteWithMaxV} header={props.textForH}/>
      <Votes numberOfVotes={props.maxNumVotes}/>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [selected, setSelected] = useState(0)
  const [max, setMax] = useState(-1)
  
  const [vote, setVote] = useState(new Array(anecdotes.length).fill(0))

  const randNum = () => {
    let retval = Math.floor(Math.random() * anecdotes.length)
    setSelected(retval)
  }

  const addVote = () => {
    let points = [...vote]
    points[selected]+=1
    if( max === -1 || points[max] < points[selected]){
      setMax( selected )
    } 
    setVote(points)
   
  }
  

  return(
    <>
      <div>
        <Anecdotes anecdotes={anecdotes[selected]} header='Anecdote of the day'/>
        <Votes numberOfVotes={vote[selected]}/>
        <Button text="votes" handleFunc={()=> addVote()}/>
        <Button text="next anecdote" handleFunc={()=> randNum() } />
      </div>
      <AnecdoteMaxVotes textForH="Anecdote with most votes" 
        maxVotes={max} anecdoteWithMaxV={anecdotes[max]} maxNumVotes={vote[max]}/>
      
    </>
  )
}
export default App;
