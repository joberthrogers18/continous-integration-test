const express = require('express');
const app = express();
const PORT = process.env.PORT || 3333;

app.get('/', (req, res) => {
  res.json({'msg': 'Deu bom meu chapa!!!'});
});

app.listen(PORT, () => {
  console.log(`The server is running in port ${PORT}`);
});