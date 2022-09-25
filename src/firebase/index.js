/* eslint-disable no-unused-vars */
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyC7j5dvP47JFB2pBVbqiQNkssr90ZaPzuM",
  authDomain: "gler-yglt.firebaseapp.com",
  projectId: "gler-yglt",
  storageBucket: "gler-yglt.appspot.com",
  messagingSenderId: "798041588376",
  appId: "1:798041588376:web:a55b4f72d91aa566cf86ed",
  measurementId: "G-LP9H4T20HJ"
};
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app);
const auth = getAuth(app)

export { auth }