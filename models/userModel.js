const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    name: { type: String, required: [true, "Name is required"], trim: true },
    password: {
      type: String,
      required: [true, "Password is required"],
      trim: true,
      minLength: [6, "Password must be at least 6 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      unique: [true, "Email already exists"],
    },
    plan: {
      type: String,
      enum: ["basic", "pro"],
      default: "basic",
    },
    proffession: {
      type: String,
    },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);


const User = mongoose.model("User", UserSchema);

module.exports = User;
