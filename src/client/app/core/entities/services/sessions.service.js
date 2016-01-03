(function () {
  'use strict';

  angular
    .module('app.core.entities')
    .factory('sessionsFactory', sessionsFactory);

  sessionsFactory.$inject = ['$resource'];
  /* @ngInject */
  function sessionsFactory(resourceService) {
    var URL = '/api/sessions/:id';
    var ID = '@_id';

    var service = resourceService(URL, {
      id: ID
    }, {
      update: {method: 'PUT'}
    });

    return service;
  }
})();
