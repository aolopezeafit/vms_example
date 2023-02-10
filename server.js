var express = require('express');
var cors = require('cors');
var app = express();
const PORT = 9898;
const HOST = '0.0.0.0';
const VERSION = "1.23.01.27.06"

app.use(express.json());
app.use(cors());

app.get('/', async function (req, res, next) {
    try { 
        res.setHeader('Content-Type', 'application/json');
        let data = {
            message: "Hello world!!!",
            version: VERSION
        }
        res.end(JSON.stringify(data));
    } catch (error) {
        res.status(400).send(JSON.stringify(error));
    }
});

app.get('/version', async function (req, res, next) {
    try { 
        res.end(JSON.stringify({ "version": VERSION }));
    } catch (error) {
        res.status(400).send(JSON.stringify(error));
    }
});

app.post('/suggest', async function (req, res, next) {
    try {
        console.log(req.body.input)
        res.setHeader('Content-Type', 'application/json');
        let data = {
            message: "Hello world!!!"
        }
        res.end(data);
    } catch (error) {
        res.status(400).send(JSON.stringify(error));
    }
});

app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
});