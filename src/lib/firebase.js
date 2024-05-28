import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA0eYKBy4JFG0jI5bJxgzHK1lRq4sMMidA",
  authDomain: "reactchat-46f94.firebaseapp.com",
  projectId: "reactchat-46f94",
  storageBucket: "reactchat-46f94.appspot.com",
  messagingSenderId: "123510367395",
  appId: "1:123510367395:web:f10a4b51184c41ca7d0b16"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };

