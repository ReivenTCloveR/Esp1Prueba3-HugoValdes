import React, { useState } from "react";

export function ShareListButton({ list }) {
  const [linkCopied, setLinkCopied] = useState(false);

  const handleShareList = () => {
    const listWithContent = {
      ...list,
      products: list.products ? list.products.map((product) => product.name) : []
    };
    const encodedListData = btoa(JSON.stringify(listWithContent));
    const shareLink = `${window.location.origin}/shared-list?data=${encodedListData}`;
    console.log("Compartir lista:", shareLink);

    // Lógica para copiar el enlace al portapapeles
    navigator.clipboard.writeText(shareLink)
      .then(() => {
        setLinkCopied(true);
      })
      .catch((error) => {
        console.error("Error al copiar el enlace al portapapeles:", error);
      });
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={handleShareList}>
        Compartir lista
      </button>
      {linkCopied && <p>Enlace copiado al portapapeles</p>}
    </div>
  );
}

