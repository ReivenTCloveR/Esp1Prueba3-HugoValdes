import React, { Fragment, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { ShoppingListManager } from "./ShoppingListManager";
import { ShoppingListCard } from "./ShoppingListCard";

export function ShoppingListPage() {
  const [lists, setLists] = useState([]);
  const [selectedListId, setSelectedListId] = useState(null);

  useEffect(() => {
    const storedLists = localStorage.getItem("shoppingLists");
    if (storedLists) {
      setLists(JSON.parse(storedLists));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("shoppingLists", JSON.stringify(lists));
  }, [lists]);

  const handleCreateList = () => {
    const newList = {
      id: uuidv4(),
      name: "",
      items: []
    };
    setLists([...lists, newList]);
  };

  const handleSelectList = (listId) => {
    setSelectedListId(listId);
  };

  const handleAddItem = (listId, newItem) => {
    const updatedLists = lists.map((list) =>
      list.id === listId ? { ...list, items: [...list.items, newItem] } : list
    );
    setLists(updatedLists);
  };

  const handleToggleItem = (listId, itemId) => {
    const updatedLists = lists.map((list) =>
      list.id === listId
        ? {
            ...list,
            items: list.items.map((item) =>
              item.id === itemId ? { ...item, bought: !item.bought } : item
            ),
          }
        : list
    );
    setLists(updatedLists);
  };

  const handleDeleteItem = (listId, itemId) => {
    const updatedLists = lists.map((list) =>
      list.id === listId ? { ...list, items: list.items.filter((item) => item.id !== itemId) } : list
    );
    setLists(updatedLists);
  };

  const handleDeleteCompletedItems = (listId) => {
    const updatedLists = lists.map((list) =>
      list.id === listId ? { ...list, items: list.items.filter((item) => !item.bought) } : list
    );
    setLists(updatedLists);
  };

  const handleUpdateListName = (listId, name) => {
    const updatedLists = lists.map((list) =>
      list.id === listId ? { ...list, name: name } : list
    );
    setLists(updatedLists);
  };

  const handleDeleteList = (listId) => {
    const updatedLists = lists.filter((list) => list.id !== listId);
    setLists(updatedLists);
    setSelectedListId(null);
  };

  return (
    <Fragment>
       <div className="header" style={{ backgroundColor: "navy", color: "gold", height: "65px" }}>
        <h1 className="title">MyShoppingList</h1>
      </div>
      <div className="container mt-5">
        <h1 className="text-center mb-4">Lista de Compras</h1>

      <div className="container mt-5 bordered-container">

        <ShoppingListManager
          lists={lists}
          selectedListId={selectedListId}
          onCreateList={handleCreateList}
          onSelectList={handleSelectList}
          onDeleteList={handleDeleteList}
        />

        {selectedListId && (
          <ShoppingListCard
            list={lists.find((list) => list.id === selectedListId)}
            onAddItem={handleAddItem}
            onToggleItem={handleToggleItem}
            onDeleteItem={handleDeleteItem}
            onDeleteCompletedItems={handleDeleteCompletedItems}
            onUpdateListName={handleUpdateListName}
          />
        )}
        </div>
      </div>
    </Fragment>
  );
}
