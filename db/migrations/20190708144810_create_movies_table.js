const table = 'movies'

exports.up = async knex => knex.schema.createTable(table, t => {
  t.increments('id').primary();
  t.string('title').notNullable();
  t.string('desc').notNullable();
  t.string('year').notNullable();
});

exports.down = async knex => knex.schema.dropTableIfExists(table)
