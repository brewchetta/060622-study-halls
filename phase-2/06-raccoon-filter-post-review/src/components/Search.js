import React from 'react'

function Search({search, setSearch}) {
  return (
    <div className="search">
      <input
        value={search}
        onChange={((event) => setSearch(event.target.value))}
        type="text"
        placeholder="search..."
      />
    </div>
  )
}

export default Search
