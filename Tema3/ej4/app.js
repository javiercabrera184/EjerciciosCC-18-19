
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.put('/:suma1/:suma2/:total',function(req, res){
	
	res.send(req.params.suma1+"+"+req.params.suma2+"="+req.params.total);
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

module.exports = app;