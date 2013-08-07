var express = require('express');

var app = express.createServer(express.logger());




app.get('/', function(request, response) {
  var fs = require('fs');
var buffer = new Buffer(35000);

buffer=fs.readFileSync('./index.html');
var out=buffer.toString('utf-8');
  response.send(out);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});

