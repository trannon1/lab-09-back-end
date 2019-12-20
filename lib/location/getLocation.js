// Bryan Tran
'use strict';

const handleLocation = require('./handleLocation');

function getLocation (request, response){
  console.log(request.query);
  const location = request.query.data;

  handleLocation(response, location);
};


module.exports = getLocation;