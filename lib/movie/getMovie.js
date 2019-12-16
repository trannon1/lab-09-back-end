// Bryan Tran
'use strict';

const handleMovie = require('./handleMovie');

function getMovie (request, response){
  const movie = request.query.data;

  handleMovie(response, movie);
};

module.exports = getMovie;