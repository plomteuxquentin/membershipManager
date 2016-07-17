'use strict';

const Hapi = require('hapi');
const port = process.env.PORT || 8001;

const staticRouteConfig = require('./routes/static');
const logConfig =  require('./logger');

const server = new Hapi.Server();
server.connection({port: port});

logConfig(server);
staticRouteConfig(server);

// Add the route
server.route({
  method: 'GET',
  path: '/api/members',
  handler: function (request, reply) {
    var members = [
      {
        firstName: 'Tyrion',
        lastName: 'Lannister',
        picture: './assets/members/1.png',
        seanceLeft: 0,
        address: '13 avenue de broqueville 1200 Bruxelles',
        email: 'tlannister@got.com',
        phone: '+32 0474 55 63 30'
      },
      {
        firstName: 'John',
        lastName: 'Snow',
        picture: './assets/members/2.png',
        seanceLeft: 0,
        address: '13 avenue de broqueville 1200 Bruxelles',
        email: 'jsnow@got.com',
        phone: '+32 0474 55 63 30'
      },
      {
        firstName: 'Sansa',
        lastName: 'Stark',
        picture: './assets/members/3.png',
        seanceLeft: 0,
        address: '13 avenue de broqueville 1200 Bruxelles',
        email: 'sStrak@got.com',
        phone: '+32 0474 55 63 30'
      },
      {
        firstName: 'Joffrey',
        lastName: 'Baratheon',
        picture: './assets/members/4.png',
        seanceLeft: 0,
        address: '13 avenue de broqueville 1200 Bruxelles',
        email: 'jbaratheon@got.com',
        phone: '+32 0474 55 63 30'
      },
      {
        firstName: 'Margaery',
        lastName: 'Tyrell',
        picture: './assets/members/5.png',
        seanceLeft: 0,
        address: '13 avenue de broqueville 1200 Bruxelles',
        email: 'mtyrell@got.com',
        phone: '+32 0474 55 63 30'
      },
      {
        firstName: 'Khal',
        lastName: 'Drogo',
        picture: './assets/members/6.png',
        seanceLeft: 0,
        address: '13 avenue de broqueville 1200 Bruxelles',
        email: 'kdrogo@got.com',
        phone: '+32 0474 55 63 30'
      }
    ];

    return reply(members);
  }
});

// Add the route
server.route({
  method: 'GET',
  path: '/api/seances',
  handler: function (request, reply) {

    return reply('Here the seances will be shown soon...');
  }
});

// Add the route
server.route({
  method: 'GET',
  path: '/api/sessions',
  handler: function (request, reply) {

    return reply('Here the sessions will be shown soon...');
  }
});
