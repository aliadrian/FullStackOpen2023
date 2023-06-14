import React from 'react'
import { useState } from 'react'

const StatisticLine = ({ text, value }) => {
  return (
    <React.Fragment>
      <tr>
        <td>{text}</td><td>{value}</td>
      </tr>
    </React.Fragment>
  )
}

const Statistics = (props) => {
  let positive = 0;
  let average = 0;
  let total = 0;

  if (props.total === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <div>
      <table>
        <thead>
          <StatisticLine text="good" value={props.good} />
          <StatisticLine text="neutral" value={props.neutral} />
          <StatisticLine text="bad" value={props.bad} />
          <StatisticLine text="total" value={total = props.good + props.bad + props.neutral} />
          <StatisticLine text="average" value={average = (props.good / 3).toFixed(1)} />
          <StatisticLine text="positive" value={positive = props.total <= 0 ? 0 : (props.good / props.total * 100).toFixed(1).concat(' %')} />
        </thead>
      </table>
    </ div>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0);

  const goodClicks = () => {
    const updatedGood = good + 1;
    setGood(updatedGood);
    setTotal(updatedGood + bad + neutral);
  }

  const neutralClicks = () => {
    const updatedNeutral = neutral + 1;
    setNeutral(updatedNeutral);
    setTotal(good + bad + updatedNeutral);
  }

  const badClicks = () => {
    const updatedBad = bad + 1;
    setBad(updatedBad);
    setTotal(good + updatedBad + neutral);
  }

  return (
    <div>
      <h2>give feedback</h2>
      <Button handleClick={goodClicks} text="good" />
      <Button handleClick={neutralClicks} text="neutral" />
      <Button handleClick={badClicks} text="bad" />
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} total={total} />
    </div>
  )
}

export default App