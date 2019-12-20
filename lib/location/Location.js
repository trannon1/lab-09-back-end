// Bryan Tran
'use strict';

function Location(request, geoData){
  // console.log('Results.body = ' + geoData.body);
  // console.log('Object.keys = ' + Object.keys(geoData.body));
  console.log('Results = ' + Object.keys(geoData.body.results[0]));
  // console.log(geoData.formatted_address);
  // console.log('Results.body.formatted_address = ' + geoData.body.formatted_address);
  // console.log(geoData.body[0]);
  // console.log('Results.body.0 = ' + geoData.body[0].formatted_address);
  // console.log(geoData.results[0]);
  // console.log(geoData.results[0].formatted_address);
    this.search_query = request;
    this.formatted_query = geoData.formatted_address;
    this.latitude = geoData.geometry.location.lat;
    this.longitude = geoData.geometry.location.lng;
  }

module.exports = Location;