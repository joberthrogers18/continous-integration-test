const express = require('express');
const app = express();
const PORT = process.env.PORT || 3333;
const path = require('path');

//configurando engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render('index', {
        title: 'My first deploy continous',
        version: '0.0.1'
    });
});

app.listen(PORT, () => {
    console.log(`The server is on in port: ${PORT}`);
})
