import React from "react";
import { ShoppingListItem } from "./ShoppingListItem";

export function ShoppingList({ items, onToggleItem, onDeleteItem }) {
  const handleToggleItem = (itemId) => {
    onToggleItem(itemId);
  };

  const handleDeleteItem = (itemId) => {
    onDeleteItem(itemId);
  };

  return (
    <ul className="list-group">
      {items.map((item) => (
        <ShoppingListItem
          key={item.id}
          item={item}
          onToggleItem={handleToggleItem}
          onDeleteItem={handleDeleteItem}
        />
      ))}
    </ul>
  );
}
