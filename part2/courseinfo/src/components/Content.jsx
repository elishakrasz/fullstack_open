import React from 'react'
import Part from './Part'

function Content({ course }) {
   const parts = course.parts
  return (
    <div>
        {parts.map((item) => {
            return(
                <Part part={item.name} exercise={item.exercises} key={item.id}/>
            )
        })}
    </div>
  )
}

export default Content