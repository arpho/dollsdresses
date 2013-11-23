'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
// Schema
var UserSchema = new Schema({
  name: String,
  superuser: Boolean,
  enabled: Boolean,
  password: String,
    icon: String,
  signup_date: { type: Date, default: Date.now }
},{ collection: 'users' });


mongoose.model('User', UserSchema);