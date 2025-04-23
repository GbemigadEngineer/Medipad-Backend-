const User = require("../models/userModel");

// Register User Controller

const registerUserController = async (req, res) => {
  try {
    // !. Get the data from req.body
    const { name, email, password, proffession, plan } = req.body;
    // 2. Validate the data gotten from req.body
    // 2a. CHeck to make sure necessary fields are provided
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required fields",
      });
    }
    // 2b. Check to make sure user does not already exist
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }
    // 2c. Check to make sure the plan is valid
    // From the model the default is basic, but if the user tries to pass a plan in the req.body and it isnt basic or pro, we should return an error
    if (plan && plan !== "basic" && plan !== "pro") {
      return res.status(400).json({
        success: false,
        message: "Invalid plan selected! Please select a valid plan",
      });
    }
    // 3. Create a new user
    const user = await User.create({
      name,
      email,
      password,
      proffession,
      plan,
    });
    // 4. Send a response back to the client
    res.status(201).json({
      success: true,
      message: "User registered successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// export controllers
module.exports = {
  registerUserController,
};
