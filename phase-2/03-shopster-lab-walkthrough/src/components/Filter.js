import React from "react";

function Filter({category, handleChange}) {

  return (
    <div className="Filter">

      <input type="text" name="search" placeholder="Search..." />

      <select name="filter" onChange={handleChange} value={category}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>

    </div>
  );
}

export default Filter;
