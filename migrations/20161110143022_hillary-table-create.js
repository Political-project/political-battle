
exports.up = function(knex, Promise) {
  console.log('Creating Hillary table')
  return knex.schema.createTableIfNotExists('hillary', function(table){
    table.increments('id')
    table.string('nickname')
    table.integer('votecount')
    table.string('sentiment')
  })
  console.log('Table has been created')
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('hillary').then(function() {
    console.log("Hillary table removed");
  })
}
