"use strict";
// This is the main entry point for the server application
// It initializes the server and loads environment variables
// Import necessary modules
const express = require("express");
// Import the express module for connecting to the database
const { Client } = require("pg");
const dotenv = require("dotenv");
// Load environment variables
dotenv.config({ path: "./config.env" });
// Import the app module
const app = require("./app");

// DATABASE CONNECTION
// Create a new PostgreSQL client instance
const client = new Client({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// connect to the client
client.connect().then(() =>{
    console.log("Connected to the database successfully...");
}).catch(err => {
    console.error("Database connection error:", err.stack);
})
// Define the port from environment variables or use a default
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});
