const express = require('express');

const app = express();
const port = process.env.PORT || 3002;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/html/index.html');
});

var obj = {};
obj.name = "name";
obj.age = 20

app.get('/data', (req, res) => {
    res.json(obj);
});

app.listen(3002, () => {
    console.log(`listening to port ${port}`);
});