import { useCart } from "../context/CartContext";

const Cart = ({ open, onClose }) => {
  const { cart, increaseQty, decreaseQty, removeFromCart, total } = useCart();

  if (!open) return null;

  return (
    <div style={{
      position: "fixed", top: 0, left: 0, width: "100%", height: "100%",
      background: "rgba(0,0,0,0.4)", display: "flex",
      justifyContent: "center", alignItems: "center"
    }}>
      <div style={{ background: "#fff", padding: 20, width: 400, borderRadius: 8 }}>
        <h2>Carrito 🛒</h2>
        <button onClick={onClose} style={{ float: "right" }}>Cerrar</button>

        {cart.length === 0 && <p>Carrito vacío</p>}

        {cart.map((item) => (
          <div key={item.id} style={{ marginBottom: 10 }}>
            <strong>{item.title}</strong>
            <p>${item.price}</p>

            <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
              <button onClick={() => decreaseQty(item.id)}>-</button>
              <span>{item.qty}</span>
              <button onClick={() => increaseQty(item.id)}>+</button>
              <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
            </div>
          </div>
        ))}

        <hr />
        <h3>Total: ${total.toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default Cart;
