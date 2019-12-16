// Bryan Tran
'use strict';

const handleYelp = require('./handleYelp');

function getYelp (request, response){
  const yelp = request.query.data;

  handleYelp(response, yelp);
};

module.exports = getYelp;