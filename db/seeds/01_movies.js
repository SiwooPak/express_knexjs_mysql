exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('movies').del()
    .then(function () {
      // Inserts seed entries
      return knex('movies').insert([
        {
          "id":1,
          "title": 'Avengers: End Game',
          "desc": 'This movie is blabla',
          "year": 2019
        },
        {
          "id":2,
          "title": 'Parasite',
          "desc": 'This movie is Khan blabla',
          "year": 2019
        },
        {
          "id":3,
          "title": 'Spiderman: Far from home',
          "desc": 'This movie is blabla',
          "year": 2019
        }
      ]);
    });
};
