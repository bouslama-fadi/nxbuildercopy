var express = require('express');
var router = express.Router();
var bodyParser = require("body-parser");
var tag = require('../models/Tag');

/* GET home page. */
router.get('/', function (req, res, next) {
  tag
    .find({})
    .sort({
      date: "desc"
    })
    .exec(function (err, tag) {
      res.render("index", {
        tag: tag
      });
    })
});

// Number of tags
router.get('/', function (req, res, next) {
  tag.count({}).exec(function (err, cnt) {
    res.render("index", {
      cnt: cnt
    });
  })
});


// delete a tag

router.delete('/:id', (req, res) => {
  tag.remove({
    _id: req.params.id
  }).then(tag => {
    res.redirect('/');
  }).catch((err) => {
    console.log(err);
  });
});

router.get('/about', function (req, res, next) {
  res.render('about');
});


router.get('/ftp', function (req, res, next) {
  res.render('ftp');
});

module.exports = router;