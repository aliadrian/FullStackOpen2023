import React from 'react'

const Filter = ({ handleNameChange }) => {
  return (
    <div>
      filter shown with
      <input
        onChange={handleNameChange}
      />
    </div>
  )
}

export default Filter