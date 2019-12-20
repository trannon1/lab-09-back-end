// Bryan Tran
'use strict';

function Location(request, geoData){
  console.log(geoData.body);
  console.log(geoData.formatted_address);
  console.log(geoData.data.formatted_address);
    this.search_query = request;
    this.formatted_query = geoData.formatted_address;
    this.latitude = geoData.geometry.location.lat;
    this.longitude = geoData.geometry.location.lng;
  }

module.exports = Location;