
exports.up = function(knex, Promise) {
  console.log('Creating Trump table')
  return knex.schema.createTableIfNotExists('trump', function(table){
    table.increments('id')
    table.string('nickname')
    table.text('message')
    table.integer('votecount')
    table.string('sentiment')
  })
  console.log('Table has been created')
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('trump').then(function() {
    console.log("Trump table removed");
  })
}