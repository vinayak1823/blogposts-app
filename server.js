const express = require('express');
var app = express();
const dbfile= require('./connection');
const postroute=require('./routes/post');
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/post',postroute);

app.listen(5000,function (){
    console.log("Node started")
});