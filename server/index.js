var express = require('express');
var bodyParser = require('body-parser');
var selectAll = require('../database-mongo').selectAll;
console.log('items : ',selectAll)
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/../react-client/dist'));


app.get('/items', function (req, res) {
  selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.listen(app.get('port'), function() {
  console.log(`listening on port ${app.get('port')}!`);
});

