/*Useful for not repeating code twice */
const Hello = (props) => {
    /*Props is considered an object
        props = {
            name: 'Arto Hellas',
            age: 35,
        }
        cleaner solution is
        to streamline the values 
        of the properties into 2 variables.
    */

   /*const name = props.name
   const age = props.age*/

   /*Destructuring makes the assignment of variables easier
        props = {
            name: 'Arto Hellas'
            age: 35
        }

        the below expression would assign
        name <- 'Arto Hellas'
        age <- 35
   
    const {name, age} = props
    const bornYear = () => new Date().getFullYear() - age

    Even better would be, instead of declaring the component as 
    const Hello = (props) => { ... } 
    A better version would be 
    const Hello = ( { name, age } ) => { ... }
    */

    return(
        <div>
            <p>Hello {name}, you are {age} years old</p>
            <p>So you were probably born in { bornYear() }</p>
        </div>
    )
}

const App = () =>{
    const name = 'Peter'
    const age = 10

    return(
        <div>
            <h1>Greetings</h1>
            <Hello name="Maya" age={26+10}/>
            <Hello name={name} age={age}/>
        </div>
    )
}

export default App;

/*
Two equivalent function definitions:
const bornYear = () => new Date().getFullYear() - age;

const bornYear = () => {
    return new Date().getFullYear() - age;
}
*/