var express = require('express');
var router = express.Router();
 const anaSayfa=function(req,res){
  res.render('index',{'title':'YAKALI GROUP'});
 }
 const iletisim=function(req,res){
    res.render('iletisim',{'title':'İletişim'});
 }
 module.exports={
  anaSayfa,
  iletisim
 };