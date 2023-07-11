import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showFilter, setShowFilter] = useState('')

  const handlePersonChange = (e) => {
    setNewName(e.target.value)
  }

  const handleNameChange = (e) => {
    setShowFilter(e.target.value)
  }

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
  }

  const addPerson = (e) => {
    e.preventDefault()

    const regexItem = new RegExp("^([0-9]+-)*[0-9]*$");
    if (!regexItem.test(newNumber)) {
      alert(`${newNumber} can only contain numbers!`)
      return;
    }

    const duplicatePerson = persons.find((person) => person.name === newName)
    if (duplicatePerson) {
      alert(`${newName} is already added to phonebook`)
      return;
    }

    const newPerson = {
      name: newName,
      number: newNumber
    }
    setPersons([...persons, newPerson])
    setNewName('')
    setNewNumber('')
  }

  const filteredPersons = persons.filter((person) => {
    const formattedName = person.name.replace(/\s/g, '').toLowerCase();
    const formattedFilter = showFilter.replace(/\s/g, '').toLowerCase();
    return formattedName.includes(formattedFilter);
  });

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleNameChange={handleNameChange} />
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handlePersonChange={handlePersonChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons filteredPersons={filteredPersons} />
    </div>
  )
}

export default App