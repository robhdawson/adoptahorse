'use strict';

const express = require('express');
const _ = require('lodash');

const data = require('./data.json');

function makeHorse() {
    return {
        name: _.sample(data.names),
        mood: _.sample(data.moods),
        talents: _.shuffle(data.talents).slice(0, _.sample([1,2,2,2,2,3])),
        id: (Math.random() + '').slice(2),
    };
}

var app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
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
