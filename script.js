
const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");
const signupLink = document.getElementById("signupLink");

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    if (email !== "" && password !== "") {
        message.textContent =
            "Welcome to your Barbie World! 💖";
    } else {
        message.textContent =
            "Please enter your email and password.";
    }
});

signupLink.addEventListener("click", function(event) {
    event.preventDefault();

    message.textContent =
        "Your Barbie sign-up page is coming soon! 💕";
});
