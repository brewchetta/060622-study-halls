import React from 'react'

function RaccoonCard({raccoon, removeRaccoon}) {
  return (
    <div className="raccoon-card">
      <h3>{raccoon.name}</h3>
      <img src={raccoon.image} alt={raccoon.name} />
      <button onClick={() => removeRaccoon(raccoon)}>Delete</button>
    </div>
  )
}

export default RaccoonCard
