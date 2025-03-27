function login() {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => window.location.href = "dashboard.html")
        .catch(error => alert(error.message));
}

function googleLogin() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
        .then(() => window.location.href = "dashboard.html")
        .catch(error => alert(error.message));
}

