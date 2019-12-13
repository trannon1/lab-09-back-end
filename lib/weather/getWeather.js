'use strict';

const handleWeather = require('./handleWeather');

function getWeather (request, response){
  const weather = request.query.data;

  handleWeather(response, weather);
};

module.exports = getWeather;