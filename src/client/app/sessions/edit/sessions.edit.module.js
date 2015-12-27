(function() {
  'use strict';

  angular
    .module('app.sessions.edit', ['app.core', 'app.widgets'])
    .run(appRun);

  appRun.$inject = ['routerHelper'];

  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'sessions.edit',
        config: {
          url: ':id/edit',
          templateUrl: 'app/sessions/edit/sessions.edit.html',
          controller: 'SessionsEditController',
          controllerAs: 'vm',
          title: 'sessions edition'
        }
      }
    ];
  }
})();
