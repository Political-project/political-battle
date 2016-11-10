
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('clinton').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('clinton').insert({
          id: 1,
          nickname: 'gabita',
          message: 'Everything suckssssss',
          votecount: 5,
          negative: '1'
        }),
        knex('clinton').insert({
          id: 2,
          nickname: 'gabita',
          message: 'She was the best candidate',
          votecount: 34,
          positive: '1'
        }),
        knex('clinton').insert({
          id: 3,
          nickname: 'james',
          message: 'The world does not need more lying politicians',
          votecount: 10,
          negative: '1'
        })
      ]);
    });
};
