const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { connectDB } = require("../db/db_connector");

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectDB();

// Simple route
app.get("/", (req, res) => {
  res.send("Hello from Backend!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
