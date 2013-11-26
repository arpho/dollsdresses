'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
// Schema
var DressSchema = new Schema({
  nome: String,
  descrizione: String,
  main_foto: String,
  linea: String,
    prezzo:Number,
  gallery: [String]
});

/* Validations
ThingSchema.path('awesomeness').validate(function (num) {
  return num >= 1 && num <= 10;
}, 'Awesomeness must be between 1 and 10');*/

mongoose.model('Dress', DressSchema);
