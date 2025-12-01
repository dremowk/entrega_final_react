// src/pages/Ofertas.jsx
import React from "react";
import CategoryProducts from "../components/CategoryProducts";

const Ofertas = () => {
  return (
    <div>
      <h2 style={{ textAlign: "center", marginTop: "20px" }}>
        Productos en Oferta
      </h2>
      <CategoryProducts category="ofertas" />
    </div>
  );
};

export default Ofertas;
