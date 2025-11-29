// seed.js (EJECUTAR SOLO UNA VEZ)
// -- Carga productos en Firestore usando Node --

import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// 🔥 CONFIG DE FIREBASE (MISMA QUE USAS EN firebase.js)
const firebaseConfig = {
  apiKey: "AIzaSyBWPMXLD2fN9rtgurPzbBh-YUGBcN9ALk8",
  authDomain: "tienda-7045d.firebaseapp.com",
  projectId: "tienda-7045d",
  storageBucket: "tienda-7045d.firebasestorage.app",
  messagingSenderId: "96869712326",
  appId: "1:96869712326:web:568910e183bc9222d732c7",
  measurementId: "G-DJ70R1FV4M",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 📦 PRODUCTOS A IMPORTAR
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
    description: "Campera de jean clásica.",
  },
];

async function seedProducts() {
  try {
    const productsRef = collection(db, "products");

    for (let p of products) {
      await addDoc(productsRef, p);
      console.log("✔ Producto añadido:", p.name);
    }

    console.log("\n🎉 SEED COMPLETADO: Productos cargados con éxito.\n");
    process.exit();
  } catch (error) {
    console.error("❌ ERROR AL CARGAR PRODUCTOS:", error);
    process.exit(1);
  }
}

seedProducts();
