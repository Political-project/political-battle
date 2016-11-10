
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('hillary').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('hillary').insert({id: 1, nickname: 'gabita', votecount: 5, sentiment: 'negative'}),
        knex('hillary').insert({id: 2, nickname: 'gabita', votecount: 34, sentiment: 'positive'}),
        knex('hillary').insert({id: 3, nickname: 'james', votecount: 100, sentiment: 'negative'})
      ]);
    });
};
