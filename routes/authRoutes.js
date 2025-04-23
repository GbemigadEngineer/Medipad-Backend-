const express = require("express");
const { registerUserController } = require("../controllers/authController");

const router = express.Router();

// Routes

// Register User route
router.route("/register").post(registerUserController);

// export router
module.exports = router;
