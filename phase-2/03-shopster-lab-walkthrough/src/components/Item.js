import React, { useState } from "react";

function Item({ name, category }) {

  const [inCart, setInCart] = useState("not in cart")

  function handleToggleInCart() {
    if (inCart === "not in cart") {
      setInCart("in cart")
    } else {
      setInCart("not in cart")
    }
  }

  return (
    <li className={inCart === "in cart" ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleToggleInCart} className="add">
        Add to Cart
      </button>
    </li>
  );
}

export default Item;
