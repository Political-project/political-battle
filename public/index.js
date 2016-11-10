var request = require('superagent')
var showPost = require('../views/showPost.js')

var main = document.querySelector('main')

request
  .get('https://api/v1/posts/clinton')
  .end (function(error, reponse){
    if (error) {
      console.log(error)
    }
    else {
      post = showPost(response.name, response.message)
      main.appendChild(post)
    }
  })
