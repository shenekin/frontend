// script.js

// Add event listener to the form submission
document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from submitting

    // Get input values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Validate input fields
    if (name === "" || email === "" || password === "" || confirmPassword === "") {
        alert("All fields are required.");
        return;
    }

    // Validate email format
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    // If all validations pass, submit the form
    alert("Registration successful!");
    document.getElementById("registerForm").reset(); // Reset the form after successful submission
});
