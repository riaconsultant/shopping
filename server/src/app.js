var express = require('express');
var app = express();
// var bodyparser = require('body-parser');
const apiRoute = require('./route/apiroute');
var compression = require('compression');
var helmet = require('helmet');


app.use(compression());
app.use(helmet());

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Headers','X-Requested-With,content-type,Authorization');
    next();
});

app.use('/api',apiRoute);

app.listen(3001,()=>{
    console.log('App listening on port 3001');
});
