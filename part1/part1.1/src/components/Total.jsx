import React from 'react'

function Total({ parts }) {
   console.log('p', parts)
    const sum = parts[0].exercises + parts[1].exercises + parts[2].exercises
  return (
    <div>
        <p>Number of exercises {sum} </p>
    </div>
  )
}

export default Total