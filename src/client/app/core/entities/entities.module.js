(function() {
  'use strict';

  angular
    .module('app.core.entities', ['ngResource', 'ngMockE2E'])
    .run(httpMock);

  httpMock.$inject = ['$httpBackend', '$filter'];

  /* @ngInject */
  function httpMock(httpBackend, filter) {
    var store = {
      members: [],
      sessions: [],
      events: []
    };

    var pathWithId = new RegExp('\\/api\\/[a-zA-Z0-9_-]+\\/[0-9]+[\?a-zA-Z0-9_-]?');
    var path = new RegExp('\\/api\\/[a-zA-Z0-9_-]+[\?a-zA-Z0-9_-]?');
    var pathPostImage = '/api/members/image';

    storeMocks();

    httpBackend.whenGET(pathWithId).respond(handleGet);
    httpBackend.whenGET(path).respond(handleQuery);

    httpBackend.whenGET(/\.html/).passThrough();
    httpBackend.whenGET(/\.svg/).passThrough();

    httpBackend.whenPOST(pathPostImage).respond(handlePostImage);
    httpBackend.whenPOST(path).respond(handlePost);

    httpBackend.whenPUT(pathWithId).respond(handlePut);

    function handlePostImage(method, url, data) {
      console.log(data);

      return [201,null];
    }

    function handlePost(method, url, data, headers, params) {
      var newEntity = angular.fromJson(data);
      var regexp = new RegExp('\\/api\\/([a-zA-Z0-9_-]+)\\/?([0-9]?)');
      var entityType = url.match(regexp)[1];

      if (!store.hasOwnProperty(entityType)) {
        return [404, new Error('unknown API')];
      }

      if (entityType === 'members') {
        newEntity = createMember(newEntity);

        console.log('create member : ');
        console.log(newEntity);
      } else if (entityType === 'sessions') {
        newEntity = createSession(newEntity.date, newEntity.participants, newEntity.nbrSubscribers);

        console.log('create session : ');
        console.log(newEntity);
      }

      store[entityType].push(newEntity);

      return [201, newEntity];
    }

    function handleQuery(method, url, data, headers, params) {
      var regexp = new RegExp('\\/api\\/([a-zA-Z0-9_-]+)');
      var entityType = url.match(regexp)[1];
      var response = [200];
      var entitiesFiltered = [];

      if (!store.hasOwnProperty(entityType)) {
        return [404, new Error('unknown API')];
      }

      if (entityType === 'events' && params.member) {
        // If a member is given filter event for that member
        entitiesFiltered = store.events.filter(function(event) {
          return event.entities.indexOf(parseInt(params.member)) !== -1;
        });

        response.push(entitiesFiltered);
      }
      else if (entityType === 'members') {
        response.push(filter('orderBy')(store[entityType], 'name'));
      }
      else {
        response.push(store[entityType]);
      }

      console.log('request ' + entityType + ' : ');
      console.log(response);

      return response;
    }

    function handleGet(method, url, data, headers, params) {
      var regexp = new RegExp('\\/api\\/([a-zA-Z0-9_-]+)\\/([0-9]+)');
      var entityType = url.match(regexp)[1];
      var id = url.match(regexp)[2];
      var entity;
      var response;

      if (!store.hasOwnProperty(entityType)) {
        return [404, new Error('unknown API')];
      }

      entity = store[entityType].find(function(_entity) {
        return _entity._id === parseInt(id);
      });

      if (!entity) {
        console.error('request ' + entityType + '/' + id + ' :  not found');
        return [404, 'entity ' + entityType + ' ' + id + 'does not exist'];
      }

      response = [200, entity];

      if (entityType === 'sessions') {
        entity.participants = (filter('orderBy')(entity.participants, 'name'));
      }

      console.log('request ' + entityType + '/' + id + ' : ');
      console.log(entity);

      return response;
    }

    function handlePut(method, url, data, headers, params) {}

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
        BUY_SEANCE: {
          category: 'BUY',
          title: 'Seances bought'
        }
      };

      var event = angular.copy(EVENTS[type]);
      event.date = date || new Date();
      event._id = Date.now();
      event.entities = eventEntities.map(function (entity) { return entity._id;});
      event.type = type;

      store.events.push(event);
    }

    function createSession(date, participants, nbrsubscribers) {
      var session = {
        _id: generateId(),
        date: date,
        participants: participants,
        nbrSubscribers: nbrsubscribers
      };

      var participantsID = participants.map(function (participant) {
        return participant._id;
      });

      //update seance members
      session.participants = [];

      store.members.forEach(function(member) {
        if (participantsID.indexOf(member._id) !== -1) {
          member.seanceLeft--;
          session.participants.push(member);
        }
      });

      logEvent('CREATE_SESSION',session.participants, session.date);

      return session;
    }

    function createMember(newMember) {
      newMember._id = generateId();
      newMember.name = newMember.firstName + ' ' + newMember.lastName;
      newMember.seanceLeft = 0;

      logEvent('CREATE_MEMBER', [newMember]);
      return newMember;
    }

    function buySeance(participant, nbrSeance, date) {
      var entity = store.members.find(function(entity) {
        return participant._id === entity._id;
      });

      // TODO handle not found

      entity.seanceLeft += nbrSeance;

      logEvent('BUY_SEANCE', [entity], date);
    }

    function storeMocks() {
      // 6 members
      var members = [
        {
          firstName: 'Tyrion',
          lastName: 'Lannister',
          picture:'./assets/members/1.png',
          seanceLeft: 0,
          address: '13 avenue de broqueville 1200 Bruxelles',
          email: 'tlannister@got.com',
          phone: '+32 0474 55 63 30'
        },
        {
          firstName: 'John',
          lastName: 'Snow',
          picture:'./assets/members/2.png',
          seanceLeft: 0,
          address: '13 avenue de broqueville 1200 Bruxelles',
          email: 'jsnow@got.com',
          phone: '+32 0474 55 63 30'
        },
        {
          firstName: 'Sansa',
          lastName: 'Stark',
          picture:'./assets/members/3.png',
          seanceLeft: 0,
          address: '13 avenue de broqueville 1200 Bruxelles',
          email: 'sStrak@got.com',
          phone: '+32 0474 55 63 30'
        },
        {
          firstName: 'Joffrey',
          lastName: 'Baratheon',
          picture:'./assets/members/4.png',
          seanceLeft: 0,
          address: '13 avenue de broqueville 1200 Bruxelles',
          email: 'jbaratheon@got.com',
          phone: '+32 0474 55 63 30'
        },
        {
          firstName: 'Margaery',
          lastName: 'Tyrell',
          picture:'./assets/members/5.png',
          seanceLeft: 0,
          address: '13 avenue de broqueville 1200 Bruxelles',
          email: 'mtyrell@got.com',
          phone: '+32 0474 55 63 30'
        },
        {
          firstName: 'Khal',
          lastName: 'Drogo',
          picture:'./assets/members/6.png',
          seanceLeft: 0,
          address: '13 avenue de broqueville 1200 Bruxelles',
          email: 'kdrogo@got.com',
          phone: '+32 0474 55 63 30'
        }
      ];
      // 4 sessions
      var sessions = [
        {
          date: new Date('2015/06/23'),
          participants: [],
          nbrSubscribers: 6
        },
        {
          date: new Date('2015/06/30'),
          participants: [],
          nbrSubscribers: 6
        },
        {
          date: new Date('2015/09/01'),
          participants: [],
          nbrSubscribers: 6
        },
        {
          date: new Date('2015/09/07'),
          participants: [],
          nbrSubscribers: 6
        }
      ];

      var member, session;

      // Create members & add seances
      members.forEach(function(_member) {
        member = createMember(_member);
        store.members.push(member);
        buySeance(member, 5, member.date);
      });

      // Populate session with members
      sessions[0].participants.push(store.members[0]);
      sessions[0].participants.push(store.members[1]);
      sessions[0].participants.push(store.members[2]);
      sessions[0].participants.push(store.members[3]);

      sessions[1].participants.push(store.members[0]);
      sessions[1].participants.push(store.members[2]);
      sessions[1].participants.push(store.members[3]);
      sessions[1].participants.push(store.members[4]);
      sessions[1].participants.push(store.members[5]);

      sessions[2].participants.push(store.members[0]);
      sessions[2].participants.push(store.members[1]);
      sessions[2].participants.push(store.members[2]);
      sessions[2].participants.push(store.members[3]);
      sessions[2].participants.push(store.members[5]);
      sessions[2].participants.push(store.members[4]);

      sessions[3].participants.push(store.members[3]);
      sessions[3].participants.push(store.members[4]);
      sessions[3].participants.push(store.members[5]);

      // Create sessions
      sessions.forEach(function(session) {
        session = createSession(session.date, session.participants, 6);
        store.sessions.push(session);
      });
    }

    function generateId() {
      return Date.now() + Math.floor(Math.random() * (9999));
    }
  }
})();
