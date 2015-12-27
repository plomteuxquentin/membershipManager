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
          template: '<ui-view></ui-view>',
          title: 'sessions',
          settings: {
            nav: 2,
            icon: 'sessions',
            target: 'sessions.list'
          }
        }
      }
    ];
  }
})();
