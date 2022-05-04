const mongoose = require("mongoose");

const relatedProductSchema = mongoose.Schema({
  image: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  brand: { type: String, required: true },
  location: { type: String, required: true },
  mobile: { type: String, required: true },
});

const RelatedProduct = mongoose.model("relatedProduct", relatedProductSchema);
module.exports = RelatedProduct;

// "image": "https://5.imimg.com/data5/SELLER/Default/2022/1/IB/TX/TW/52181736/miss-rose-pink-lipstick-250x250.jpeg",
//       "name": "Miss Rose Pink Lipstick",
//       "price": 55,
//       "brand": "Cosmetic World",
//       "location": "New Delhi, Delhi, India",
//       "mobile": "Call 07942554198"
