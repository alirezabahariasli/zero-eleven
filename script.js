document.getElementById("passwordForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let password = document.getElementById("passwordInput").value;
    let result = document.getElementById("result");
    result.textContent = "Password received: " + password.length + " characters";
});
document.getElementById("passwordForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let password = document.getElementById("passwordInput").value;
    let result = document.getElementById("result");
    let hasNumber = /\d/.test(password);
    let hasSpecial = /[!@#$%^&*]/.test(password);
    if (password.length < 8) {
        result.textContent = "Password is too short! Use at least 8 characters.";
    } else if (!hasNumber) {
        result.textContent = "Password must include at least one number!";
    } else if (!hasSpecial) {
        result.textContent = "Password must include at least one special character!";
    } else {
        result.textContent = "Strong password!";
    }
});
