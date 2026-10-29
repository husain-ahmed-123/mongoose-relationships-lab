const mongoose = require("mongoose");

//shema
const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: 4,
      maxLengh: 100,
    },
  },
  { timestamps: true },
);

//model
const Category = mongoose.model("Category", CategorySchema);

//export the model
module.exports = Category;
