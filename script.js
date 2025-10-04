document.getElementById("passwordForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let password = document.getElementById("passwordInput").value;
    let result = document.getElementById("result");
    result.textContent = "Password received: " + password.length + " characters";
});
