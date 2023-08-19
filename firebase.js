// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";
import { getFirestore, collection, addDoc, doc, updateDoc, deleteDoc, onSnapshot, getDocs, setDoc, getDoc, serverTimestamp, query, orderBy } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-storage.js";
//firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVYN3IYH3TdGUOetoe4K8trqSSBs6PpfQ",

  authDomain: "heckhaton.firebaseapp.com",

  projectId: "heckhaton",

  storageBucket: "heckhaton.appspot.com",

  messagingSenderId: "132578707535",

  appId: "1:132578707535:web:b76be50f3818086d3b423a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const storage = getStorage(app);
const storageRef = ref(storage);
// sign in

const auth = getAuth();
const db = getFirestore(app);
// console.log(app);
export { db, query, orderBy, onSnapshot, deleteDoc, serverTimestamp, getDatabase, auth, storage, app, signInWithEmailAndPassword, getAuth, collection, addDoc, getDocs, doc, updateDoc, setDoc, getDoc, getStorage, ref, uploadBytes, getDownloadURL, createUserWithEmailAndPassword, signOut };
