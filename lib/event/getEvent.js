'use strict';

const handleEvent = require('./handleEvent');

function getEvent (request, response){
  const event = request.query.data;

  handleEvent(response, event);
};

module.exports = getEvent;