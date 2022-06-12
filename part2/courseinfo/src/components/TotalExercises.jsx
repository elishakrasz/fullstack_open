import React from 'react'

export const TotalExercises = ({ course }) => {
    const parts = course.parts
    const total = parts.reduce((s,p) => s + p.exercises, 0)
    console.log(total)
  return (
    <div>Total Exercises: {total}</div>
  )
}
