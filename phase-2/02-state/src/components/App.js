import { useState } from 'react'
import flags from '../data/states'
import StateDetail from './StateDetail'
import StateCard from './StateCard'

function App() {

  const [currentFlag, setCurrentFlag] = useState({})

  const [allFlags, setAllFlags] = useState(flags)

  const handleClickFlag = flag => {
    setCurrentFlag(flag)
  }

  const handleDeleteFlag = flagToDelete => {
    const newArray = allFlags.filter(flag => flag.id !== flagToDelete.id)
    setAllFlags(newArray)
  }

  const mappedFlags = allFlags.map(flag => <StateCard key={flag.id} flag={flag} handleClickFlag={handleClickFlag} />)

  return (
    <div className="App">

      <h1 className="background-black text-white">React State</h1>

      <StateDetail currentFlag={currentFlag} handleDeleteFlag={handleDeleteFlag} />

      {mappedFlags}

    </div>
  );
}

export default App;
