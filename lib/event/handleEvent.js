'use strict';

const superagent = require('superagent');
const Event = require('./Event');

function getEvent(response, event){
  
    let url =  `http://api.eventful.com/json/events/search?app_key=${process.env.EVENTBRITEKEY}&where=${event.latitude},${event.longitude}&within=25`;
  
    superagent.get(url)
    .then(results => {
      let events = JSON.parse(results.text);
      const eventObject = events.events.event.map(value => 
        new Event(value)
      )
      response.send(eventObject);
    })
    .catch (err =>{
      response.send(err);
    })
  }

  module.exports = getEvent;