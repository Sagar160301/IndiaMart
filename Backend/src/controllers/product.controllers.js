const router = require('express').Router();

const Product = require('../models/product.model');

router.post('/', async (req, res) => {
  try {
    const product = await Product.create(req.body);
    return res.send(product);
  } catch (err) {
    return res.status(500).send({ err: err.message });
  }
});

router.get('/:type', async (req, res) => {
  try {
    const products = await Product.find({ type: req.params.type });
    return res.send(products);
  } catch (err) {
    return res.status(500).send({ err: err.message });
  }
});

module.exports = router;