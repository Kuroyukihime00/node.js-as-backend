const express = require("express");
const app = express();
const port = 3000;

// Middleware to handle JSON requests
app.use(express.json());

// Root route
app.get("/", (req, res) => {
	res.send("Hello World!");
});

// Example API route
app.get("/api", (req, res) => {
	res.send("API Endpoint");
});

// Example POST route to handle JSON data
app.post("/api/data", (req, res) => {
	const data = req.body;
	res.json({ message: "Data received", data });
});

// Start the server
app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
