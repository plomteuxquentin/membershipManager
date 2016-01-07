(function() {
  'use strict';

  angular
    .module('app.sessions.list', ['app.core', 'app.widgets'])
    .run(appRun);

  appRun.$inject = ['routerHelper'];

  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'sessions.list',
        url: '',
        config: {
          templateUrl: 'app/sessions/list/sessions.list.html',
          controller: 'SessionsListController',
          controllerAs: 'vm',
          title: 'sessions list'
        }
      }
    ];
  }
})();
