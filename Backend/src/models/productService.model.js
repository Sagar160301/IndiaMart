const mongoose = require("mongoose");

const productServiceSchema = mongoose.Schema(
  {
    image: { type: String, required: true },
    name: { type: String, required: true },
    para1: { type: String, required: true },
    para2: { type: String, required: true },
    para3: { type: String, required: true },
    category: { type: String, required: true },
  },
  {
    versionkey: false,
    timestamps: true,
  }
);

const productService = mongoose.model("productService", productServiceSchema);
module.exports = productService;
