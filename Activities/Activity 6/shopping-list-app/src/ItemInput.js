// src/ItemInput.js
import React from "react";
import useInput from "./useInput";
import { useShoppingList } from "./ShoppingListContext";

const ItemInput = () => {
  const { addItem } = useShoppingList();
  const { value, onChange, reset } = useInput();

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(value);
    reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Add an item"
        required
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default ItemInput;
