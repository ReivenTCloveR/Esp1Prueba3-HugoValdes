import React, { useRef } from "react";

export function ShoppingForm({ handleAddItem }) {
  const productNameRef = useRef();
  const quantityRef = useRef();
  const priceRef = useRef();
  const typeRef = useRef();
  const noteRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const productName = productNameRef.current.value.trim();
    const quantity = quantityRef.current.value.trim();
    const price = priceRef.current.value.trim();
    const type = typeRef.current.value.trim();
    const note = noteRef.current.value.trim();

    if (productName === "" || quantity === "" || price === "" || type === "" || note === "") {
      return;
    }

    const newItem = {
      productName,
      quantity,
      price,
      type,
      note,
    };

    handleAddItem(newItem);

    productNameRef.current.value = "";
    quantityRef.current.value = "";
    priceRef.current.value = "";
    typeRef.current.value = "";
    noteRef.current.value = "";
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="row">
        <div className="col-md-3 mb-3">
          <input type="text" className="form-control" placeholder="Producto" ref={productNameRef} />
        </div>
        <div className="col-md-2 mb-3">
          <input type="text" className="form-control" placeholder="Cantidad" ref={quantityRef} />
        </div>
        <div className="col-md-2 mb-3">
          <input type="text" className="form-control" placeholder="Precio" ref={priceRef} />
        </div>
        <div className="col-md-2 mb-3">
          <input type="text" className="form-control" placeholder="Tipo" ref={typeRef} />
        </div>
        <div className="col-md-3 mb-3">
          <input type="text" className="form-control" placeholder="Tienda" ref={noteRef} />
        </div>
      </div>
      <button className="btn btn-primary" type="submit">
        <i className="bi bi-plus-circle-fill me-2"></i>Añadir
      </button>
    </form>
  );
}
