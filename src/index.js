const express = require('express');
const app = express();
const PORT = process.env.PORT || 3333;

app.get('/', (req, res) => {
  res.json({'msg': 'Bora testar essa bagaça!!!'});
});

app.listen(PORT, () => {
  console.log(`The server is running in port ${PORT}`);
});