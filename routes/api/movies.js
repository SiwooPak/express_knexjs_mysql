const express = require('express');
const uuid = require('uuid');
const knex = require('../../db/knex');
const router = express.Router();


// All Movies
router.get('/', (req,res) => {
  knex.select().from('movies').orderBy('id').then((movies) => {
    if(movies == "") {
      res.status(400).json({
        msg: `No Movies Info...`
      });
    }
    res.send(movies);
  });
});

// View Movie
router.get('/:id', (req, res) => {
  knex.select()
      .from('movies')
      .where('id', req.params.id)
      .then(function(movie) {
        if(movie == "") {
          res.status(400).json({
            msg: `No Movie with the id of ${req.params.id}`
          });
        }
        res.send(movie);
      })
});

// Create Movie
router.post('/', (req, res) => {
  if (!req.body.title) {
    res.status(400).json({
      msg: "Please include a movie's title"
    });
    return res.redirect('/register');
  }

  knex('movies').insert({
    // id: uuid.v4(),
    title: req.body.title,
    desc: req.body.desc,
    year: req.body.year
  }).then(function() {
    knex.select()
        .from('movies')
        .then(function(movies) {
          res.send(movies);
        });
  });
  res.redirect('/movies');
});

// Update Movie
router.post('/:id', (req, res) => {
  knex('movies').where('id', req.params.id)
              .update({
                title: req.body.title,
                desc: req.body.desc,
                year: req.body.year
              })
              .then(function() {
                knex.select()
                    .from('movies')
                    .then(function(movies) {
                      res.send(movies);
                    });
              });
});

// Delete Member
router.delete('/:id', (req, res) => {
  knex('movies').where('id', req.params.id)
               .del()
               .then(function() {
                 knex.select()
                     .from('movies')
                     .then(function(movies) {
                       res.send(movies);
                     })
                })
                .catch(function(err) {
                  console.log(err);
                });

});

module.exports = router;
