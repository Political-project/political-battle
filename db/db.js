var Knex = require('knex')
var knexConfig = require('../knexfile')[process.env.NODE_ENV || 'development']
var knex = Knex(knexConfig)

module.exports = {
    getAllComments,
    getCommentById,
    getPositive,
    getNegatives,
    postComment
}

function getAllComments(table) {
  return knex(table)
}

function getCommentById(table, id) {
  return knex(table).where('id', id)
}

function getPositive(table) {
  return knex(table).sum('positive')
}

function getNegatives(table) {
  return knex(table).sum('negative')
}

function postComment(table, name, message, sentiment) {
    if (sentiment === 'positive') {
      return knex(table).insert({nickname: name, message: message, positive: 1})
    } else if (sentiment == 'negative' ) {
      return knex(table).insert({nickname: name, message: message, negative: 1})
    }
}
