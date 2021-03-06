import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Weather from './Weather'

const Country = ({countryToDisplay}) => {

    const [ weather, setWeather ] = useState({})
    const api_key = process.env.REACT_APP_API_KEY
    const lat = countryToDisplay.capitalInfo.latlng[0]
    const lon = countryToDisplay.capitalInfo.latlng[1]
    const apiCall = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`

    
    useEffect(() => {
        axios
        .get(apiCall)
        .then(response => {setWeather(response.data)
        })
    }, [apiCall]) 

    const countryLanguages = Object.values(countryToDisplay.languages)

    const displayWeather = Object.keys(weather).length===0 
    ? '' 
    : <Weather countryInfo={countryToDisplay} weatherReport={weather} />
    
    return (
        <>
        <h2>{countryToDisplay.name.common}</h2>
        <p>capital {countryToDisplay.capital[0]}</p>
        <p>area {countryToDisplay.area}</p>
        <h4>Languages</h4>
        <ul label='Languages'>{countryLanguages.map(language => <li key={language}>{language}</li>)}</ul>
        <img src={countryToDisplay.flags.png} alt="weather" />
        {displayWeather}
        </>
    )
}

export default Country