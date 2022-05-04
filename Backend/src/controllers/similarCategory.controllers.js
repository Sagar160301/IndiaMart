const router = require("express").Router();

const similarCategory = require("../models/similarCategory");

router.post("/", async (req, res) => {
  try {
    const data = await similarCategory.create(req.body);
    return res.send(data);
  } catch (error) {
    return res.send({ message: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const allData = await similarCategory.find({}).lean().exec();
    return res.send(allData);
  } catch (error) {
    return res.send({ message: error.message });
  }
});

module.exports = router;
