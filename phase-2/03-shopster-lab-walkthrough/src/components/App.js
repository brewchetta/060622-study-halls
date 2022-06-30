import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";

function App() {

  return (
    <div className="App">
      <Header />
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
