// src/App.js
import React from "react";
import { ShoppingListProvider } from "./ShoppingListContext";
import ItemInput from "./ItemInput";
import ItemList from "./ItemList";

const App = () => {
  return (
    <ShoppingListProvider>
      <h1>Shopping List</h1>
      <ItemInput />
      <ItemList />
    </ShoppingListProvider>
  );
};

export default App;
