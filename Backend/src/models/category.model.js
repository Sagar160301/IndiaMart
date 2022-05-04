const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
  name: { type: String },
  image: { type: String },
  subCategories: { type: Array }
}, {
  versionKey: false,
  timestamps: true
});

module.exports = mongoose.model('category', categorySchema);