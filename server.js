import express from "express";

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Example GET route
app.get("/messages", (req, res) => {
    res.json({ message: "Hello, World!" });
});

// Example POST route
app.post("/messages", (req, res) => {
  const userMessage = req.body; // Get the JSON data from the request body
    res.json({ receivedMessage: userMessage });
});

// Start the server
app.listen(3000, () => {
    console.log("Server is listening on port 3000...");
});
