import React from 'react'
import RaccoonCard from './RaccoonCard'

function RaccoonsContainer({raccoons, filteredRaccoons, removeRaccoon}) {

  const mappedRaccoons = filteredRaccoons.map(raccoon => (
    <RaccoonCard key={raccoon.id} raccoon={raccoon} removeRaccoon={removeRaccoon} />
  ))

  return (
    <div className="raccoon-container">
      {mappedRaccoons}
    </div>
  )
}

export default RaccoonsContainer
