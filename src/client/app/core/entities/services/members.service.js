(function () {
  'use strict';

  angular
    .module('app.core.service')
    .factory('memberFactory', memberFactory);

  memberFactory.$inject = ['$resource'];
  /* @ngInject */
  function memberFactory(resourceService) {
    var URL = '/api/member/:id';
    var ID = '@_id';

    var service = resourceService(URL, {
      id: ID
    }, {
      update: {method: 'PUT'}
    });

    return service;
  }
})();