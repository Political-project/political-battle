var h = require('hyperscript');

module.exports = function(table) {
  return h('a', {href:`#`, id:table}, `say something about ${table}`)
}
