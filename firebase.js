const firebaseConfig = {
  apiKey: "AIzaSyBB6CH1uHCjfzhg1nBJ850PLk3a7hNufn0",
  authDomain: "expression-login.firebaseapp.com",
  projectId: "expression-login",
  storageBucket: "expression-login.firebasestorage.app",
  messagingSenderId: "302590899891",
  appId: "1:302590899891:web:519814e0e2b96415df62c6",
  measurementId: "G-FGFPWYYXKE"
};
firebase.initializeApp(firebaseConfig);

function googleLogin() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
        .then(() => window.location.href = "dashboard.html")
        .catch(error => alert(error.message));
}

function googleSignup() {
    googleLogin();
}
