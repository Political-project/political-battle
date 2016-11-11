var h = require('hyperscript')

// module.exports = function() {
//   return h('form', {action:"api/v1/trump", accepted-charset:"UTF-8", method:"post"})
// }

module.exports = function(table) {
 return h('form', {action:`api/v1/${table}`, method:"post", id:table},
   h('input', {placeholder:"name", type:"text", id:"name"}, "Name"),
   h('input', {placeholder:"message", type:"text", id:"message"}, "Message"),
   h('select', {name:"sentiment", label:"sentiment", id:"sentiment"},
     h('option', {value: "positive"}, "Positive"),
     h('option', {value: "negative"}, "Negative")
   ),
   h('input', {type:"submit", value:"submit"}, "Submit")
)
}
