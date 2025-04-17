const User = require("../models/userModel");

// create User
exports.createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        user: newUser,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "Failed request!",
      message: err,
    });
  }
};

// Update User

exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params, id, req.body, {
      new: true,
      runValidators: true,
    });
    console.log(req.params, req.body);
    res.status(200).json({
      status: "success",
      data: {
        user: updateUser,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "Failed request!",
      message: err,
    });
  }
};

// delete User

exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (error) {
    res.status(404).json({
      status: "Failed request!",
      message: error,
    });
  }
};

// get user by id
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "Failed request!",
      message: error,
    });
  }
};

// get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      status: "success",
      results: users.length,
      data: {
        users,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "Failed request!",
      message: error,
    });
  }
};
