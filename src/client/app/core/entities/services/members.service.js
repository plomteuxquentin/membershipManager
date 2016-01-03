(function () {
  'use strict';

  angular
    .module('app.core.entities')
    .factory('membersFactory', membersFactory);

  membersFactory.$inject = ['$resource'];
  /* @ngInject */
  function membersFactory(resourceService) {
    var URL = '/api/members/:id';
    var ID = '@_id';

    var service = resourceService(URL, {
      id: ID
    }, {
      update: {method: 'PUT'}
    });

    return service;
  }
})();
