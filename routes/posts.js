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
})

/* GET most popular posts from a table */
router.get('/:candidate/popular', function(req, res, next){
  res.json({posts: [
    {message: 'I like Trump', id:2, name: "Lord Master Michele"},
    {message: 'Trump is too orange', id: 2, name:"james_cool_guy", sentiment:"negative"}
  ]})
})

//GET sentiment totals for a table
router.get('/:candidate/sentiment', function(req, res, next){
  database.getSentimentTotals(req.params.candidate)
    .then(function(sentimentTotals){
      res.json({totals: sentimentTotals})
    })
    .catch(function(error){
      res.json({error: [{message: 'There was a problem connecting to the database'}, {code: 500}]})
    })
})

/* GET a specific post from a table by ID */
router.get('/:candidate/:id', function(req, res, next) {
  res.json({message: "Hillary does not float my boat"})
})

/* POST to the a table */
router.post('/:candidate', function(req, res, next){
})





module.exports = router;
