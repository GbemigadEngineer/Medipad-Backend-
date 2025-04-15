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

exports.deleteUser = async (req, res) =>{
  try{
    
  }catch(error){

  }
}