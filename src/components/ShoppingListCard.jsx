import React from "react";
import { ShoppingListItem } from "./ShoppingListItem";
import { ShoppingForm } from "./ShoppingForm";
import { ShareListButton } from "./btn/ShareListButton";
import { v4 as uuidv4 } from "uuid"; 

export function ShoppingListCard({
  list,
  onAddItem,
  onToggleItem,
  onDeleteItem,
  onDeleteCompletedItems,
  onUpdateListName,
}) {
  const handleAddItem = (item) => {
    const newItem = { ...item, id: uuidv4() }; // Generar un nuevo id único utilizando uuidv4()
    onAddItem(list.id, newItem);
  };

  const handleToggleItem = (itemId) => {
    onToggleItem(list.id, itemId);
  };

  const handleDeleteItem = (itemId) => {
    onDeleteItem(list.id, itemId);
  };

  const handleDeleteCompletedItems = () => {
    onDeleteCompletedItems(list.id);
  };

  const handleUpdateListName = (name) => {
    onUpdateListName(list.id, name);
  };

  return (
    <div>
      <h2>
        <input
          type="text"
          className="form-control"
          placeholder="Nombre de la lista"
          value={list.name}
          onChange={(e) => handleUpdateListName(e.target.value)}
        />
      </h2>

      <ShoppingForm handleAddItem={handleAddItem} />

      <ul className="list-group">
        {list.items.map((item) => (
          <ShoppingListItem
            key={item.id}
            item={item}
            cambiarEstado={handleToggleItem} 
            eliminarItem={handleDeleteItem} 
          />
        ))}
      </ul>
      <div className="d-flex justify-content-between align-items-center mt-4">
        <button className="btn btn-danger" onClick={() => handleDeleteCompletedItems(list.id)}>
          <i className="bi bi-trash-fill"></i> Eliminar
        </button>
        <ShareListButton list={list} />
      </div>

      
    </div>
    
  );
}
