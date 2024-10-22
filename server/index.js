var express = require("express");
var app = express();

app.use(express.static(__dirname + "/.."));

app.use(function(req, res){
    res.sendFile('spw.html', {root: '..'})
});

// Yayınlarken IP ve portu sil
var port = 8080;
app.listen(port, function () {
  console.log(" * IP -> localhost:" + port);
});