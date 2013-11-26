'use strict';

var mongoose = require('mongoose')
, mongolab = require('./uri');

exports.mongoose = mongoose;

// Configure for possible deployment
var uristring =
  process.env.MONGOLAB_URI ||
  process.env.MONGOHQ_URL ||
 mongolab.mongoLab_uri ||
 'mongodb://localhost/dolls';

var mongoOptions = { db: { safe: true } };
//
// Connect to Database
mongoose.connect(uristring, mongoOptions, function (err, res) {
  if (err) {
    console.log ('ERROR connecting to: ' + uristring + '. ' + err);
  } else {
    console.log ('Successfully connected to: ');
  }
});
