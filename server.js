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
const getMovie = require('./lib/movie/getMovie');
const getYelp = require('./lib/yelp/getYelp');

// routes
app.get('/location', getLocation);

app.get('/weather', getWeather);

app.get('/events', getEvent);

app.get('/movies', getMovie);

app.get('/yelp', getYelp);

app.get('*', (request, response) => {
  response.status(404).send('Page not found');
});

client.connect()
  .then( () => {
    app.listen(PORT, () => console.log(`App is on port ${PORT}`));
  })
  .catch( err => console.error(err));

