var h = require('hyperscript');

module.exports = function(name, message, id) {
  return h('div.post', {},
    h('a', {href:`/clinton/${id}`},
    h('h2', {class: "name"}, `${name}`),
    h('p', {class: "message"}, `${message}`),
    h('button', {class: "upVote"}, "upVote"),
    h('button', {class: "downVote"}, "downVote")
    )
  )
}
