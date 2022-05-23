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

const CountryTable =(props)=> {
    const countryFilter = props.countries
    .map( (country) => { 
        return {name:country.name, area: country.area, capital: country.capital, flags: country.flags, language: country.languages } })
        .filter( searchedCountry =>{ return (searchedCountry.name.common + searchedCountry.name.official)
                                                .toLowerCase()
                                                .includes( props.searchcountry.toLowerCase() ) } )

    if( countryFilter.length == 1){
        
        const singleCountry = countryFilter[0]
        const keys = Object.keys( singleCountry.language );
        const langs = keys.map( keylang => {
            return singleCountry.language[keylang]
        } )

        return(
                    <div>
                        <h1 >{singleCountry.name.common}</h1>
                        <div>
                            capital {singleCountry.capital} <br/>
                            area {singleCountry.area}
                        </div>
                        <div>
                            <h3>languages:</h3>
                            <ul> 
                                {
                                    langs.map( (language, idx) => {
                                        return <li key={idx}>{language}</li>
                                    })
                                }
                                
                            </ul>
                        </div>
                        <div>
                            <img src = {singleCountry.flags.png} alt="flag" />
                        </div>
                    </div>
                )
    }else if( countryFilter.length <= 10){
        return(
            <div>
              {
                  countryFilter.map( country => {
                     return <div key={country.name.official}> { country.name.common} </div>
                  } )
              }
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


const App = () => {
    const [countries, setCountries] = useState([])
    const [searchcountry, setSearchcountry] = useState('');

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
    
    return(
        <>
        <div>
            find countries <input
                                value={searchcountry}
                                placeholder={"Enter a country..."}
                                onChange={handleChangecountry}
                            />
        </div>
        <CountryTable countries={countries} searchcountry={searchcountry}/>
        </>
    )
}
export default App;
