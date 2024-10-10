// src/ItemList.js
import React, { useState } from "react";
import { useShoppingList } from "./ShoppingListContext";

const ItemList = () => {
  const { items, removeItem, filterItems } = useShoppingList();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = filterItems(searchTerm);

  const handleRemove = (item) => {
    removeItem(item);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search items"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleRemove(item)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
