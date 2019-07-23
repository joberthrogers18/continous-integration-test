const express = require('express');
const app = express();
const PORT = process.env.PORT || 3333;

app.get("/", (req, res) => {
    res.send({hello: "world"});
});

app.listen(PORT, () => {
    console.log(`The server is on in port: ${PORT}`);
})
