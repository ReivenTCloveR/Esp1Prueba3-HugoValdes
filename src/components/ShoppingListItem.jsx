import React from "react";

export function ShoppingListItem({ item, cambiarEstado, eliminarItem }) {
  const { id, productName, quantity, price, type, note, bought } = item;

  const handleCambiarEstado = () => {
    cambiarEstado(id);
  };

  const handleEliminarItem = () => {
    eliminarItem(id);
  };

  return (
    <li className={`list-group-item${bought ? " bought" : ""}`} onClick={handleCambiarEstado}>
      <div className="row align-items-center">
        <div className="col">
          <h5 className="mb-0">{productName}</h5>
          <p className="mb-0">Cantidad: {quantity}</p>
          <p className="mb-0">Precio: {price}</p>
          <p className="mb-0">Tipo: {type}</p>
          <p className="mb-0">Tienda: {note}</p>
        </div>
        <div className="col-auto">
          <button
            className="btn btn-sm btn-success me-2"
            onClick={(e) => {
              e.stopPropagation();
              handleCambiarEstado();
            }}
          >
            {bought ? <i className="bi bi-check-circle-fill"></i> : <i className="bi bi-circle"></i>}
          </button>
          <button
            className="btn btn-sm btn-danger"
            onClick={(e) => {
              e.stopPropagation();
              handleEliminarItem();
            }}
          >
            <i className="bi bi-trash-fill"></i>
          </button>
        </div>
      </div>
    </li>
  );
}
