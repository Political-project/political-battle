var h = require('hyperscript');

module.exports = function(table) {
  return h('a' {href:`./${table}`}, "say something")
}
