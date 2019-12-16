// Bryan Tran
'use strict';

const superagent = require('superagent');
const Weather = require('./Weather');

function handleWeather(response, weather){
  let latitude = weather.latitude;
  let longitude = weather.longitude;

  let url =  `https://api.darksky.net/forecast/${process.env.DARKSKYKEY}/${latitude},${longitude}`;

  superagent.get(url)
  .then(results => {
    const weatherObject = results.body.daily.data.map(values => 
      new Weather(values.summary, values.time)
    )
    response.send(weatherObject);
  })
  .catch (err =>{
    response.send(err);
  })
}

module.exports = handleWeather;