// src/pages/Hombres.jsx
import React from "react";
import CategoryProducts from "../components/CategoryProducts";

const Hombres = () => {
  return (
    <div>
      <h2 style={{ textAlign: "center", marginTop: "20px" }}>
        Catálogo de Hombres
      </h2>
      <CategoryProducts category="hombres" />
    </div>
  );
};

export default Hombres;
