import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false)

  function handleToggleDarkMode() {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className={isDarkMode ? "App dark" : "App"}>
      <Header handleToggleDarkMode={handleToggleDarkMode} />
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
