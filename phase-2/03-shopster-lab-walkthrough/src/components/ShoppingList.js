import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const itemsToDisplay = items

  return (
    <div className="ShoppingList">

      <ItemForm />

      <Filter />

      <ul className="Items">

        {itemsToDisplay.map((item) => (

          <Item
            key={item.id}
            name={item.name}
            category={item.category}
          />

        ))}

      </ul>

    </div>
  );
}

export default ShoppingList;
