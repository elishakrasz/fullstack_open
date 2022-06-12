import React from 'react'

const Search = ({ countries, searchTerm, handleSearch }) => {

    // const countryList = countries.filter((country) => {
    //     return country.name.common?.toLowerCase().includes(searchTerm?.toLowerCase())
    //   })
  return (
    <div>
       Find Countries: <input value={searchTerm} onChange={handleSearch} />
    </div>
  )
}

export default Search