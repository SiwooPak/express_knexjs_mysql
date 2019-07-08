// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      timezone: 'UTC',
      host : '127.0.0.1',
      user : 'root',
      password : '931002',
      database : 'movies'
    },
      migrations: {
          directory: __dirname + '/db/migrations',
        },
      seeds: {
          directory: __dirname + '/db/seeds',
        },
    },
  production: {
      client: 'mysql',
      connection: process.env.DATABASE_URL,
      migrations: {
          directory: __dirname + '/db/migrations',
        },
      seeds: {
          directory: __dirname + '/db/seeds/production',
        },
    },

};
