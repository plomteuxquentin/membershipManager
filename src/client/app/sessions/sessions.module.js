(function() {
  'use strict';

  angular
    .module('app.sessions', ['app.core', 'app.widgets'])
    .run(appRun);

  appRun.$inject = ['routerHelper'];

  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'sessions',
        config: {
          url: '/sessions',
          templateUrl: 'app/sessions/sessions.html',
          controller: 'SessionsController',
          controllerAs: 'vm',
          title: 'sessions',
          settings: {
            nav: 2,
            icon: 'sessions'
          }
        }
      }
    ];
  }
})();
