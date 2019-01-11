var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

//database
const mongoose = require('mongoose');

//routers

app.get('/',(req,res)=>{
  
})
//listening to Server
app.listen(port,()=>{
  console.log("Server listening on http://localhost:"+ port);
})
