const firebaseConfig = {
    apiKey: "AIzaSyBAfKVZy8mXye5MxOMdi0PgCO5LH9hGwJc",
    authDomain: "baloons-popup-game.firebaseapp.com",
    projectId: "baloons-popup-game",
    storageBucket: "baloons-popup-game.appspot.com",
    messagingSenderId: "343543911139",
    appId: "1:343543911139:web:f78268ffa993a813fb6bd6",
    measurementId: "G-7GS9C88P8Z"
  };
const firebaseConfig;

// Initialize Firebase
firebase.initializeApp(firebaseConfig);




function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password);
}

function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password);



    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            // ..
        });
}

function logout() {
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });
}

function signup() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password);
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
        });
}
const auth = firebase.auth();
var database = firebase.database();