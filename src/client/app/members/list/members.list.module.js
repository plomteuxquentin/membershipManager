(function() {
  'use strict';

  angular
    .module('app.members.list', ['app.core', 'app.widgets'])
    .run(appRun);

  appRun.$inject = ['routerHelper'];

  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'members.list',
        config: {
          url: '/list',
          templateUrl: 'app/members/list/members.list.html',
          controller: 'MembersListController',
          controllerAs: 'vm',
          title: 'members list'
        }
      }
    ];
  }
})();
