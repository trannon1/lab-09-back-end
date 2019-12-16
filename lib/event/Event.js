// Bryan Tran
'use strict';

function Event(value){
    this.link = value.url;
    this.name = value.title;
    this.event_date = value.start_time;
    this.summary = value.description;
  }

module.exports = Event;