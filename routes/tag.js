var express = require('express');
var router = express.Router();
var bodyParser = require("body-parser");
var tag = require('../models/Tag');
var methodOverride = require("method-override");

/* GET home page. */
router.get('/', function (req, res, next) {
  tag
  .find({})
  .sort({date:"desc"})
  .exec(function (err, tag) {
    res.render("index", {
      tag : tag
    } );
   // res.json(tag);
  })
});

/* POST && validate New Tag */
router.post('/newTag', function (req, res, next) {
  const newTag = {
    title: req.body.title,
    color: req.body.color
    //  bMaster: req.body.master
  }

  new tag(newTag).save().then(tag => {
    res.redirect('/');
  }).catch((err) => {
    console.log(err);
  });

});

module.exports = router;