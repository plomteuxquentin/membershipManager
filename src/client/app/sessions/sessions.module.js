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
          template: '<div ui-view-container><ui-view class="well"></ui-view></div>',
          title: 'sessions',
          settings: {
            nav: 20,
            icon: 'sessions',
            target: 'sessions.list'
          }
        }
      }
    ];
  }
})();
