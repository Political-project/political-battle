var Knex = require('knex')
var knexConfig = require('../knexfile')[process.env.NODE_ENV || 'development']
var knex = Knex(knexConfig)

module.exports = {
    getAllComments,
    getTopTenComments,
    getCommentById,
    getSentimentTotals,
    postComment,
    postVote
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

function postComment(newComment) {
    if (newComment.sentiment === 'positive') {
      return knex(newComment.table).insert({
        nickname: newComment.name,
        message: newComment.message,
        positive: 1})
    } else if (sentiment === 'negative' ) {
      return knex(newComment.table).insert({
        nickname: newComment.name,
        message: newComment.message,
        negative: 1})
    }
}

function postVote(voteObj){
  if (voteObj.vote == 'upvote'){
    return knex(voteObj.table).where('id', voteObj.id).increment('votecount', 1)
  } else if (voteObj.vote == 'downvote'){
    return knex(voteObj.table).where('id', voteObj.id).decrement('votecount', 1)
  }
}