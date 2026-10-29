const mongoose = require("mongoose");

//shema
const ListingSchema = new mongoose.Schema(
  {
    streetAddress: {
      type: String,
    },
    city: {
      type: String,
    },
    price: {
      type: Number,
    },
    size: {
      type: Number,
    },
    owner: {
      type: String,
    },
    category: {
      type: String,
    },
  },
  { timestamps: true },
);

//model
const Listing = mongoose.model("Listing", ListingSchema);

//export the model
module.exports = Listing;
