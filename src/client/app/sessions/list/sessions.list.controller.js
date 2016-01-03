(function () {
  'use strict';

  angular
    .module('app.sessions.list')
    .controller('SessionsListController', SessionsListController);

  SessionsListController.$inject = ['sessionsFactory'];
  /* @ngInject */
  function SessionsListController(Sessions) {
    var self = this;
    self.sessions = [];

    activate();

    function activate() {
      loadSessions();
    }

    function loadSessions() {
      return Sessions.query(onQuerySuccess, onQueryFail).$promise;

      function onQuerySuccess(response) {
        self.sessions = response;
      }

      function onQueryFail(reason) {
        console.error('Unable to load sessions: ' + reason);
      }
    }
  }
})();
