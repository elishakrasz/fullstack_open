import React from 'react'

function Header({ course}) {
  const name = course.name
  return (
    <div>
          <h1>{name}</h1>
    </div>
  )
}

export default Header