// src/App.js
import React from "react";
import { ShoppingListProvider } from "./ShoppingListContext";
import ItemInput from "./ItemInput";
import ItemList from "./ItemList";
import "./App.css"; // Import the CSS file

const App = () => {
  return (
    <ShoppingListProvider>
      <div className="container">
        <h1>Shopping List</h1>
        <ItemInput />
        <ItemList />
      </div>
    </ShoppingListProvider>
  );
};

export default App;
