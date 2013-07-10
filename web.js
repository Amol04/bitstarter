var express = require('express');

var app = express.createServer(express.logger());




app.get('/', function(request, response) {
  var fs = require('fs');
var buffer = new Buffer(350);

buffer=fs.readFileSync('/home/ubuntu/bitstarter/index.html');
var out=buffer.toString('utf-8');
  response.send(out);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

