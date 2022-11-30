var express = require('express');
var bodyparser = require('body-parser');
var connection = require('./Dbconnection');
var routes = require('./routes');
const cors = require("cors")

var app = express();
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
  
var server = app.listen(4200, function() {
  console.log('Server listening on port ' + server.address().port);
});


module.exports = app;
app.use(cors())
app.use('/',routes);
