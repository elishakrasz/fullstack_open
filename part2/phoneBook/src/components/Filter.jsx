import React from 'react'

const Filter = ({ handleFilter, search }) => {
  return (
    <div>
        <h1>Filter by name:</h1>
        <input 
        value={search}
        onChange={e => {handleFilter(e)} }></input>
    </div>
  )
}

export default Filter