// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDrCiSOPfs6YiBAF4MUnXJmRks0y0m_StE",
    authDomain: "trade-ai-2e791.firebaseapp.com",
    databaseURL: "https://trade-ai-2e791-default-rtdb.firebaseio.com",
    projectId: "trade-ai-2e791",
    storageBucket: "trade-ai-2e791.appspot.com",
    messagingSenderId: "21470115070",
    appId: "1:21470115070:web:03f349877cb579c6a3e1af"
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
            alert("Account Already Exist!");
        }
        else {
            set(ref(db, "users/" + name.value),
                {
                    username: name.value,
                })
                .then(() => {
                    alert("user added successfully");
                })
                .catch((error) => {
                    alert("error" + error);
                    I
                })
        }
    });
}

submit.addEventListener('click', RegisterUser);