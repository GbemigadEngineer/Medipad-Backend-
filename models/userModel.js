const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "A User must have a name!"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "A User must have an email address!"],
    unique: [true, "A users Email must be unique!"],
  },
  phonenumber: {
    type: Number,
    required: [true, "A user must have a phone Number"],
  },
  password: {
    type: String,
    required: [true, "A user must set a password!"],
  },
  plan: {
    type: Enumerator,
    required: true,
  },
  active: {
    type: Boolean,
    default: true,
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
