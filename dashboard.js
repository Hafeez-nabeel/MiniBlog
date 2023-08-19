import { auth, db, signOut, doc, getDoc, updateDoc, collection, getDocs, addDoc, serverTimestamp, query, orderBy, deleteDoc } from "./firebase.js";

const textarea = document.querySelector("textarea");
textarea.addEventListener("resize", function () {
  textarea.style.resize = "none";
});

const title = document.getElementById("posttitle");
const signoutuser = document.getElementById("signout");
const postInput = document.getElementById("postinput");
const form = document.getElementById("form");

form.addEventListener("submit", publishPost);
async function renderPost() {
  const postblog = document.getElementById("postblog");
  const querySnapshot = await getDocs(collection(db, "userpost"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data().title}`);
    postblog.innerHTML += `
    <div class=" blog-wrapper flex gap-2">
      <div class="img">
        <img id="profile" src="../photo-1633332755192-727a05c4013d.jpeg" style="width: 40px; height: 40px; alt="">
      </div>
      <div>
        <h3>${doc.data().title}</h3>
        <span>Hafeez nabeel</span><span>5pm</span>
      </div>
    </div>
    <div class="blogcontent">
      <div class="content"></div>
      <div>
        ${doc.data().postInput}
      </div>
      <div>
        <button>Delete</button>
        <button>Edit</button>
      </div>
    </div>
    `;
  });
}
async function publishPost(e) {
  e.preventDefault();
  console.log(postInput.value);

  try {
    const posts = {
      title: title.value,
      postInput: postInput.value,
    };
    const docRef = await addDoc(collection(db, "userpost"), posts);
    // console.log("Document written with ID: ", docRef.id);
    // console.log("Document written with ID: ", docRef);
    renderPost();
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

const deletebtn = document.getElementById("delete");
const editbtn = document.getElementById("edit");
editbtn.addEventListener("click", editpost);
function editpost() {
  const editpostcontent = document.getElementById("editpostcontent");
  const edittitle = document.getElementById("edittitle");
  let reEdit = editpostcontent.innerHTML;
  let reEditTitle = edittitle.innerHTML;
  postInput.value = reEdit;
  title.value = reEditTitle;
}

signoutuser.addEventListener("click", logOut);
function logOut() {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      window.location.replace("./login.html");
    })
    .catch((error) => {
      // An error happened.
    });
}
