const mongoose = require("mongoose");

//shema
const UserSchema = new mongoose.Schema(
  {
    userName: { type: String, required: true, minLength: 5 },
    password: { type: String, required: true, minLength: 4, maxLength: 16 },
  },
  { timestamps: true },
);

//model
const User = mongoose.model("User", UserSchema);

//export the model
module.exports = User;
