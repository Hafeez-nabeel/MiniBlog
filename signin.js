import { auth, signInWithEmailAndPassword, db, doc, getDoc } from "./firebase.js";

const form = document.getElementById("form");

// const username = document.getElementById("username");
const email = document.getElementById("email");
// const phone = document.getElementById("phone");
const password = document.getElementById("password");

form.addEventListener("submit", signin);

// const auth = getAuth();
function GoDashbord() {
  window.location.assign("./dashboard.html");
}
async function signin(e) {
  e.preventDefault();

  try {
    const userAuth = await signInWithEmailAndPassword(auth, email.value, password.value);
    const userRef = doc(db, "users", userAuth.user.uid);
    const userDoc = await getDoc(userRef);
    if (!userDoc.exists()) {
      handleLoginError("No such user!");
      return;
    }
    const userLocalData = userDoc.data();
    localStorage.setItem("user", JSON.stringify(userLocalData));
    GoDashbord();
  } catch (error) {
    console.log("error", error.message);
    alert(error.message);
  }
}
