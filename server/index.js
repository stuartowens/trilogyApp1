
var express = require('express');
var bodyParser = require('body-parser');


var app = express();


app.use(bodyParser.json());

app.use(express.static(__dirname + './../dist'));


app.listen(8000, function() {
  console.log('listening on port 8000');
});
