(function() {
  'use strict';

  angular
    .module('app.core.entities', ['ngResource', 'ngMockE2E'])
    .run(httpMock);

  httpMock.$inject = ['$httpBackend', '$filter'];

  /* @ngInject */
  function httpMock(httpBackend, filter) {
    // 6 members
    // 4 sessions
    var entities;

    var pathWithId = new RegExp('\\/api\\/[a-zA-Z0-9_-]+\\/[0-9]+');
    var path = new RegExp('\\/api\\/[a-zA-Z0-9_-]+');
    var pathPostImage = '/api/members/image';

    initializeEntities();
    linksEntities();

    httpBackend.whenGET(pathWithId).respond(handlePathWithId);
    httpBackend.whenGET(path).respond(handlePathWihtoutId);

    httpBackend.whenGET(/\.html/).passThrough();
    httpBackend.whenGET(/\.svg/).passThrough();

    httpBackend.whenPOST(pathPostImage).respond(handlePostImage);
    httpBackend.whenPOST(path).respond(handlePost);

    /*
     $httpBackend.whenPUT(/^\/api\/todos\/\d+$/).respond(function(method, url, data, headers) {
     var item = JSON.parse(data);
     for (var i = 0, l = things.length; i < l; i++) {
     if (things[i].id === item.id) {
     things[i] = item;
     break;
     }
     }

     return [200, item];
     });
     */

    function handlePostImage(method, url, data) {
      console.log(data);

      return [201,null];
    }

    function handlePost(method, url, data) {
      var newEntity = angular.fromJson(data);
      var regexp = new RegExp('\\/api\\/([a-zA-Z0-9_-]+)\\/?([0-9]?)');
      var entityType = url.match(regexp)[1];
      newEntity._id = Date.now();

      //traitement
      if (entityType === 'members') {
        newEntity.name = newEntity.firstName + ' ' + newEntity.lastName;
        newEntity.seanceLeft = 0;
        newEntity.picture = null;

        console.log('create member : ');
        console.log(newEntity);

        logEvent('CREATE_MEMBER', [newEntity]);
      } else if (entityType === 'sessions') {

        console.log('create session : ');
        console.log(newEntity);

        logEvent('CREATE_SESSION', []);
      } else {
        return [404, new Error('unknown API')];
      }

      entities[entityType].push(newEntity);

      return [201, newEntity];
    }

    function handlePathWihtoutId(method, url, data, headers) {
      var regexp = new RegExp('\\/api\\/([a-zA-Z0-9_-]+)');
      var entityType = url.match(regexp)[1];

      console.log('request ' + entityType + ' : ');
      console.log(entities[entityType]);

      return [200, entities[entityType]];
    }

    function handlePathWithId(method, url, data) {
      var regexp = new RegExp('\\/api\\/([a-zA-Z0-9_-]+)\\/([0-9]+)');
      var entityType = url.match(regexp)[1];
      var id = url.match(regexp)[2];
      var entity = filter('filter')(entities[entityType], {_id: id})[0];

      if (entity === null) {
        console.error('request ' + entityType + '/' + id + ' :  not found');
        return [404, 'entity ' + entityType + ' ' + id + 'does not exist'];
      }

      console.log('request ' + entityType + '/' + id + ' : ');
      console.log(entity);
      return [200, entity];
    }

    function logEvent(type, eventEntities, date) {
      var EVENTS = {
        CREATE_MEMBER: {
          category: 'ADMIN',
          title: 'Member creation'
        },
        CREATE_SESSION: {
          category: 'SESSION',
          title: 'Session of close-combat'
        },
        UPDATE_SESSION: {
          category: 'ADMIN',
          title: 'Session updated'
        },
        UPDATE_MEMBER: {
          category: 'ADMIN',
          title: 'Member updated'
        },
        BUY_SESSION: {
          category: 'BUY',
          title: 'Seances bought'
        }
      };

      var event = angular.copy(EVENTS[type]);
      event.date = date || new Date();
      event._id = Date.now();
      event.entities = eventEntities;

      entities.events.push(event);
    }

    function initializeEntities() {
      entities = {
        members : [
          {
            _id: 1,
            name: 'Tyrion Lannister',
            picture:'./assets/members/1.png',
            group: 'Close-combat',
            seanceLeft: 10,
            address: '13 avenue de broqueville 1200 Bruxelles',
            email: 'plomteuxquentin@gmail.com',
            phone: '+32 0474 55 63 30',
            events: {}
          },
          {
            _id: 2,
            name: 'John Snow',
            picture:'./assets/members/2.png',
            group: 'Close-combat',
            seanceLeft: 5,
            address: '13 avenue de broqueville 1200 Bruxelles',
            email: 'plomteuxquentin@gmail.com',
            phone: '+32 0474 55 63 30',
            events: {}
          },
          {
            _id: 3,
            name: 'Sansa Stark',
            picture:'./assets/members/3.png',
            group: 'Close-combat',
            seanceLeft: 1,
            address: '13 avenue de broqueville 1200 Bruxelles',
            email: 'plomteuxquentin@gmail.com',
            phone: '+32 0474 55 63 30',
            events: {}
          },
          {
            _id: 4,
            name: 'Joffrey Baratheon',
            picture:'./assets/members/4.png',
            group: 'Close-combat',
            seanceLeft: 0,
            address: '13 avenue de broqueville 1200 Bruxelles',
            email: 'plomteuxquentin@gmail.com',
            phone: '+32 0474 55 63 30',
            events: {}
          },
          {
            _id: 5,
            name: 'Margaery Tyrell',
            picture:'./assets/members/5.png',
            group: 'Close-combat',
            seanceLeft: 4,
            address: '13 avenue de broqueville 1200 Bruxelles',
            email: 'plomteuxquentin@gmail.com',
            phone: '+32 0474 55 63 30',
            events: {}
          },
          {
            _id: 6,
            name: 'Khal Drogo',
            picture:'./assets/members/6.png',
            group: 'Close-combat',
            seanceLeft:'demo',
            address: '13 avenue de broqueville 1200 Bruxelles',
            email: 'plomteuxquentin@gmail.com',
            phone: '+32 0474 55 63 30',
            events: {}
          }
        ],
        events: [],
        sessions: [
          {
            _id: 1,
            date: new Date('2015/06/23'),
            participants: [],
            nbrInscrits: 6
          },
          {
            _id: 2,
            date: new Date('2015/06/30'),
            participants: [],
            nbrInscrits: 6
          },
          {
            _id: 3,
            date: new Date('2015/09/01'),
            participants: [],
            nbrInscrits: 6
          },
          {
            _id: 4,
            date: new Date('2015/09/07'),
            participants: [],
            nbrInscrits: 6
          }
        ]
      };
    }

    function linksEntities() {
      // Create members
      entities.members.forEach(function(member) {
        logEvent('CREATE_MEMBER', [member]);
      });

      // Create sessions
      entities.sessions[0].participants.push(entities.members[0]);
      entities.sessions[0].participants.push(entities.members[1]);
      entities.sessions[0].participants.push(entities.members[2]);
      entities.sessions[0].participants.push(entities.members[3]);

      entities.sessions[1].participants.push(entities.members[0]);
      entities.sessions[1].participants.push(entities.members[2]);
      entities.sessions[1].participants.push(entities.members[3]);
      entities.sessions[1].participants.push(entities.members[4]);
      entities.sessions[1].participants.push(entities.members[5]);

      entities.sessions[2].participants.push(entities.members[0]);
      entities.sessions[2].participants.push(entities.members[1]);
      entities.sessions[2].participants.push(entities.members[2]);
      entities.sessions[2].participants.push(entities.members[3]);
      entities.sessions[2].participants.push(entities.members[4]);
      entities.sessions[2].participants.push(entities.members[5]);

      entities.sessions[3].participants.push(entities.members[3]);
      entities.sessions[3].participants.push(entities.members[4]);
      entities.sessions[3].participants.push(entities.members[5]);

      entities.sessions.forEach(function(session) {
        logEvent('CREATE_SESSION',session.participants, session.date);
      });
    }
  }
})();
