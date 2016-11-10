var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/clinton', function(req, res, next) {
  res.json({posts: [{message: 'I like Hillary'}]});
});

module.exports = router;


//   / --> html  (js, css)
     // public/index.html
     // public/bundle.js

//   /api/v1/cats --> json


//   res.render('home')  (sever side rendering)
