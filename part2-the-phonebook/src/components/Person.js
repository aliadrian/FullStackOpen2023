import React from 'react'

const Person = ({ person, deletePerson }) => {
  const handleDelete = () => {
    const confirmDeletion = window.confirm(`Delete ${person.name}?`)
    if (confirmDeletion) {
      deletePerson(person.id)
    }
  }
  return (
    <div>
      <span>{person.name} {person.number}</span>
      &nbsp;
      <button onClick={() => handleDelete(person.id)}>delete</button>
      <br />
    </div>
  )
}

export default Person