/*Index.js*/

import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render( <App />,
document.getElementById('root'))

/*
The application starts:

    code in APP is executed.
    The code is set to an initial application state, this is done via 
    useState hook that sets an initial state value of the variable counter.


    The counter's initial value in the example at 06... is 0.
    It has the components Display, and Button
    The Buttons component have event handlers, these are used to change the application's state.


    Clicking the button causes the event handler to use the setCounter function to change the state of the app.
    ( Calling a function that changes a state will cause the page to rerender)
    

    At the click of the 'plus' button, the event handler is executed and it changes the state of the App component, 
    this causes the app to rerender, and as a consequence to this
    the subcomponents of App (Display, Button) gets rerendered.




*/