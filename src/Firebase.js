
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyBASluZBVx4ej9wkb4MiT4GGioSlCKPNCQ",
  authDomain: "portfolio-a9f43.firebaseapp.com",
  projectId: "portfolio-a9f43",
  storageBucket: "portfolio-a9f43.firebasestorage.app",
  messagingSenderId: "863378667419",
  appId: "1:863378667419:web:12dae679771c7a2917933e",
  measurementId: "G-EH4Q5248XZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };