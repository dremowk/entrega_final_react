import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useCart } from "../context/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const loadProduct = async () => {
      const ref = doc(db, "products", id);
      const snap = await getDoc(ref);

      if (snap.exists()) {
        setProduct({ id: snap.id, ...snap.data() });
      }
    };

    loadProduct();
  }, [id]);

  if (!product) return <h2>Cargando producto...</h2>;

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "40px auto",
        display: "flex",
        gap: "30px",
      }}
    >
      <img
        src={product.img}
        alt={product.name}
        style={{
          width: "400px",
          borderRadius: "12px",
          objectFit: "cover",
        }}
      />

      <div>
        <h2>{product.name}</h2>
        <h3 style={{ color: "#ff9900" }}>${product.price}</h3>

        <p>
          <strong>Categoría:</strong> {product.category}
        </p>
        <p>
          <strong>Stock:</strong> {product.stock}
        </p>

        <p style={{ marginTop: "20px" }}>{product.description}</p>

        <button
          onClick={() => addToCart(product)}
          style={{
            background: "#ff9900",
            color: "white",
            padding: "12px 20px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            marginTop: "20px",
          }}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
