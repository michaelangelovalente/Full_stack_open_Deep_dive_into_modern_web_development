/*const App = () =>{
  
  const now = new Date()
  const a = 10
  const b = 20

  return(
    <div>
      <p> Hello world, it is { now.toString() } </p>
      <p>
        {a} plust {b} is { a + b }
      </p>
    </div>
  )
} 

export default App
*/

/*-----------------Multiple components ----------------*/
/*
const Hello = () => {
  return(
    <div>
      <p>Hello world</p>
    </div>
  )
}

const App = () => {
  return(
    <div>
      <h1>Greetings</h1>
      <Hello />
      <Hello />
      <Hello />
    </div>
  )
}

export default App

*/

/*------------------props: passing data to components --------------------*/
/*const Hello = (props) => {
  return(
    <div>
      <p>Hello {props.name}, you are {props.age} years old </p>
    </div>
  )
}

const App = () => {

  const name = 'Peter'
  const age = 10

  return(
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26+10} />
      <Hello name={name} age={age}/>
      
    </div>
  )
}

export default App*/

/*----------------------React components must be capitalized-----*/
/*const Footer = () => {
  return(
    <div>
      greeting app created by < a href="https://github.com/mluukkai">mluukai</a>
    </div>
  )
}
const Hello = (props) => {
  return(
    <div>
      <p>Hello {props.name}, you are {props.age} years old </p>
    </div>
  )
}
const App = () => {
  return(
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 +10} />
      <Footer />
    </div>
  )
}

export default App
*/

/*------ You can also use an array of components ------*/
/*
const Footer = () => {
  return(
    <div>
      greeting app created by < a href="https://github.com/mluukkai">mluukai</a>
    </div>
  )
}
const Hello = (props) => {
  return(
    <div>
      <p>Hello {props.name}, you are {props.age} years old </p>
    </div>
  )
}

const App = () =>{
  return[
    <h1>Greetings</h1>,
    <Hello name="Maya" age={ 26 + 10}/>,
    <Footer />
  ]
}
export default App
*/
/*----- avoiding extra div elements in the DOM-tree by using fragments----*/

/*
const Footer = () => {
  return(
    <div>
      greeting app created by < a href="https://github.com/mluukkai">mluukai</a>
    </div>
  )
}
const Hello = (props) => {
  return(
    <div>
      <p>Hello {props.name}, you are {props.age} years old </p>
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10
  return( 
    <>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10}/>
      <Hello name={name} age={age}/>
      <Footer />
    </>
  )
}

export default App*/

