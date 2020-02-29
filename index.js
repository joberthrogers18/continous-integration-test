const express = require('express');
const app = express();
const PORT = process.env.PORT || 3333;
console.log(PORT);

app.use(express.json());

app.get('/', (req, res) => {
  res.json({hello: 'world'});
});

app.get('/teste2', (req, res) => {
  res.json({hello: 'world!!!!'});
});

app.listen(PORT, () => {
  console.log(`Server running in port ${PORT}`)
})

