const router = require("express").Router();

const relatedProduct = require("../models/relatedProduct.model");

router.post("/", async (req, res) => {
  try {
    let data = await relatedProduct.create(req.body);
    return res.send(data);
  } catch (error) {
    return res.send({ message: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    let allData = await relatedProduct.find({}).lean().exec();
    return res.send(allData);
  } catch (error) {
    return res.send({ message: error.message });
  }
});

module.exports = router;
