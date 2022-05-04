const express = require('express');

const app = express();
const PORT = 9000;

app.get('/test', (req, res) => {
  res.send('initial test');
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});