let express = require('express');
let app = express();
require('dotenv').config() // to load enviornment variables from .env file


app.use('/public', express.static(__dirname + '/public'))
// console.log('Hello World')
app.get('/', (req, res) => {
    // res.send("Hello Express");
    res.sendFile(__dirname + '/views/index.html');
})

app.get('/json', (req, res) => {
    if (process.env.MESSAGE_STYLE == 'uppercase') {
        res.json({ "message": "Hello json".toUpperCase() });
    }
    else {
        res.json({ "message": "Hello json" });
    }
})
































module.exports = app;
