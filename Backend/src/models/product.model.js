const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  benefits: { type: Array },
  category: { type: mongoose.Types.ObjectId, ref: "category" }
}, {
  versionKey: false,
  timestamps: true
});

module.exports = mongoose.model('product', productSchema);