'use strict';
var debug = function (s){
    console.log(s);
}
var mongoose = require('mongoose'),
    Dress = mongoose.model('Dress'),
    User = mongoose.model('User'),
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
exports.login = function(req,res) {
    var uname = req.params.uname.substring(1);
    var passwd = req.params.pwd.substring(1);
    debug(uname +' '+passwd);
    User.findOne({name:uname,password:passwd},function(e,u) {if(e) {return res.send(e)
                                                                   } else {
                                                                    //u.password ='';   
                                                                             debug('trovato ' +uname);
                                                                              debug(u);
                                                                       if (u){u.password='';}
                                                                        return res.json(u);
                                                                    }
                                                            }
                )
    //res.send(req.params,200);
}