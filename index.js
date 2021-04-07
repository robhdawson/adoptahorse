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

module.exports = {
  makeHorse,
};