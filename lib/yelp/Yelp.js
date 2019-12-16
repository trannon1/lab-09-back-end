// Bryan Tran
'use strict';

function Yelp(value){
    this.name = value.name;
    this.image_url = value.image_url;
    this.price = value.price;
    this.rating = value.rating;
    this.url = value.url;
  }

module.exports = Yelp;