import React from 'react'
import Part from './Part'

function Content({ parts }) {
    console.log(parts)
  return (
    <div>
        {parts.map((item) => {
            return(
                <Part part={item.name} exercise={item.exercises} key={item.exercises} />
            )
        })}
    </div>
  )
}

export default Content