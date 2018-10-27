const express = require('express');
var connect = require('connect');
var bodyParser = require('body-parser')
var cors = require('cors');
var app = express();
cors({
    credentials: true,
    origin: true
})
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
app.use(cors());

app.get('/', (req, res, next) => {
    res.json({
        'status': 'success get'
    });
    console.log(res.body);
});
app.post('/', (req, res, next) => {
    console.log(req.body);
    res.send('Server responed');
});
var server = app.listen(3456, "127.0.0.1", function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('running at http://' + host + ':' + port)
});