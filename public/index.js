var request = require('superagent')
var showPost = require('../views/showPost.js')
var cors = require('cors');
app.use(cors()) // CORS!!!!!!


var main = document.querySelector('main')

request
  .get('https://api/v1/posts/clinton')
  .end (function(error, reponse){
    if (error) {
      console.log(error)
    }
    else {
      console.log("Resolved")
      post = showPost(response.name, response.message)
      main.appendChild(post)
    }
  })
