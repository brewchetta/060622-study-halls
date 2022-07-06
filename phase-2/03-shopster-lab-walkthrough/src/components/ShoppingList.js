import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {

  const [category, setCategory] = useState('All')

  const [currentItems, setCurrentItems] = useState(items)

  function handleChange(event) {
    setCategory(event.target.value)
  }

  function handleSubmitForm(event, newItem) {
    event.preventDefault()
    setCurrentItems([...currentItems, newItem])
  }

  const itemsToDisplay = currentItems.filter(item => {
    if (category === 'All') {
      return true
    } else {
      return item.category === category
    }
  })

  return (
    <div className="ShoppingList">

      <ItemForm handleSubmitForm={handleSubmitForm} />

      <Filter category={category} handleChange={handleChange} />

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
