const express = require('express');

const app = express();
const port = process.env.PORT || 3002;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/html/index.html');
});

app.listen(3002, () => {
    console.log(`listening to port ${port}`);
});