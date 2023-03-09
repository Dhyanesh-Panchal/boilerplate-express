let express = require('express');
let app = express();
const bodyParser = require('body-parser')
require('dotenv').config() // to load enviornment variables from .env file


app.use('/public', express.static(__dirname + '/public'))
// console.log('Hello World')
app.use(bodyParser.urlencoded({ extended: false }))

app.use((req, res, next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
})
app.get('/', (req, res) => {
    // res.send("Hello Express");
    res.sendFile(__dirname + '/views/index.html');
    // console.log(req)
})

app.get('/json', (req, res) => {
    if (process.env.MESSAGE_STYLE == 'uppercase') {
        res.json({ "message": "Hello json".toUpperCase() });
    }
    else {
        res.json({ "message": "Hello json" });
    }
})

app.get('/now', (req, res, next) => {
    req.time = new Date().toString();
    next();
}, (req, res) => {
    res.json({ time: req.time });
})

app.get('/:word/echo', (req, res) => {
    let echoWord = { echo: req.params.word }
    res.json(echoWord);
})

app.get('/name', (req, res) => {
    let reqName = `${req.query.first} ${req.query.last}`;
    console.log(reqName);
    res.json({ name: reqName });
})

app.post('/name', (req, res) => {
    let Name = `${req.body.first} ${req.body.last}`;
    res.json({ name: Name })
})































module.exports = app;
