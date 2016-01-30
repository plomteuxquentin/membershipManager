(function() {
  'use strict';

  angular
    .module('app.seances', ['app.core', 'app.widgets'])
    .run(appRun);

  appRun.$inject = ['routerHelper'];

  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'seances',
        config: {
          url: '/seances/:id',
          templateUrl: 'app/seances/seances.html',
          controller: 'SeancesController',
          controllerAs: 'vm',
          title: 'seances'
        }
      }
    ];
  }
})();
