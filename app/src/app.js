var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/', function(req, res) {
  res.send('Hello World!');
});

var db = require('./models/');
app.get('/api/v1/incomes', function(req, res){
  db.Income.findAll().then(incomes => {
    if (!incomes) {
      console.log('収入データを取得できませんでした');
      res.send('Error');
    } else {
      res.json(incomes);
    }
  });
});

module.exports = app;
