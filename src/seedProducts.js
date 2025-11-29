import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";

const products = [
  {
    name: "Remera Oversize Negra",
    price: 18000,
    stock: 15,
    category: "remeras",
    img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    description: "Remera oversize de algodón premium.",
  },
  {
    name: "Hoodie Unisex Gris",
    price: 35000,
    stock: 10,
    category: "hoodies",
    img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
    description: "Hoodie térmico de excelente calidad.",
  },
  {
    name: "Pantalón Cargo Verde",
    price: 26000,
    stock: 8,
    category: "pantalones",
    img: "https://images.unsplash.com/photo-1583743814966-8936f5b9f907",
    description: "Cargo verde con múltiples bolsillos.",
  },
  {
    name: "Campera de Jean",
    price: 50000,
    stock: 5,
    category: "camperas",
    img: "https://images.unsplash.com/photo-1536305030015-4d61aa56f46a",
    description: "Campera de jean clásica con interior térmico.",
  },
];

export async function seedProducts() {
  const productsRef = collection(db, "products");

  for (let p of products) {
    await addDoc(productsRef, p);
  }

  console.log("PRODUCTOS CARGADOS CON ÉXITO");
}
