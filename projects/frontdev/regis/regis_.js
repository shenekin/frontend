document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Simple form validation
    if (name === "" || email === "" || password === "" || confirmPassword === "") {
        alert("All fields are required.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    // Create data object to send to backend
    const userData = {
        name: name,
        email: email,
        password: password
    };

    // Send data to backend using Fetch API
    fetch("https://your-backend-api.com/register", {
        method: "POST", // HTTP method
        headers: {
            "Content-Type": "application/json", // Specify the content type
        },
        body: JSON.stringify(userData), // Convert data to JSON format
    })
    .then(response => response.json())  // Parse the JSON response from backend
    .then(data => {
        console.log("Success:", data); // Handle success (response from backend)
        alert("Registration successful!");
        document.getElementById("registerForm").reset(); // Reset form after success
    })
    .catch(error => {
        console.error("Error:", error);  // Handle errors
        alert("An error occurred. Please try again.");
    });
});
