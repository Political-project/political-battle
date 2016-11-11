var Knex = require('knex')
var knexConfig = require('../knexfile')[process.env.NODE_ENV || 'development']
var knex = Knex(knexConfig)

module.exports = {
    getAllComments,
    getTopTenComments,
    getCommentById,
    getSentimentTotals,
    postComment
}

function getAllComments(table) {
  return knex(table)
}

function getTopTenComments(table){
  return knex(table).orderBy('votecount', 'desc').limit(10)
}

function getCommentById(table, id) {
  return knex(table).where('id', id)
}

function getSentimentTotals(table) {
  return knex(table).sum('negative AS negative').sum('positive AS positive')
}

function postComment(table, name, message, sentiment) {
    if (sentiment === 'positive') {
      return knex(table).insert({nickname: name, message: message, positive: 1})
    } else if (sentiment === 'negative' ) {
      return knex(table).insert({nickname: name, message: message, negative: 1})
    }
}
