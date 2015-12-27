(function() {
  'use strict';

  angular
    .module('app.sessions.details', ['app.core', 'app.widgets'])
    .run(appRun);

  appRun.$inject = ['routerHelper'];

  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'sessions.details',
        config: {
          url: '/details/:id',
          templateUrl: 'app/sessions/details/sessions.details.html',
          controller: 'SessionsDetailsController',
          controllerAs: 'vm',
          title: 'sessions details'
        }
      }
    ];
  }
})();
