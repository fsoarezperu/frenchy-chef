var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Frenchychef.com', texto1:'aqui estoy enviando variables' });
});

module.exports = router;
