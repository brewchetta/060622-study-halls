function TaskSearch({searchTerm, setSearchTerm}) {

  function handleChange(e) {
    setSearchTerm(e.target.value)
  }

  return (

    <input
      type="text"
      onChange={handleChange}
      value={searchTerm}
      placeholder='search...'
    />

  )
}

export default TaskSearch
