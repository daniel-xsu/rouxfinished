var express = require('express');
var router = express.Router();
var appdata = require('../data.json');

/* GET home page. */

router.get('/', function (req, res) {
  res.render('index', {
    title: 'My Home page'
  });
});

/* GET report table page. */

router.get('/qrstable', function (req, res) {
  res.render('qrstable', {
    title: 'My QRS Table'
  });
});

/* GET rli detail page. */

router.get('/rli/:rliid', function (req, res) {
  res.render('rli', {
    title: 'My RLI Detail Info',
    rliid: req.params.rliid
  });
});
/* GET report table page. */

router.get('/report1', function (req, res) {
  res.render('report1', {
    title: 'My Report Table'
  });
});

//
//router.get('/index', function(req, res) {
//  var myArtwork = [];
//  var myArtists = [];
//
//  myArtists = appdata.speakers;
//  appdata.speakers.forEach(function(item) {
//    myArtwork = myArtwork.concat(item.artwork);
//  });
//  res.render('index', {
//    title: 'Home',
//    artwork: myArtwork,
//    artists: myArtists,
//    page: 'home'
//  });
//});
//
///* GET speakers page. */
//router.get('/speakers', function(req, res) {
//  var myArtwork = [];
//  var myArtists = [];
//  myArtists = appdata.speakers;
//
//  appdata.speakers.forEach(function(item) {
//    myArtwork = myArtwork.concat(item.artwork);
//  });
//  res.render('speakers', {
//    title: 'Speakers',
//    artwork: myArtwork,
//    artists: myArtists,
//    page: 'artistList'
//  });
//});
//
//
///* GET speakers detail page */
//router.get('/speakers/:speakerid', function(req, res) {
//  var myArtwork = [];
//  var myArtists = [];
//
//  appdata.speakers.forEach(function(item) {
//    if (item.shortname == req.params.speakerid) {
//      myArtists.push(item);
//      myArtwork = myArtwork.concat(item.artwork);
//    }
//  });
//  res.render('speakers', {
//    title: 'Speakers',
//    artwork: myArtwork,
//    artists: myArtists,
//    page: 'artistDetail'
//  });
//});




module.exports = router;