import React from 'react'
import Anecdote from './Anecdote';

function BestAnecdote({ anecdotes, votes }) {
    let bestAnecdote = votes.indexOf(Math.max(...votes));
	return (
		<Anecdote
			heading="The Most Popular Anecdote"
			anecdote={anecdotes[bestAnecdote]}
			votes={votes[bestAnecdote]}
		/>
	);
}

export default BestAnecdote