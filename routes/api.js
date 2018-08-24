var express = require('express');
var router = express.Router();
var tag = require('../models/Tag');
var media = require('../models/Media');

/* ------------------------ TAGS ------------------------------------ */

/* GET all tags */

router.get('/tags', function (req, res, next) {
  tag.find({}).exec(function (err, tag) {
    res.json(tag)

  })
});

/* GET MASTER tags */

router.get('/masterTags', function (req, res, next) {
  tag.find({
    'bMaster': true
  }).exec(function (err, Mtag) {
    res.json(Mtag)
  })
});

/* GET Number of tags */

router.get('/numberTag', function (req, res, next) {
  tag.count({}).exec(function (err, cnt) {
    res.json(cnt);
  })
});

/* GET Tag By ID */
router.get('/tag/:id', (req, res) => {
  tag.findById(req.params.id, function (err, s) {
    if (err) {
      console.log(err);
    } else {
      res.json(s);
    }
  })
});


/* POST && validate New Tag */
router.post('/newTag', function (req, res, next) {
  const nt = new tag({
    title: req.body.title,
    color: req.body.color
    // bMaster: req.body.master
  });

  nt.save(function (err, c) {
    if (err) {
      console.log('error');

    } else {
      console.log('Nice');
      res.json('tag ajoutée');
    }
  })

});

/* ------------------------ MEDIA ------------------------------------ */

/* GET All Media */

router.get('/medias', function (req, res, next) {
  media.find({}).exec(function (err, media) {
    res.json(media)

  })
});

/* GET Media By ID */
router.get('/media/:id', (req, res) => {
  media.findById(req.params.id, function (err, m) {
    if (err) {
      console.log(err);
    } else {
      res.json(m);
    }
  })
});


/* GET Media By Tag */

module.exports = router;