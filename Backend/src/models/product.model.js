const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  benefits: { type: Array },
  type: { type: String, required: true }
}, {
  versionKey: false,
  timestamps: true
});

module.exports = mongoose.model('product', productSchema);