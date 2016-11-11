var h = require('hyperscript');

module.exports = function(name, message) {
  return h('div', {class: "post"},
    h('h2', {class: "name"}, `${name}`),
    h('p', {class: "message"}, `${message}`),
    h('button', {class: "upVote"}, "upVote"),
    h('button', {class: "upVote"}, "upVote")
  )
}
