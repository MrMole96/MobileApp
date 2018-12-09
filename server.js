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



function Path(distance, name, path, tasks) {
    this.distance = distance,
        this.name = name,
        this.array = path
        this.tasks = tasks
};

var examplePath =[]
var distance = 0;
var gameName = "";
app.get('/', (req, res, next) => {
    res.json({
        'example': examplePath,
    });
    console.log('loaded data  ' + examplePath);
});
app.post('/', (req, res, next) => {
    // console.log(req.body);
    examplePath.push(new Path(req.body.totalDistance, req.body.gameName, req.body.MarkersPath, req.body.Tasks))
    res.send('Server responed');
});
var server = app.listen(3456, "127.0.0.1", function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('running at http://' + host + ':' + port)
});