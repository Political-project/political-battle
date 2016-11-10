
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('neutral').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('neutral').insert({
          id: 1,
          nickname: 'Gandalf',
          message: 'Trump is the new Sauron',
          votecount: '5',
          negative: '1'
        }),
        knex('neutral').insert({
          id: 2,
          nickname: 'michael',
          message: 'Make America great again, yeah!',
          votecount: '34',
          positive: '1'
        }),
        knex('neutral').insert({
          id: 3,
          nickname: 'james',
          message: 'I\'m never visiting the US again'
          votecount: '100',
          negative: '1'
        })
      ]);
    });
};
