const router = require("express").Router();

const productService = require("../models/productService.model");

router.post("/", async (req, res) => {
  try {
    const category = await productService.create(req.body);
    return res.send(category);
  } catch (err) {
    return res.status(500).send({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const categories = await productService.find({}).lean().exec();
    return res.send(categories);
  } catch (err) {
    return res.status(500).send({ error: error.message });
  }
});

module.exports = router;
