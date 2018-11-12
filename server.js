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
app.use(bodyParser.urlencoded({
    extended: false
}))



// parse application/json
app.use(bodyParser.json())
app.use(cors());



function Path(distance, name, path) {
    this.distance = distance,
        this.name = name,
        this.array = path
};

var examplePath = [];
var distance = 0;

app.get('/', (req, res, next) => {
    res.json({
        'example': examplePath,
        distance
    });
    // res.send(JSON.stringify(examplePath))
    console.log('loaded data  ' + examplePath);
});
app.post('/', (req, res, next) => {
    // console.log(req.body);
    examplePath.push(new Path(req.body.totalDistance,'aaa',req.body.MarkersPath))
    distance = req.body.totalDistance
    console.log(req.body.MarkersPath)

    console.log('example path ' + examplePath)
    res.send('Server responed');
});
var server = app.listen(3456, "127.0.0.1", function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('running at http://' + host + ':' + port)
});