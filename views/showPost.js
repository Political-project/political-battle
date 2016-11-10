var h = require('hyperscript');

module.exports = function(name, message) {
  return h('h3', {}, `${name} writes...`,
   ('p', {}, `${message}`)
  )
}
