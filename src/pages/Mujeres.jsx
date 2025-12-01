// src/pages/Mujeres.jsx
import React from "react";
import CategoryProducts from "../components/CategoryProducts";

const Mujeres = () => {
  return (
    <div>
      <h2 style={{ textAlign: "center", marginTop: "20px" }}>
        Catálogo de Mujeres
      </h2>
      <CategoryProducts category="mujeres" />
    </div>
  );
};

export default Mujeres;
