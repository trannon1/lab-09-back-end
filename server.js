'use strict';

const express = require('express');
require('dotenv').config();
const cors = require('cors');
const app = express();
const superagent = require('superagent');
const PORT = process.env.PORT || 3001;
app.use(cors());

const client = require('./lib/client');
const getLocation = require('./lib/location/getLocation');
const getWeather = require('./lib/weather/getWeather');
const getEvent = require('./lib/event/getEvent');

// routes
app.get('/location', getLocation);

app.get('/weather', getWeather);

app.get('/events', getEvent);

app.get('/movies', (request, response) => {
  try{
    getMovie(request, response);
  }
  catch(error){
    console.error(error); // will turn the error message red if the environment supports it

    response.status(500).send('so sorry, something is not working on our end');
  }
})

app.get('/yelp', (request, response) => {
  try{
    getYelp(request, response);
  }
  catch(error){
    console.error(error); // will turn the error message red if the environment supports it

    response.status(500).send('so sorry, something is not working on our end');
  }
})

function getMovie(request, response){

  let query = request.query.data.search_query;
  let url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIEKEY}&query=${query}`;

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

function getYelp(request, response){
  let latitude = request.query.data.latitude;
  let longitude = request.query.data.longitude;

  let url = `https://api.yelp.com/v3/businesses/search?latitude=${latitude}&longitude=${longitude}`;


  superagent.get(url).set('Authorization', `Bearer ${process.env.YELPKEY}`)
  .then(results => {
    const yelpObject = results.body.businesses.map(value => 
      new Yelp(value)
    )
    response.send(yelpObject);
  })
  .catch (err =>{
    response.send(err);
  })
}

function Movie(value){
  this.title = value.title;
  this.overview = value.overview;
  this.average_votes = value.vote_average;
  this.total_votes = value.vote_count;
  this.image_url = value.poster_path;
  this.popularity = value.popularity;
  this.released_on = value.release_date;
}

function Yelp(value){
  this.name = value.name;
  this.image_url = value.image_url;
  this.price = value.price;
  this.rating = value.rating;
  this.url = value.url;
}

app.get('*', (request, response) => {
  response.status(404).send('Page not found');
});

client.connect()
  .then( () => {
    app.listen(PORT, () => console.log(`App is on port ${PORT}`));
  })
  .catch( err => console.error(err));

