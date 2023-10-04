import React from 'react'

const Filter = ({ handleCountryNameChange }) => {
  return (
    <div>
      <input onChange={handleCountryNameChange} />
    </div>
  )
}

export default Filter