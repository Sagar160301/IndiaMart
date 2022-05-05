const express = require("express");
const cors = require("cors");

const connectDB = require("./configs/db");
const categoryController = require("./controllers/category.controllers");
const productController = require("./controllers/product.controllers");
const similarCategoryController = require("./controllers/similarCategory.controllers");
const relatedProductController = require("./controllers/relatedProduct.controller");
const relatedCategoryController = require("./controllers/relatedCategory.controller");
const productServiceController = require("./controllers/productService.controllers");

const app = express();
const PORT = 9000;

app.use(express.json());

app.use(cors());

app.use("/products", productController);

app.use("/categories", categoryController);
app.use("/similarCategory", similarCategoryController);
app.use("/relatedProduct", relatedProductController);
app.use("/relatedCategory", relatedCategoryController);
app.use("/proudctService", productServiceController);

connectDB();

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
