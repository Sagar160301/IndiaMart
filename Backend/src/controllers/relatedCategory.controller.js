const router = require("express").Router();

const relatedCategory = require("../models/relatedCategory.model");

router.post("/", async (req, res) => {
  try {
    let data = await relatedCategory.create(req.body);
    res.send(data);
  } catch (error) {
    return res.send({ message: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    let allData = await relatedCategory.find({}).lean().exec();
    return res.send(allData);
  } catch (error) {
    res.send({ message: error.message });
  }
});

module.exports = router;
