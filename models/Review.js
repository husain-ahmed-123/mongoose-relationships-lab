const mongoose = require("mongoose");

//shema
const ReviewSchema = new mongoose.Schema(
  {
    reviewTitle: {
      type: String,
    },
    reviewBody: {
      type: String,
    },
    creator: {
      type: String,
    },
  },
  { timestamps: true },
);

//model
const Review = mongoose.model("Review", ReviewSchema);

//export the model
module.exports = Review;
