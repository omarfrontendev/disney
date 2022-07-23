import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyC_SpGfNNJn4wphxazjmkUXtGszkiDD7Lw",
  authDomain: "disney-app-c3cd5.firebaseapp.com",
  projectId: "disney-app-c3cd5",
  storageBucket: "disney-app-c3cd5.appspot.com",
  messagingSenderId: "590271330181",
  appId: "1:590271330181:web:ca623fac724c20bd4d76ec",
  measurementId: "G-H27PWLTFBW"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();


export { auth, provider }