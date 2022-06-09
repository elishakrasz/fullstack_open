import React from 'react'

function Anecdote({ heading, anecdote, votes }) {
  return (
    <div>
			<h1>{heading}</h1>
			<p>{anecdote}</p>
			<p>has: {votes} votes</p>
		</div>
  )
}

export default Anecdote