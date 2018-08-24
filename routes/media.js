var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('media/media');
});

/* GET New Media page */
router.get('/newMedia', function(req, res, next) {
  res.render('media/newMedia');
  });

module.exports = router;
