const mongoose = require("mongoose");

const relatedCategorySchema = mongoose.Schema({
  image: { type: String, required: true },
  name: { type: String, required: true },
});

const relatedCategory = mongoose.model(
  "relatedCategory",
  relatedCategorySchema
);
module.exports = relatedCategory;
