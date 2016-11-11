var h = require('hyperscript')

// module.exports = function() {
//   return h('form', {action:"api/v1/trump", accepted-charset:"UTF-8", method:"post"})
// }

module.exports = function() {
 return h('form', {action:"api/v1/trump", method:"post"}, "hello",
   h('input', {placeholder:"name", type:"text"}, "Name"),
   h('input', {placeholder:"name", type:"text"}, "Message"),
   h('input', {placeholder:"name", type:"submit"}, "Submit")
)
}
