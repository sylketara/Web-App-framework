var express = require('express');
var path = require("path");
var app = express();

app.set("views", path.join(__dirname, "public"));
app.set("view engine", "ejs");
app.get('/', function(req, res){
  res.send("sylke and cara");
});

app.listen(3002, function() {
  console.log('server running');
});
