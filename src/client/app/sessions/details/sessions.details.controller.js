(function () {
  'use strict';

  angular
    .module('app.sessions.details')
    .controller('SessionsDetailsController', SessionsDetailsController);

  SessionsDetailsController.$inject = ['sessionsFactory', '$stateParams'];
  /* @ngInject */
  function SessionsDetailsController(Sessions, parameters) {
    var vm = this;

    activate(parameters.id);

    function activate(id) {
      loadSessions(id);
    }

    function loadSessions(id) {
      return Sessions.get({id:id}, onQuerySuccess, onQueryFail).$promise;

      function onQuerySuccess(response) {
        vm.session = response;
        console.log(response);
      }

      function onQueryFail(reason) {
        console.error('Unable to load session : ' + reason);
      }
    }
  }
})();
