// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

import Home from "./pages/Home";
import Hombres from "./pages/Hombres";
import Mujeres from "./pages/Mujeres";
import Ofertas from "./pages/Ofertas";
import ProductDetail from "./pages/ProductDetail";
import Checkout from "./pages/Checkout"; // ← NUEVO

import "./App.css";

import { CartProvider, useCart } from "./context/CartContext";
import Products from "./components/Products";
import Cart from "./components/Cart";

const CartButton = () => {
  const { cart } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        style={{
          position: "fixed",
          top: 20,
          right: 20,
          background: "#ff9900",
          color: "white",
          padding: "10px 15px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          zIndex: 1000,
        }}
      >
        🛒 Carrito ({cart.reduce((sum, item) => sum + item.qty, 0)})
      </button>

      <Cart open={open} onClose={() => setOpen(false)} />
    </>
  );
};

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />

        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hombres" element={<Hombres />} />
            <Route path="/mujeres" element={<Mujeres />} />
            <Route path="/ofertas" element={<Ofertas />} />
            <Route path="/product/:id" element={<ProductDetail />} />

            {/* NUEVA RUTA */}
            <Route path="/checkout" element={<Checkout />} />

            <Route path="*" element={<h2>Página no encontrada</h2>} />
          </Routes>

          <section style={{ marginTop: "40px" }}>
            <h2 style={{ textAlign: "center" }}>Productos destacados</h2>
            <Products />
          </section>
        </div>

        <CartButton />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
