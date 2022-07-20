import React, { useState } from 'react'

function RaccoonForm({addRaccoon}) {

  const [name, setName] = useState('')
  const [image, setImage] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    const newRaccoon = {name: name, image: image}
    addRaccoon(newRaccoon)
  }

  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  const handleImageChange = (event) => {
    setImage(event.target.value)
  }

  return (
    <form onSubmit={handleSubmit} className="raccoon-form">
      <input onChange={handleNameChange} value={name} placeholder="New Raccoon Name" type="text" />
      <input onChange={handleImageChange} value={image} placeholder="New Image URL" type="text" />
      <input type="submit" value="Create New Raccoon" />
    </form>
  )
}

export default RaccoonForm
