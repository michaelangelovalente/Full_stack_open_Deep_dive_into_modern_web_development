
/*App.js*/
const App = (props) => {
    const {counter} = props
    return (
        <div>{counter}</div>
    )
}
export default App


/*index.js*/
import ReactDOM from 'react-dom'
import App from './App'

let counter = 1

/*ReactDOM.render(
    <App counter={counter} />,
    document.getElementById('root')
)
rerendering has been wrapped inside refresh()
*/

/*
const refresh = () => {
    ReactDOM.render( 
        <App counter={counter} />,
        document.getElementById('root')
    )
}

refresh();
counter+=1;

refresh();
counter+=1;


refresh();
counter+=1;
*/


/* A more interseting version with setInterval*/
const refresh = () => {
    ReactDOM.render( 
        <App counter={counter} />,
        document.getElementById('root')
    )
}

setInterval(()=> {
    refresh()
    counter += 1;
}, 1000);
/*This version though is not recommended to re-render components*/
