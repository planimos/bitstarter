var express = require('express');
var  fs = require('fs'); 
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var buf = fs.readFileSync("index.html");
    var str = buf.toString('utf-8', 0, buf.length);
    response.send(str);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
