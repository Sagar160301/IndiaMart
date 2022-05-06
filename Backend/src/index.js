const express = require("express");
const cors = require("cors");
const connectDB = require("./configs/db");
const { register, login } = require("./controllers/user.controllers");
const categoryController = require("./controllers/category.controllers");
const productController = require("./controllers/product.controllers");
const similarCategoryController = require("./controllers/similarCategory.controllers");
const relatedProductController = require("./controllers/relatedProduct.controller");
const relatedCategoryController = require("./controllers/relatedCategory.controller");
<<<<<<< HEAD
const user = require("./controllers/userdetails.controllers");
const booking = require("./controllers/booking.controllers");
=======

const productServiceController = require("./controllers/productService.controllers");

const user=require("./controllers/userdetails.controllers")
const booking=require("./controllers/booking.controllers")


>>>>>>> 037258c436094baa03c2206ca6491f843e67e735
const app = express();
const PORT = 9000;
app.use(express.json());
app.use(cors());
app.use("/products", productController);
app.use("/categories", categoryController);
app.use("/similarCategory", similarCategoryController);
app.use("/relatedProduct", relatedProductController);
app.use("/relatedCategory", relatedCategoryController);
<<<<<<< HEAD
app.use("/users", user); //to get the user details
app.use("/booking", booking); // for booking any item
app.post("/register", register); //for creating new user
app.post("/login", login); // for login into the website
=======

app.use("/proudctService", productServiceController);

app.use("/users",user);    //to get the user details
app.use("/booking",booking);  // for booking any item

app.post("/register", register);  //for creating new user

app.post("/login", login);  // for login into the website


>>>>>>> 037258c436094baa03c2206ca6491f843e67e735
connectDB();
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
