
var express = require('express');
var bodyParser = require('body-parser');
var userRouter = require('./routers/user.js');
var mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb://localhost/wannaBeBand');

app.use(bodyParser.json());

app.use(express.static(__dirname + './../dist'));

app.use('/api/user', userRouter);

app.listen(8000, function() {
  console.log('listening on port 8000');
});
