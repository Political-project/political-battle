var h = require('hyperscript');

module.exports = function(table, person, positive, negative) {
  return h('div.sentimentBox.post', {id: `${table}Sentiment`},
    h('h3', {}, `Positivity directed at ${person}: ${positive}`),
    h('h3', {}, `Negativity directed at ${person}: ${negative}`)
  )
}
