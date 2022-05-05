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

// image": "https://5.imimg.com/data5/ECOM/Default/2022/4/YP/JQ/ES/112041886/jpg-20220424-122355-0000-500x500.jpg",
//       "name": "Natural and Chemical Free",
//       "price": 450,
//       "desc": "Mavashivaa - Golden Traders",
