const express = require('express');

const connectDB = require('./configs/db');
const app = express();
const PORT = 9000;

connectDB();


app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});