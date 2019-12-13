'use strict';

const superagent = require('superagent');
const Yelp = require('./Yelp');

function getYelp(response, yelp){

    let url = `https://api.yelp.com/v3/businesses/search?latitude=${yelp.latitude}&longitude=${yelp.longitude}`;
  
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

  module.exports = getYelp;