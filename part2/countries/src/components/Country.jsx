import React from 'react'

const Country = ({ country, toggle, show }) => {
    
  return (
    <div key={country.id}>
        <h4>{country.name.common} <button onClick={toggle}>Show</button></h4> 

    {show && <div>
            <h4>Capital: {country.capital}</h4>
            <h4>Area: {country.area}</h4>

            <h3>languages:</h3>
                {/* {country.languages.map(lang => (

                    <ul>
                        <li>{lang}</li>
                    </ul>
                ))} */}
                {country.language}
            <img src={country.flags.svg} />

            <h3>Weather in Capital</h3>
        </div>}
    </div>
  )
}

export default Country