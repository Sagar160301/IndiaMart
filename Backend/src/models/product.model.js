const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  benefits: { type: Array },
  category: { type: mongoose.Types.ObjectId, ref: "category" }
});

module.exports = mongoose.model('product', productSchema);