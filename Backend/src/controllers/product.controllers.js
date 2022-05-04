const router = require('express').Router();

const Product = require('../models/product.model');

router.post('/', async (req, res) => {
  try {
    const product = await Product.create(req.body);
    return res.send(product);
  } catch (err) {
    return res.status(500).send({ error: error.message });
  }
});

module.exports = router;