var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = new express();
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);
app.get('/', function (req, res) {
  res.sendFile(path.resolve(__dirname, 'pages/index.html'));
});
require('./routes/tyag.routes.js')(app);
app.listen(4000, function () {
  console.log('App listening on port 4000');
});
