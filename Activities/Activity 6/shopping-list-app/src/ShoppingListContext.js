// src/ShoppingListContext.js
import React, { createContext, useContext, useState } from "react";

const ShoppingListContext = createContext();

export const useShoppingList = () => {
  return useContext(ShoppingListContext);
};

export const ShoppingListProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  const removeItem = (itemToRemove) => {
    setItems((prevItems) => prevItems.filter((item) => item !== itemToRemove));
  };

  const filterItems = (searchTerm) => {
    return items.filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <ShoppingListContext.Provider
      value={{ items, addItem, removeItem, filterItems }}
    >
      {children}
    </ShoppingListContext.Provider>
  );
};
