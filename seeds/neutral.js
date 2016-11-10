
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('neutral').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('neutral').insert({
          id: 1,
          nickname: 'michael',
          message: 'The system is flawed',
          votecount: 5,
          negative: '1'
        }),
        knex('neutral').insert({
          id: 2,
          nickname: 'michael',
          message: 'But we can all be friends now',
          votecount: 34,
          positive: '1'
        }),
        knex('neutral').insert({
          id: 3,
          nickname: 'james',
          message: 'I would never believe in the system again',
          votecount: 100,
          negative: '1'
        })
      ]);
    });
};
