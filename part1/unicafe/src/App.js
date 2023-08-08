import { useState } from 'react'

const Statistics = (props) => {
  return (
    <>
    <h1>statistics</h1>
    <p>good {props.good}</p>
    <p>neutral {props.neutral}</p>
    <p>bad {props.bad}</p>
    </>
  )
}

const Button = (props) => <button onClick={props.handleClick}>{props.text}</button>

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  //handler
  const handleGood = () => setGood(good +1)
  const handleNeutral = () => setNeutral(neutral +1)
  const handleBad = () => setBad(bad +1)

  //statistics
  const total = good + neutral + bad
  const average = () => (good - bad) / total
  const positive = () => (good / total) * 100 + " %"

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGood} text="good"></Button>
      <Button handleClick={handleNeutral} text="neutral"></Button>
      <Button handleClick={handleBad} text="bad"></Button>
      <Statistics good={good} neutral={neutral} bad={bad}/>
      <p>{total}</p>
      <p>average {average()}</p>
      <p>positive {positive()}</p>
    </div>
  )
}

export default App;
