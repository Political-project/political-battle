var express = require('express');
var router = express.Router();
var data = require('./db/db')

/* GET all the posts from the Clint Posts table. */
router.get('/clinton', function(req, res, next) {
  res.json({posts: [
    {message: 'I like Hillary', id:2, name: "Lord Master Michele"},
    {message: 'Hillary does not float my boat', id: 2, name:"james_cool_guy", sentiment:"negative"}
  ]});
});

/* GET a specific post from the Clinton Posts DB */
router.get('/clinton/:id', function(req, res, next) {
  res.json({message: "Hillary does not float my boat"});
});

/* POST to the clinton table */
router.post('/clinton', function(req, res, next){
})

/* GET most popular posts from hillary table */
router.post('/trump/popular', function(req, res, next){
  res.json({posts: [
    {message: 'I like Trump', id:2, name: "Lord Master Michele"},
    {message: 'Trump is too orange', id: 2, name:"james_cool_guy", sentiment:"negative"}
  ]});
})


/* POST to the trump table */
router.post('/trump', function(req, res, next){
})

/* GET most popular posts from Trump table */
router.post('/trump/popular', function(req, res, next){
  res.json({posts: [
    {message: 'I like Trump', id:2, name: "Lord Master Michele"},
    {message: 'Trump is too orange', id: 2, name:"james_cool_guy", sentiment:"negative"}
  ]});
})

/* GET a specific post from the Trump Posts table. */
router.get('/trump/:id'), function(req, res, next) {
  res.json({posts: [
    {message: 'I like Trump', id:2, name: "Lord Master Michele"},
    {message: 'Trump is too orange', id: 2, name:"james_cool_guy", sentiment:"negative"}
  ]});
}

module.exports = router;


//   / --> html  (js, css)
     // public/index.html
     // public/bundle.js

//   /api/v1/cats --> json


//   res.render('home')  (sever side rendering)
