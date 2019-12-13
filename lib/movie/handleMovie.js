'use strict';

const superagent = require('superagent');
const Movie = require('./Movie');

function getMovie(response, movie){

    let url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIEKEY}&query=${movie.search_query}`;
  
    superagent.get(url)
    .then(results => {
      const movieObject = results.body.results.map(value => 
        new Movie(value)
      )
      response.send(movieObject);
    })
    .catch (err =>{
      response.send(err);
    })
  }

  module.exports = getMovie;