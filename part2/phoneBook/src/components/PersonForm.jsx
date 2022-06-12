import React from 'react'

const PersonForm = ({ handleName, newName, handleNumber, newNumber }) => {
  return (
    <div>
         <div>
          name: <input onChange={handleName} value={newName} />
        </div>
        <div onChange={handleNumber} value={newNumber}>number: <input /></div>
    </div>
  )
}

export default PersonForm