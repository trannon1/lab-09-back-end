// Bryan Tran
'use strict';

const client = require('../client');
const superagent = require('superagent');
const Location = require('./Location');

function handleLocation(response, location){
  const sqlQuery = 'SELECT * FROM location WHERE search_query = $1';
  const safeValues = [location];
  client.query(sqlQuery, safeValues)
    .then(sqlResults => {
      if(sqlResults.rows.length){
        response.status(200).json(sqlResults.rows[0]);
      } else {
        const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${process.env.GEOKEY}`;
        superagent.get(url)
          .then(results => {
            const locationObject = new Location(location, results.body.results[0]);
        
            const sql = `INSERT INTO location (search_query, formatted_query, latitude, longitude) VALUES ($1, $2, $3, $4);`;
            const safeValues = [locationObject.search_query, locationObject.formatted_query, locationObject.latitude, locationObject.longitude];

            client.query(sql, safeValues)

            response.send(locationObject);

          })
          .catch(error => {
            console.log(error)
            response.send(error).status(500);
          });
      }
  })
}

module.exports = handleLocation;