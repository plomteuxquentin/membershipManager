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
          templateUrl: 'app/members/members.html',
          controller: 'MembersController',
          controllerAs: 'vm',
          title: 'members',
          settings: {
            nav: 1,
            icon: 'members'
          }
        }
      }
    ];
  }
})();
