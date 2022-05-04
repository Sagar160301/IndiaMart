const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
  name: { type: String },
  image: { type: String },
  subCategories: { type: Array },
  type:{type:String}
}, {
  versionKey: false,
  timestamps: true
});

module.exports = mongoose.model('category', categorySchema);
