function StateCard({flag, handleClickFlag}) {

  return (
    <img
      className="card-img"
      onClick={() => handleClickFlag(flag)}
      src={flag.flag_url}
      alt={`${flag.name} ${flag.flag_url}`}
    />
  )

}

export default StateCard
