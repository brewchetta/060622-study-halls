import React, { useState } from "react";

function ListingCard({listing, handleDelete}) {

  const {image, description, location} = listing

  const [favorited, setFavorited] = useState(false)

  function handleClick() {
    setFavorited(!favorited)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={"description"} />
      </div>
      <div className="details">
        {favorited ? (
          <button className="emoji-button favorite active" onClick={handleClick}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleClick}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={() => handleDelete(listing)}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
