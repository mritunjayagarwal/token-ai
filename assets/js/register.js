// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPyn5PG98NzYsWWdZih2zVnuu1iqUE2xo",
  authDomain: "trade-ai-5c914.firebaseapp.com",
  databaseURL: "https://trade-ai-5c914-default-rtdb.firebaseio.com",
  projectId: "trade-ai-5c914",
  storageBucket: "trade-ai-5c914.appspot.com",
  messagingSenderId: "460460341914",
  appId: "1:460460341914:web:00233b2bab3ebdf83cfd23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import { getDatabase, ref, set, child, get } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-database.js";

const db = getDatabase(app);

const name = document.getElementById('username');
const submit = document.getElementById('sub_btn');

//-- -REGISTER USER TO FIREBASE
function RegisterUser() {
    const dbRef = ref(db);
    console.log("Working")
    get(child(dbRef, "users/" + name.value)).then((snapshot) => {
        if (snapshot.exists()) {
            $('#staticBackdd').modal('show')
        }
        else {
            set(ref(db, "users/" + name.value),
                {
                    username: name.value,
                })
                .then(() => {
                    $('#staticBackd').modal('show')
                })
                .catch((error) => {
                    alert("error" + error);
                    I
                })
        }
    });
}

submit.addEventListener('click', RegisterUser);