import React from "react";
import { v4 as uuidv4 } from "uuid";

export function ShoppingListManager({ lists, selectedListId, onCreateList, onSelectList, onDeleteList }) {
  const handleCreateList = () => {
    const newList = {
      id: uuidv4(),
      name: "",
      items: []
    };
    onCreateList(newList);
  };

  const handleSelectList = (listId) => {
    onSelectList(listId);
  };

  const handleDeleteList = (listId) => {
    onDeleteList(listId);
  };

  return (
    <div className="mb-4">
      <div className="d-flex">
        {lists.map((list) => (
          <div key={list.id} className="d-flex align-items-center me-2">
            <button
              className={`btn ${list.id === selectedListId ? "btn-primary" : "btn-secondary"}`}
              onClick={() => handleSelectList(list.id)}
            >
              {list.name || "Lista sin nombre"}
            </button>
            <button className="btn btn-danger" onClick={() => handleDeleteList(list.id)}>
            <i className="bi bi-trash-fill"></i>
            </button>
          </div>
        ))}
      </div>
      <button className="btn btn-success mt-2" onClick={handleCreateList}>
        Nueva Lista
      </button>
    </div>
  );
}
