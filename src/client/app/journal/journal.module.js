(function() {
  'use strict';

  angular
    .module('app.journal', ['app.core', 'app.widgets'])
    .run(appRun);

  appRun.$inject = ['routerHelper'];

  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'journal',
        url: '/journal',
        config: {
          templateUrl: 'app/journal/journal.html',
          controller: 'JournalController',
          controllerAs: 'vm',
          title: 'journal',
          settings: {
            nav: 3,
            icon: 'journal',
            target: 'journal'
          }
        }
      }
    ];
  }
})();
