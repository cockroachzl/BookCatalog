var express = require('express');
var prerender = require('prerender-node');
prerender.set('prerenderServiceUrl', 'http://localhost:3000/')

var app = express();
app.use(prerender);
app.use(express.static('./app'));

app.listen(8080);
console.log("prerenderServiceUrl: " + prerender.getPrerenderServiceUrl());
console.log('Listening on port 8080');
