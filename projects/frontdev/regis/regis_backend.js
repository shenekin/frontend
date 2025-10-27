//npm install express body-parser

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// Middleware to parse JSON data
app.use(bodyParser.json());

// Handle POST request to "/register"
app.post("/register", (req, res) => {
    const { name, email, password } = req.body;

    // Here, you can add your validation, password hashing, etc.
    if (!name || !email || !password) {
        return res.status(400).json({ message: "All fields are required." });
    }

    // Simulate saving user to the database (here we just log it)
    console.log("User registered:", { name, email, password });

    // Send response back to the frontend
    res.status(201).json({ message: "Registration successful!" });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
