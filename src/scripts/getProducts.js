import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export async function getProducts() {
  try {
    const productsRef = collection(db, "products");
    const snapshot = await getDocs(productsRef);

    const products = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    console.log("PRODUCTOS OBTENIDOS:", products);
    return products;
  } catch (error) {
    console.error("ERROR AL OBTENER PRODUCTOS:", error);
    return [];
  }
  console.log("DB PROJECT ID:", db.app.options.projectId);
}
