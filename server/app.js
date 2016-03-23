var express = require('express');
var app = express();

var http = require('http').Server(app);

var socketserver = require('./socket.server.js')(http);

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});