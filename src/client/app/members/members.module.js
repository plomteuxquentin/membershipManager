(function() {
  'use strict';

  angular
    .module('app.members', ['app.core', 'app.widgets'])
    .run(appRun);

  appRun.$inject = ['routerHelper'];

  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'members',
        config: {
          url: '/members',
          template: '<ui-view ></ui-view>',
          title: 'members',
          settings: {
            nav: 10,
            icon: 'members',
            target: 'members.list'
          }
        }
      }
    ];
  }
})();
