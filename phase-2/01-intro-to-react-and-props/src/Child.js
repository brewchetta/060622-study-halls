import { useState } from 'react'
import './Child.css'

function Child({countChocula, thing, object}) {

  // console.log(props);

  return (
    <h1 className="red-text">{countChocula} {object.age}</h1>
  )
}

export default Child
