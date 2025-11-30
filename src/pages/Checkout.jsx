import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

const Checkout = () => {
  const { cart, clearCart } = useCart();

  const [buyer, setBuyer] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const sendOrder = async () => {
    if (!buyer.name || !buyer.phone || !buyer.address) {
      alert("Por favor completa todos los campos.");
      return;
    }

    try {
      const orderRef = await addDoc(collection(db, "orders"), {
        buyer,
        items: cart,
        total,
        date: new Date(),
      });

      clearCart();
      alert(`Pedido enviado con éxito. ID: ${orderRef.id}`);
    } catch (err) {
      console.error(err);
      alert("Error al enviar el pedido.");
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "40px auto" }}>
      <h2>Finalizar Pedido</h2>

      <h3>Total a pagar: ${total}</h3>

      <div style={{ marginTop: "20px" }}>
        <label>Nombre completo</label>
        <input
          type="text"
          name="name"
          value={buyer.name}
          onChange={handleChange}
          style={{ width: "100%", padding: "10px", marginTop: "5px" }}
        />

        <label>Teléfono</label>
        <input
          type="text"
          name="phone"
          value={buyer.phone}
          onChange={handleChange}
          style={{ width: "100%", padding: "10px", marginTop: "5px" }}
        />

        <label>Dirección</label>
        <input
          type="text"
          name="address"
          value={buyer.address}
          onChange={handleChange}
          style={{ width: "100%", padding: "10px", marginTop: "5px" }}
        />

        <button
          onClick={sendOrder}
          style={{
            marginTop: "20px",
            width: "100%",
            padding: "12px",
            background: "#ff9900",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          CONFIRMAR PEDIDO
        </button>
      </div>
    </div>
  );
};

export default Checkout;
