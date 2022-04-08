import {useState} from 'react'

/**
 * 1.13 anecdotes step 1
 *  -->  Solution version with key->val object.
 * 
 *  Add the array of oneliners showed on the site.
 * 
 *  Add a button that can be clicked to display a 
 *  random anecdote from the field of software engineering:
 ****/

const buttonStyle = {
  margin: "3px",
  border: '2px grey solid',
}

const Button = ({text, handleFunc, style}) => <button onClick={handleFunc} style={buttonStyle}>{text}</button>
const Anecdotes = (props) => {
  return(
    <div>
      {props.anecdotes}
    </div>
  )
}

const Votes = (props) => <div>has {props.numberOfVotes} votes</div>

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

  
  const [vote, setVote] = useState({ 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 })

  const randNum = () => {
    let retval = Math.floor(Math.random() * anecdotes.length)
    setSelected(retval)
  }

  const addVote = (num) => {
    
    let points = {...vote}
    points[selected]+=1
    setVote(points)

  }
  


  return(
    <div>
      <Anecdotes anecdotes={anecdotes[selected] }/>
      <Votes numberOfVotes={vote[selected]}/>
      <Button text="votes" handleFunc={()=> addVote(vote)}/>
      <Button text="next anecdote" handleFunc={()=> randNum() } />
      
    </div>
  )
}
export default App;
