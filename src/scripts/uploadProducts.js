import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { products } from "./productsList";

export const uploadProducts = async () => {
  try {
    const productsRef = collection(db, "products");

    for (const product of products) {
      await addDoc(productsRef, product);
    }

    console.log("📦 Todos los productos fueron cargados en Firestore");
  } catch (error) {
    console.error("❌ Error cargando productos:", error);
  }
};
