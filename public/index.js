var request = require('superagent')
var showPost = require('../views/showPost.js')
var morphdom = require('morphdom')

var formContent = require('../views/formContent.js')
var respondButton = require('../views/respondButton.js')

var clinton = document.getElementById('clinton-posts')
var trump = document.getElementById('trump-posts')
var form = document.getElementById('formArea')

form.appendChild(formContent('trump'))

request
  .get('api/v1/posts/clinton')
  .end (function(error, response){
    if (error) {
      console.log(error)
    }
    else {
      for (var i = 0; i < response.body.posts.length; i++){
        post = showPost(response.body.posts[i].name, response.body.posts[i].message)
        clinton.appendChild(post)
      }
    }
    clinton.appendChild(respondButton("clinton"))
  })

request
  .get('api/v1/posts/trump')
  .end (function(error, response){
    if (error) {
      console.log(error)
    }
    else {
      for (var i = 0; i < response.body.posts.length; i++){
        post = showPost(response.body.posts[i].name, response.body.posts[i].message)
        trump.appendChild(post)
      }
      trump.appendChild(respondButton("trump"))
    }
  })

request
  .get('api/v1/posts/trump/sentiment')
  .end (function(error, response){
  })
