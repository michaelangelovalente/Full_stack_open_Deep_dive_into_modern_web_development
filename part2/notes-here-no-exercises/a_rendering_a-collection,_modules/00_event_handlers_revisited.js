const App = () => {
    const [value, setValue] = useState(10)
    
    const setToValue = (newValue) => {
        console.log('Value is now:', value)
        setValue(newValue)
    }
    return(
        <div>
            {value}
            <button onClick={() => setToValue(90)}>reset to zero</button>
        </div>
    )
}