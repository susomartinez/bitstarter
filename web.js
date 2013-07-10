var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var getIndex = function(indexFile){
    var buffer = new Buffer(4000);
    buffer = fs.readFileSync(indexFile);
    return buffer.toString();
};

app.get('/', function(request, response) {
  var content = getIndex('index.html');
  response.send(content);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
