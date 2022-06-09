import { useState } from 'react'
import Button from './components/Button'
import StatisticLine from './components/StatisticLine'

const History = ({ good, neutral, bad, allClicks }) => {
  const all = good + neutral + bad
  const average = (good + neutral + (bad * -1))/all
  const positive = good/all

  console.log('all', allClicks)

  if (allClicks.length === 0) {
    return null
  }

  return (
    <div>
      <h1>Statistics</h1>
      <table>
        <tbody>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={all} />
      <StatisticLine text="average" value={average} />
      <StatisticLine text="positive" value={positive} />
      </tbody>
      </table>
      
      
     
    </div>
  )
  
}



const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleGood = () => {
    setGood(good + 1)
    setAll(allClicks.concat('Y'))
  }
  const handleNeutral = () => {
    setNeutral(neutral + 1)
    setAll(allClicks.concat('Y'))
  }
  const handleBad = () => {
    setBad(bad + 1)
    setAll(allClicks.concat('Y'))
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={handleGood} text='good' />
      <Button handleClick={handleNeutral} text='neutral' />
      <Button handleClick={handleBad} text='bad' />
    
      <History good={good} neutral={neutral} bad={bad} allClicks={allClicks} />
    </div>
  )
}

export default App