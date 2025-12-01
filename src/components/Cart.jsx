import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = ({ open, onClose }) => {
  const { cart, increaseQty, decreaseQty, deleteItem } = useCart();

  if (!open) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        width: "350px",
        height: "100vh",
        background: "white",
        boxShadow: "-2px 0 10px rgba(0,0,0,0.2)",
        padding: "20px",
        zIndex: 2000,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <button
        onClick={onClose}
        style={{
          background: "transparent",
          border: "none",
          fontSize: "20px",
          cursor: "pointer",
          marginBottom: "15px",
        }}
      >
        ✖
      </button>

      <h2 style={{ marginBottom: "20px" }}>🛒 Tu carrito</h2>

      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <div style={{ flex: 1, overflowY: "auto" }}>
          {cart.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                gap: "10px",
                marginBottom: "15px",
                borderBottom: "1px solid #ddd",
                paddingBottom: "10px",
              }}
            >
              <img
                src={item.img}
                alt={item.name}
                style={{
                  width: "60px",
                  height: "60px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />

              <div style={{ flex: 1 }}>
                <h4 style={{ margin: 0 }}>{item.name}</h4>
                <p style={{ margin: "5px 0" }}>${item.price}</p>

                <div
                  style={{ display: "flex", alignItems: "center", gap: "5px" }}
                >
                  <button
                    onClick={() => decreaseQty(item.id)}
                    style={{
                      padding: "4px 8px",
                      border: "1px solid #ccc",
                      cursor: "pointer",
                    }}
                  >
                    -
                  </button>

                  <span>{item.qty}</span>

                  <button
                    onClick={() => increaseQty(item.id)}
                    style={{
                      padding: "4px 8px",
                      border: "1px solid #ccc",
                      cursor: "pointer",
                    }}
                  >
                    +
                  </button>

                  <button
                    onClick={() => deleteItem(item.id)}
                    style={{
                      marginLeft: "auto",
                      background: "red",
                      color: "white",
                      border: "none",
                      padding: "5px 10px",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {cart.length > 0 && (
        <div style={{ borderTop: "1px solid #ddd", paddingTop: "10px" }}>
          <h3>
            Total: ${cart.reduce((sum, item) => sum + item.price * item.qty, 0)}
          </h3>

          <Link
            to="/checkout"
            style={{
              marginTop: "20px",
              width: "100%",
              padding: "12px",
              background: "green",
              color: "white",
              borderRadius: "8px",
              textAlign: "center",
              display: "block",
              textDecoration: "none",
            }}
          >
            Ir al Checkout
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
