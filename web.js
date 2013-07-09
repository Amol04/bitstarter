
var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');
var buffer = new Buffer(3500);

buffer=fs.readFileSync('/home/ubuntu/bitstarter/index.html');
//var out=buffer.toString('utf-8');
var out="Hello\n";


app.get('/', function(request, response) {
  response.send('The response is '+out);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
