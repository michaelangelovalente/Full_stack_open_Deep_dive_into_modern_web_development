/**
 * 2.12* Data for countries, step1
 * Data in machine-readable format 
 * from REST API: https://restcountries.com/v2/all
 * 
 * Create an application, in which one can look at data
 * of various countries. 
 * 
 * The country to be shown is found by typing 
 * a search quesry into the search query
 * into the search field.
 * 
 * If there are too many countries (over 10)
 * that match the query, then
 * the user is prompted to make
 * their query more specific.
 * 
 * When there is only one country matching the query, 
 * then the basic data of the country (eg. capital and area), 
 * its flag and the languages spoken there, are shown:
 *  -Name
 *  -Area
 *  -Languages
 *  -Flag
 * 
 */
import { useState, useEffect } from 'react'
import axios from'axios'

const CapitalandArea = ({ capital, area })=> {
    return(
        <div>
            capital { capital }<br/>
            area { area }
        </div>
    )
}

const Lang = ({ language }) =>{
    return(
        <li>{language}</li>
    )
}
const Languages = ({languages}) => {
    return(
        <div>
            <ul>
                {
                    languages.map( (language, idx) =>{
                        return <Lang key={idx} language={language}/>
                    } )
                }
            </ul>
        </div>
    )
}

const Image = ( {img, text}) => {
    return(
        <div>
            <img src = {img} alt={text} />
        </div>
    )
}
const OneResult = ({countryFilter, apikey}) => {
    const [weather, setWeather] = useState([])
    const [temperature, setTemperature ] = useState([])
    const [icon, setIcon ] = useState('')
    const [ windSpeed, setWindSpeed] = useState(-1)
    const langs = Object.keys( countryFilter.language ).map( keylang => {
        return countryFilter.language[keylang]
    } )

    useEffect( () =>{
        
        const geolocation = axios
            .get(`http://api.openweathermap.org/geo/1.0/direct?q=${countryFilter.capital}&limit=${1}&appid=${apikey}`) 
            .then( response =>{
                const { lat, lon} = response.data[0];

                axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}`)
                    .then( w_response =>{   
                        const {  weather, main, wind  } = w_response.data
                        setWeather(weather[0]);
                        setTemperature(main);
                        setIcon( `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`)
                        setWindSpeed( wind.speed )

                    } )
                
            })
        
    },[])
    

    return(
        <>
            <h1 >{countryFilter.name.common}</h1>
            <CapitalandArea capital={countryFilter.capital} area ={countryFilter.area}/>
            <h3>languages:</h3>
            <Languages languages={ langs } />
            <Image img={countryFilter.flags.png} text={"flag"}/>
            <h2>Weather in {countryFilter.capital}</h2>
            <div>
                temperature {(temperature.temp/10).toFixed(2)}° Celsius
                <div>
                    <div>{weather.description}</div>
                    <img src={icon} alt={'weather icon'} />
                    <div>wind {windSpeed} m/s</div>
                </div>
            </div>
        </>
    )

}


const Names = ({country, apikey}) =>{
    const [show, setShow] = useState(false)

    const handleClick =() => {
        setShow(!show);
    }

    let countryInformation = "";
    if( show ){
        countryInformation = <OneResult apikey={apikey} countryFilter={country}/>
    }
    return(
        <div>
            { country.name.common}    
            <button onClick={handleClick}>{show ? 'hide':'show'}</button>
            <div>
                {countryInformation}
            </div>
        </div>
    )
}
const CountryNames  = ({countryFilter, apikey}) =>{
    return(
        <>
            {
                countryFilter.map( country => {
                    return <Names apikey={apikey} key={country.name.official} country={country} />
                } )
            }
        </>
    )
}

const CountryTable =({ countries, searchcountry, apikey}) => {

    const countryFilter = countries.map( country => { 
        return { name:country.name, area: country.area, capital: country.capital, flags: country.flags, language: country.languages } })
        .filter( searchedCountry => (searchedCountry.name.common + searchedCountry.name.official).toLowerCase().includes( searchcountry.toLowerCase() ) )

    if( countryFilter.length == 1){
        return(
            <div>
                <OneResult apikey={apikey} countryFilter={countryFilter[0]}/> 
            </div>
        )
    }else if( countryFilter.length <= 10){
        return(
            <div>
              <CountryNames apikey={apikey} countryFilter={countryFilter} />
            </div>
        )
    }else{
        
        return(
            <div>
                Too many matches, specify another filter
            </div>
        )
        
    }
    
}

const SearchBar =({searchcountry, text, handleChangecountry})=>{
    return(
        <div>
            find countries <input
                                value={searchcountry}
                                placeholder={text}
                                onChange={handleChangecountry}
                            />
        </div>
    )
}

const App = () => {
    const [countries, setCountries] = useState([])
    const [searchcountry, setSearchcountry] = useState('')
    const api_key = process.env.REACT_APP_API_KEY

    useEffect( () => {
        axios
            .get('https://restcountries.com/v3.1/all')
            .then( response => {
                setCountries( response.data )
            } )
               
    }, [] )


    const handleChangecountry = (event) =>{
        setSearchcountry(event.target.value)
    }
    
    const showCountry =(event)=>{
        event.preventDefault()
    }
    return(
        <>
        <SearchBar searchcountry={searchcountry} text={"Enter a country..."} handleChangecountry={handleChangecountry}/>
        <CountryTable apikey={api_key} countries={countries} searchcountry={searchcountry}/>
        </>
    )
}
export default App;
