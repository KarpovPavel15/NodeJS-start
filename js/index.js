var express = require('express');
var bodyParser=require('body-parser');

var app=express();

var urlencodedParser=bodyParser.urlencoded({extended:false});
app.post('indexPost',urlencodedParser,function (req,res) {
    if(!req.body) return res.sendStatus(400)
    console.log(req.body);
    res.render('indexPost')
})