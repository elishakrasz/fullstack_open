import React from 'react'

const Search = ({ searchTerm, handleSearch }) => {
  return (
    <div>
       Find Countries: <input value={searchTerm} onChange={handleSearch} />
    </div>
  )
}

export default Search