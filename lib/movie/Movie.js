// Bryan Tran
'use strict';

function Movie(value){
  this.title = value.title;
  this.overview = value.overview;
  this.average_votes = value.vote_average;
  this.total_votes = value.vote_count;
  this.image_url = 'https://image.tmdb.org/t/p/w300_and_h450_bestv2' + value.poster_path;
  this.popularity = value.popularity;
  this.released_on = value.release_date;
}

module.exports = Movie;