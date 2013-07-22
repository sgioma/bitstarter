var express = require('express');

var app = express.createServer(express.logger());

//var contentBuffer=fs.readFileSync('index.html');
//var text=contentBuffer.toString();

app.get('/', function(request, response) {
var fs = require('fs');
var contentBuffer=fs.readFileSync('index.html');
var texto=contentBuffer.toString();
  response.send(texto);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
