const express = require('express')
var router = express.Router();

/* GET users clubs  */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
