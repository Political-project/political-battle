var h = require('hyperscript');

module.exports = function(name, message, id, table, voteCount) {
  return h('div.post', {},
    h('a', {href:`api/v1/posts/${table}/${id}`},
      h('h2', {class: "name"}, `${name}`),
      h('p', {class: "message"}, `${message}`),
      h('h3', {class: "votes"}, `net vote:${voteCount}`)
    ),
    h('button', {class: "upVote"}, "upVote"),
    h('button', {class: "downVote"}, "downVote")
  )
}
