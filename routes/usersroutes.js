"use strict";
const express = require("express");
const userControllers = require("../controllers/userscontrollers");
const router = express.Router();

router.route("/:id").patch(userControllers.updateUser);
