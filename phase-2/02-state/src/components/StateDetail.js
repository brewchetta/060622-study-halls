function StateDetail({currentFlag, handleDeleteFlag}) {

  const {name, flag_url} = currentFlag

  return (
    <div className="border-black">
      <h2>{currentFlag.name}</h2>
      <img src={flag_url} alt={name}/>
      <br/>
      <button onClick={() => handleDeleteFlag(currentFlag)}>Delete This State</button>
    </div>
  )

}

export default StateDetail
