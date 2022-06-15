import React from 'react'

const Persons = ({ persons, people }) => {
  return (
    <div>
        <div>
        {persons.map((person, i) => {
          return <h3 key={i}>{person.name} {person.number}</h3>;
        })}
      </div>
      <div>
        <h1>Filtered:</h1>
        {people.map((person, i) => {
          return <h3 key={i}>{person.name} {person.number}</h3>;
        })}
      </div>
    </div>
  )
}

export default Persons