const express = require("express");
const userControllers = require("../controllers/userscontrollers");
const router = express.Router();

router
  .route("/")
  // create User
  .post(userControllers.createUser)
  // get all users
  .get(userControllers.getAllUsers);

router
  .route("/:id")
  // get a user by id
  .get(userControllers.getUserById)
  //  Update User
  .patch(userControllers.updateUser)
  // delete User
  .delete(userControllers.deleteUser);

module.exports = router;
