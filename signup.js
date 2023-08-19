import { db, auth, createUserWithEmailAndPassword, doc, setDoc, addDoc, collection } from "./firebase.js";
//
const form = document.getElementById("form");
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const repeatpassword = document.getElementById("repeatpassword");

form.addEventListener("submit", signUp);

// const auth = getAuth();

async function signUp(e) {
  e.preventDefault();
  // Check if the two passwords match
  if (password.value !== repeatpassword.value) {
    alert("Passwords do not match");
    return;
  }

  // Create the user account
  try {
    const userAuth = await createUserWithEmailAndPassword(auth, email.value, password.value);
    const uid = userAuth.user.uid;
    const userObj = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
    };
    // Save the user data to Firebase
    const userRef = doc(db, "users", uid);
    await setDoc(userRef, userObj);

    // const docRef = await addDoc(collection(db, "users"))();

    // Redirect to the home page
    window.location.replace("./login.html");
  } catch (error) {
    console.log("error", error.message);
    alert(error.message);
  }
}
