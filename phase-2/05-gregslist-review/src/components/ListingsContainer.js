import React, { useState, useEffect } from 'react'
import ListingCard from "./ListingCard";

function ListingsContainer({listings, handleDelete}) {

  const mappedListings = listings.map(listing => <ListingCard key={listing.id} listing={listing} handleDelete={handleDelete} />)

  return (
    <main>
      <ul className="cards">
        {mappedListings}
      </ul>
    </main>
  );
}

export default ListingsContainer;
