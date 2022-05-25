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
const OneResult = ({countryFilter}) => {

    const langs = Object.keys( countryFilter.language ).map( keylang => {
        return countryFilter.language[keylang]
    } )

    return(
        <>
            <h1 >{countryFilter.name.common}</h1>
            <CapitalandArea capital={countryFilter.capital} area ={countryFilter.area}/>
            <h3>languages:</h3>
            <Languages languages={ langs } />
            <Image img={countryFilter.flags.png} text={"flag"}/>
        </>
    )

}


const Names = (props) =>{
    const [show, setShow] = useState(false)

    const handleClick =() => {
        setShow(!show);
    }

    let countryInformation = "";
    if( show ){
        countryInformation = <OneResult countryFilter={props.country}/>
    }
    return(
        <div>
            { props.country.name.common}    
            <button onClick={handleClick}>{show ? 'hide':'show'}</button>
            <div>
                {countryInformation}
            </div>
        </div>
    )
}
const CountryNames  = (props) =>{
    console.log( props)
    return(
        <>
            {
                props.countryFilter.map( country => {
                    return <Names key={country.name.official} country={country} />
                } )
            }
        </>
    )
}

const CountryTable =({ countries, searchcountry}) => {

    const countryFilter = countries.map( country => { 
        return { name:country.name, area: country.area, capital: country.capital, flags: country.flags, language: country.languages } })
        .filter( searchedCountry => (searchedCountry.name.common + searchedCountry.name.official).toLowerCase().includes( searchcountry.toLowerCase() ) )

    if( countryFilter.length == 1){
        return(
            <div>
                <OneResult countryFilter={countryFilter[0]}/> 
            </div>
        )
    }else if( countryFilter.length <= 10){
        return(
            <div>
              <CountryNames countryFilter={countryFilter} />
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
        console.log("Clicked")
    }
    return(
        <>
        <SearchBar searchcountry={searchcountry} text={"Enter a country..."} handleChangecountry={handleChangecountry}/>
        <CountryTable countries={countries} searchcountry={searchcountry}/>
        </>
    )
}
export default App;
