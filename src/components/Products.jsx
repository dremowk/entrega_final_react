import React, { useEffect, useState } from "react";
import { getProducts } from "../scripts/getProducts";
import { useCart } from "../context/CartContext";

const Products = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    const load = async () => {
      const data = await getProducts();
      setProducts(data);
    };
    load();
  }, []);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "24px",
        padding: "20px",
      }}
    >
      {products.map((p) => (
        <div
          key={p.id}
          style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "16px",
            textAlign: "center",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
          }}
        >
          <img
            src={p.img}
            alt={p.name}
            style={{
              width: "100%",
              height: "220px",
              objectFit: "cover",
              borderRadius: "8px",
              marginBottom: "10px",
            }}
          />

          <h3>{p.name}</h3>
          <p style={{ fontWeight: "bold" }}>${p.price}</p>

          <button
            onClick={() => addToCart(p)}
            style={{
              background: "#ff9900",
              color: "white",
              padding: "10px 15px",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              marginTop: "10px",
            }}
          >
            Agregar al carrito
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
