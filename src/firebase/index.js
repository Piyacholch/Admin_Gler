import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyB-oTpfY43b05KgdPCzLC4nnnHBoG_7N0E",
  authDomain: "gler-project1-d9yc.firebaseapp.com",
  projectId: "gler-project1-d9yc",
  storageBucket: "gler-project1-d9yc.appspot.com",
  messagingSenderId: "525541179168",
  appId: "1:525541179168:web:0c68a9dc6aa934f5d72145",
  measurementId: "G-TERGN1HH27"
};

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

export { auth }