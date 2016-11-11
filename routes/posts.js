var express = require('express');
var router = express.Router();
var database = require('../db/db')

/* GET all the posts from the a table. */
router.get('/:candidate', function(req, res, next) {
  database.getAllComments(req.params.candidate)
    .then(function(table){
      res.json({ posts: table })
    })
    .catch(function(error){
      console.log(error)
      res.json({ error: [{message: 'There was a problem connecting to the database'}, {code: 500}]})
    })
})

/* GET most popular posts from a table */
router.get('/:candidate/popular', function(req, res, next){
  database.getTopTenComments(req.params.candidate)
    .then(function(popularComments){
      res.json({ topPosts: popularComments})
    })
    .catch(function(error){
      console.log(error)
      res.json({ error: [{message: 'There was a problem connecting to the database'}, {code: 500}]})
    })
})

//GET sentiment totals for a table
router.get('/:candidate/sentiment', function(req, res, next){
  database.getSentimentTotals(req.params.candidate)
    .then(function(sentimentTotals){
      res.json({ totals: sentimentTotals })
    })
    .catch(function(error){
      console.log(error)
      res.json({error: [{message: 'There was a problem connecting to the database'}, {code: 500}]})
    })
})

/* GET a specific post from a table by ID */
router.get('/:candidate/:id', function(req, res, next) {
  database.getCommentById(req.params.candidate, req.params.id)
    .then(function(comment){
      res.json({ message: comment })
    })
    .catch(function(error){
      console.log(error)
      res.json({error: [{message: 'There was a problem connecting to the database'}, {code: 500}]})
    })
})

/* POST to the a table */
router.post('/:candidate', function(req, res, next){
})





module.exports = router;
