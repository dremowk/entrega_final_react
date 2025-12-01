import React, { useEffect, useState } from "react";
import { getProducts } from "../scripts/getProducts";
import { useCart } from "../context/CartContext";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const { addToCart } = useCart();

  useEffect(() => {
    const load = async () => {
      const data = await getProducts();
      setProducts(data);
    };
    load();
  }, []);

  // Filtrar por coincidencia del nombre
  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Todos los Productos
      </h2>

      {/* BUSCADOR */}
      <input
        type="text"
        placeholder="Buscar producto..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          marginBottom: "30px",
          fontSize: "16px",
        }}
      />

      {/* LISTA DE PRODUCTOS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "24px",
        }}
      >
        {filtered.map((p) => (
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
    </div>
  );
};

export default AllProducts;
