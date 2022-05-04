const express = require("express");
const cors = require("cors");

<<<<<<< HEAD
const connectDB = require('./configs/db');
const categoryController = require('./controllers/category.controllers');
const productController = require('./controllers/product.controllers');

=======
const connectDB = require("./configs/db");
const categoryController = require("./controllers/category.controllers");
const similarCategoryController = require("./controllers/similarCategory.controllers");
const relatedProductController = require("./controllers/relatedProduct.controller");
const relatedCategoryController = require("./controllers/relatedCategory.controller");
>>>>>>> sagar
const app = express();
const PORT = 9000;


app.use(express.json());
<<<<<<< HEAD
app.use('/categories', categoryController);
app.use('/products', productController);
=======
app.use(cors());
app.use("/categories", categoryController);
app.use("/similarCategory", similarCategoryController);
app.use("/relatedProduct", relatedProductController);
app.use("/relatedCategory", relatedCategoryController);
>>>>>>> sagar

connectDB();

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
