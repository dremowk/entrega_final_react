import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useCart } from "../context/CartContext";

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const [buyer, setBuyer] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [orderId, setOrderId] = useState(null);

  // Calcular total
  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  const handleChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };

  const sendOrder = async () => {
    if (!buyer.name || !buyer.phone || !buyer.email) {
      alert("Por favor completa todos los campos");
      return;
    }

    const order = {
      buyer,
      items: cart.map((item) => ({
        id: item.id,
        name: item.name,
        price: item.price,
        qty: item.qty,
        subtotal: item.price * item.qty,
      })),
      total: total,
      date: new Date().toISOString(),
    };

    try {
      const docRef = await addDoc(collection(db, "orders"), order);
      setOrderId(docRef.id);
      clearCart();
    } catch (error) {
      console.error("Error al crear la orden:", error);
    }
  };

  if (orderId)
    return (
      <h2 style={{ textAlign: "center", marginTop: "40px" }}>
        ✅ ¡Compra realizada!
        <br />
        Tu número de orden es: <strong>{orderId}</strong>
      </h2>
    );

  return (
    <div style={{ margin: "40px auto", maxWidth: "500px" }}>
      <h2>Finalizar compra</h2>

      <input
        type="text"
        placeholder="Nombre"
        name="name"
        value={buyer.name}
        onChange={handleChange}
        style={inputStyle}
      />
      <input
        type="text"
        placeholder="Teléfono"
        name="phone"
        value={buyer.phone}
        onChange={handleChange}
        style={inputStyle}
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={buyer.email}
        onChange={handleChange}
        style={inputStyle}
      />

      <h3>Total a pagar: ${total}</h3>

      <button onClick={sendOrder} style={btnStyle}>
        Confirmar pedido
      </button>
    </div>
  );
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  margin: "10px 0",
  borderRadius: "8px",
  border: "1px solid #ccc",
};

const btnStyle = {
  width: "100%",
  padding: "12px",
  marginTop: "20px",
  background: "#ff9900",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontSize: "16px",
};

export default Checkout;
