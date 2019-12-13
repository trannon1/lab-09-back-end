'use strict';

function Weather(summary, time){
    this.forecast = summary;
    this.time = new Date(time * 1000).toDateString();
  }

module.exports = Weather;