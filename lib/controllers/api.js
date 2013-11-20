'use strict';
var debug = function (s){
    console.log(s);
}
var mongoose = require('mongoose'),
    Dress = mongoose.model('Dress'),
    async = require('async');


exports.getDressList = function(req,res) {
    
    return Dress.find(function(e,dresses) {
        if (e) {return res.send(e);}
        else {
            return res.json(dresses)
        }
    });
};
exports.getDress = function(req,res) {
    var dressId = req.params.dressId.substring(1);
    debug(dressId);
    Dress.findOne({_id:dressId}, function(e, d) {
        if (e){return res.send(e)
              } else {
                  return res.json(d);
              }
    });
    
}