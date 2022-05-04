const express = require('express');

const connectDB = require('./configs/db');
const categoryController = require('./controllers/category.controllers');
const app = express();
const PORT = 9000;

app.use(express.json());
app.use('/categories', categoryController);

connectDB();


app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});