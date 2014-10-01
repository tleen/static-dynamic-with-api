'use strict';

var bodyParser = require('body-parser'),
express = require('express');

var app = express();

app.use(bodyParser.urlencoded({ extended : true}));
app.use(bodyParser.json());


var port = process.env.PORT || 9944;

var router = express.Router();

router.get('/', function(req, res){
  console.log('request on /');
  res.json({message: 'api is working'});
});

router.get('/time', function(req, res){
  console.log('request on /time');
  res.json({time : (new Date())});
});


app.use('/', router);
app.listen(port);
