var h = require('hyperscript');

module.exports = function(table) {
  return h('h3', {id:"trumpPositive"}, `Positivity directed at Mr. Trump ${table}`)
}
