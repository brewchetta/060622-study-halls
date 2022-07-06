import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [search, setSearch] = useState('')
  const [submittedSearch, setSubmittedSearch] = useState('')
  const [listings, setListings] = useState([])

  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then(res => res.json())
    .then(data => setListings(data))
  }, [])

  function handleDelete(listingToDelete) {
    fetch(`http://localhost:6001/listings/${listingToDelete.id}`, {
      method: 'DELETE'
    })

    setListings(listings => listings.filter(listing => listing.id !== listingToDelete.id))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmittedSearch(search)
  }

  const filteredListings = listings.filter(listing => listing.description.includes(submittedSearch))

  return (
    <div className="app">
      <Header search={search} setSearch={setSearch} handleSubmit={handleSubmit} />
      <ListingsContainer search={search} listings={filteredListings} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
