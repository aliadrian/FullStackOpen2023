import React from 'react'
import { useState, useEffect } from 'react'

const Button = ({ handleClick, text }) => <div><button onClick={handleClick}>{text}</button></div>

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  let [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  const [anecdote, setAnecdote] = useState('')

  const setToSelected = (newValue) => {
    newValue = Math.floor(Math.random() * anecdotes.length);
    setSelected(newValue);
  }

  useEffect(() => {
    const findMosteVoted = () => {
      const maxVotes = votes.indexOf(Math.max(...votes));
      const mostVotedAnecdote = anecdotes[maxVotes];
      setAnecdote(mostVotedAnecdote);
    };

    findMosteVoted();
  }, [votes]);

  const voteForAnecdote = (index) => {
    const newVotes = [...votes];
    newVotes[index] += 1;
    setVotes(newVotes);
    // console.log(newVotes);
  }

  function n() {
    if ((/[^0]/).exec(votes.join(""))) {
      return `"${anecdote}"`;
    } else {
      return 'At present, there are no anecdotes with the highest number of votes.';
    }
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <br />
      <span>has {votes[selected]} {votes[selected] === 1 ? 'vote' : 'votes'}</span>
      <div style={{ display: 'flex', gap: '0.25rem' }}>
        <Button handleClick={() => voteForAnecdote(selected)} text="vote" />
        <Button handleClick={() => setToSelected(selected)} text="next anecdote" />
      </div>
      <h1>Anecdote with most votes</h1>
      {anecdote && (
        <div>
          <p>{n()}</p>
          <span>
            {Math.max(...votes) === 0
              ? 'There is no anecdote with any votes'
              : `has ${Math.max(...votes)} ${Math.max(...votes) === 1 ? 'vote' : 'votes'}`}
          </span>
        </div>
      )}
    </div>
  )
}
export default App