'use strict';

const express = require('express');
const { makeHorse } = require('./index');

var app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', function(request, response) {
    response.sendFile(__dirname + '/index.html');
});

app.get('/horse', function(request, response) {
    response.send(makeHorse());
});


app.get('/horses', function(request, response) {

    const n = request.param('n') || 1;

    const horses = [];

    for (let i = 0; i < n; i++) {
        horses.push(makeHorse());
    }

    response.send(horses);

});

app.listen(process.env.PORT || 3001);
