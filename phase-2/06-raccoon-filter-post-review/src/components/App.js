import React, { useState, useEffect } from 'react'
import RaccoonsContainer from './RaccoonsContainer'
import RaccoonForm from "./RaccoonForm"
import Search from './Search'

function App() {

  const [raccoons, setRaccoons] = useState([])
  const [search, setSearch] = useState('')

  const filteredRaccoons = raccoons.filter(raccoon => raccoon.name.toLowerCase().includes(search.toLowerCase()))

  useEffect(() => {
    fetch(`http://localhost:5001/raccoons`)
    .then(res => res.json())
    .then(raccoons => setRaccoons(raccoons))
  }, [])

  const addRaccoon = (newRaccoon) => {
    fetch(`http://localhost:5001/raccoons`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newRaccoon)
    })
      .then(res => res.json())
      .then(newData => setRaccoons([...raccoons, newData]))
  }

  const removeRaccoon = (deletedRaccoon) => {
    fetch(`http://localhost:5001/raccoons/${deletedRaccoon.id}`, {
      method: 'DELETE'
    })

    const updatedRaccoons = raccoons.filter(raccoon => raccoon.id !== deletedRaccoon.id)
    setRaccoons(updatedRaccoons)
  }

  return (
    <div className="App">

      <h1>🦝 Raccoon Search Party 🎉</h1>

      <Search search={search} setSearch={setSearch} />

      <RaccoonsContainer
        raccoons={raccoons}
        filteredRaccoons={filteredRaccoons}
        removeRaccoon={removeRaccoon}
      />

      <RaccoonForm addRaccoon={addRaccoon} />

    </div>
  );
}

export default App;
