"use strict";
// This is the main entry point for the server application
// It initializes the server and loads environment variables
// Import necessary modules
const express = require("express");
// Import the express module for connecting to the database
const mongoose = require("mongoose");
const dotenv = require("dotenv");
// Load environment variables
dotenv.config({ path: "./config.env" });
// Import the app module
const app = require("./app");

// DATABASE CONNECTION
// Create a mongoose db connection instance
const DB = process.env.DATABASE_LOCAL;
// connect to the mongoose DB
mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then((connectionObject) => {
    console.log("DB connection successful!");
  })
  .catch((error) => {
    console.log("Error connecting to the database!", error);
  });
// Define the port from environment variables or use a default
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});
