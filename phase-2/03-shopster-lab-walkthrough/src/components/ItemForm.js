import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({handleSubmitForm}) {

  const [name, setName] = useState('')

  const [category, setCategory] = useState('Produce')

  function handleChangeName(event) {
    setName(event.target.value)
  }

  function handleCatChange(event) {
    setCategory(event.target.value)
  }

  const newItem = {
    name: name,
    category: category,
    id: uuid()
  }

  return (
    <form
      className="NewItem"
      onSubmit={(e) => handleSubmitForm(e, newItem)}
    >
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChangeName}
        />
      </label>

      <label>
        Category:
        <select name="category" onChange={handleCatChange} value={category} >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
