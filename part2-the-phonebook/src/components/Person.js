import React from 'react'

const Person = ({ person }) => {
  return (
    <div>
      <span>{person.name} {person.number}</span>
      <br />
    </div>
  )
}

export default Person