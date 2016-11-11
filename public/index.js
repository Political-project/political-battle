var request = require('superagent')
var showPost = require('../views/showPost.js')
var morphdom = require('morphdom')

var formContent = require('../views/formContent.js')
var respondButton = require('../views/respondButton.js')
var showSentiment = require('../views/showSentiment.js')

var clinton = document.getElementById('clinton-posts')
var trump = document.getElementById('trump-posts')
var form = document.getElementById('formArea')

request
  .get('api/v1/posts/clinton/sentiment')
  .end(function(error, response){
    if (error) {
      console.log(error)
    } else {
      clinton.appendChild(showSentiment("clinton", "Hillary Clinton", response.body.totals[0].positive, response.body.totals[0].negative))
    }
  })

request
  .get('api/v1/posts/trump/sentiment')
  .end(function(error, response){
    if (error) {
      console.log(error)
    } else {
      trump.appendChild(showSentiment("trump", "Mr. Trump", response.body.totals[0].positive, response.body.totals[0].negative))
    }
  })


request
  .get('api/v1/posts/clinton')
  .end (function(error, response){
    if (error) {
      console.log(error)
    }
    else {
      for (var i = 0; i < response.body.posts.length; i++){
        var thisPost = response.body.posts[i]
        post = showPost(thisPost.nickname, thisPost.message, thisPost.id, "clinton", thisPost.votecount)
        clinton.appendChild(post)
      }
      clinton.appendChild(formContent('clinton'))
    }
  })


request
  .get('api/v1/posts/trump')
  .end (function(error, response){
    if (error) {
      console.log(error)
    }
    else {
      for (var i = 0; i < response.body.posts.length; i++){
        var thisPost = response.body.posts[i]
        post = showPost(thisPost.nickname, thisPost.message, thisPost.id, "trump", thisPost.votecount)
        trump.appendChild(post)
      }
      trump.appendChild(formContent('trump'))
    }
  })
