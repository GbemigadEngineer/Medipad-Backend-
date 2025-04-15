const express = require("express");
const userRouter = require("./routes/usersroutes");

// Create express app

const app = express();

app.use(express.json());

// Mounting the routes
app.use("/api/v1/users", userRouter);

// export app for use in other modules
module.exports = app;
