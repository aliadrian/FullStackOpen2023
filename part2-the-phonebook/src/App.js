import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'
import Notification from './components/Notification'
import './index.css'

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
  const [succesMessage, setSuccesMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    console.log('effect')
    personService
      .getAll()
      .then(initialPersons => {
        console.log('promise fulfilled')
        setPersons(initialPersons)
      })
    console.log('render', persons.length, 'persons')
  }, [])

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

    personService
      .create(newPerson)
      .then(returnedPerson => {
        setPersons([...persons, returnedPerson])
        setNewName('')
        setNewNumber('')
        setSuccesMessage(`Added ${newName}`)
      })
    setTimeout(() => {
      setSuccesMessage(null)
      setErrorMessage(null)
    }, 5000)
  }

  const filteredPersons = persons.filter((person) => {
    const formattedName = person.name.replace(/\s/g, '').toLowerCase();
    const formattedFilter = showFilter.replace(/\s/g, '').toLowerCase();
    return formattedName.includes(formattedFilter);
  });

  const deletePerson = (id) => {
    personService
      .deleteObject(id)
      .then(() => {
        setPersons(persons.filter(p => p.id !== id))
      })
      .catch(error => {
        setErrorMessage(
          `Information of ${newName} has already been removed from server`
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
        console.log(`Error deleting person with ID ${id}:`, error)
      })
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={succesMessage} />
      <Filter handleNameChange={handleNameChange} />
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handlePersonChange={handlePersonChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons deletePerson={deletePerson} filteredPersons={filteredPersons} />
    </div>
  )
}

export default App