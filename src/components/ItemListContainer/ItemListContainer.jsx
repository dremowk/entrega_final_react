// src/components/ItemListContainer/ItemListContainer.jsx
import React from "react";
import "./ItemListContainer.css";

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="item-list-container">
      <h1>{greeting}</h1>
      <p>Explora nuestras últimas zapatillas y encuentra tu estilo ideal.</p>
    </div>
  );
};

export default ItemListContainer;
