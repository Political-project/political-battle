var express = require('express');
var router = express.Router();
var database = require('../db/db')

/* GET all the posts from the a table. */
router.get('/:candidate', function(req, res, next) {
  database.getAllComments(req.params.candidate)
  .then(function(clintonTable){
    res.json({posts: clintonTable})
  })
  .catch(function(error){
    res.json({error: [{message: 'There was a problem connecting to the database'}, {code: 500}]})
  })
});

/* GET a specific post from the Clinton Posts DB */
router.get('/clinton/:id', function(req, res, next) {
  res.json({message: "Hillary does not float my boat"});
});

/* POST to the clinton table */
router.post('/clinton', function(req, res, next){
})


/* GET posts from Trump table */
router.get('/trump', function(req, res, next){
  res.json({posts: [
    {message: 'I like Trump', id:2, name: "Lord Master Michele"},
    {message: 'Trump is too orange', id: 2, name:"james_cool_guy", sentiment:"negative"}
  ]});
})


/* GET all the posts from the Clinton Posts table. */
router.get('/trump', function(req, res, next) {
  database.getAllComments('trump')
  .then(function(clintonTable){
    res.json({clintonTable: clintonTable})
  })
  .catch(function(error){
    res.json({error: [{message: 'There was a problem connecting to the database'}, {code: 500}]})
  })
});

/* POST to the trump table */
router.post('/trump', function(req, res, next){
})

/* GET most popular posts from Trump table */
router.get('/trump/popular', function(req, res, next){
  res.json({posts: [
    {message: 'I like Trump', id:2, name: "Lord Master Michele"},
    {message: 'Trump is too orange', id: 2, name:"james_cool_guy", sentiment:"negative"}
  ]});
})

/* GET a specific post from the Trump Posts table. */
router.get('/trump/:id'), function(req, res, next) {
  res.json({posts: [
    {message: 'I like Trump', id:2, name: "Lord Master Michele"}
  ]
  });
}

module.exports = router;
