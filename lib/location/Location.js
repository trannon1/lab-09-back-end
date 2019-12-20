// Bryan Tran
'use strict';

function Location(request, geoData){
  console.log(geoData.search_query);
  console.log(geoData.data.search_query);
    this.search_query = request;
    this.formatted_query = geoData.formatted_address;
    this.latitude = geoData.geometry.location.lat;
    this.longitude = geoData.geometry.location.lng;
  }

module.exports = Location;