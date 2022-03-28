/*index.js*/
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render( <App />,
document.getElementById('root'))


/**App.js */
import { useState } from 'react' /* useState function is imported */

const App = (props) => {
    
    const [counter, setCounter ] = useState(0)

    setTimeout(
        () => setCounter( counter + 1),
        1000
    )
    
    console.log( 'rendering...', counter)
    
    return (
        <div>{counter}</div>
    )
}



export default App
