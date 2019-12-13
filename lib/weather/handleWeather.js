'use strict';

function getWeather(request, response){
  let latitude = request.query.data.latitude;
  let longitude = request.query.data.longitude;

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

module.exports = getWeather;