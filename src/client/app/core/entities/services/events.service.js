(function () {
  'use strict';

  angular
    .module('app.core.entities')
    .factory('eventsFactory', eventsFactory);

  eventsFactory.$inject = ['$resource'];
  /* @ngInject */
  function eventsFactory(resourceService) {
    var URL = '/api/events/:id';
    var ID = '@_id';

    return resourceService(URL, {
      id: ID
    }, {
      update: {method: 'PUT'},
      queryMember: {
        method: 'GET',
        params: {member: '@member'},
        isArray: true
      }
    });
  }
})();
