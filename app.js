const express = require("express");
const cors = require("cors");

// Create express app

const app = express();

// Middlewares
// This middleware parses incoming requests with JSON payloads
app.use(express.json());
// This middleware enables Cross-Origin Resource Sharing (CORS) for all routes
app.use(cors());

// Mounting the routes
app.use("/api/v1/users", require("./routes/authRoutes"));

// export app for use in other modules
module.exports = app;
