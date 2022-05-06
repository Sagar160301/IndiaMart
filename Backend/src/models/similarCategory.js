const mongoose = require("mongoose");

const similarCategorySchema = mongoose.Schema({
  image: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  desc: { type: String, required: true },
});

const similarCategory = mongoose.model(
  "similarCategory",
  similarCategorySchema
);

module.exports = similarCategory;
