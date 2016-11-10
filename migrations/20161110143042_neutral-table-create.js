
exports.up = function(knex, Promise) {
  console.log('Creating neutral table')
  return knex.schema.createTableIfNotExists('neutral', function(table){
    table.increments('id')
    table.string('nickname')
    table.text('message')
    table.integer('votecount')
    table.string('sentiment')
  })
  console.log('Table has been created')
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('neutral').then(function() {
    console.log("neutral table removed");
  })
}