(function() {
  'use strict';

  angular
    .module('app.members.details', ['app.core', 'app.widgets'])
    .run(appRun);

  appRun.$inject = ['routerHelper'];

  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'members.details',
        config: {
          url: '/:id',
          templateUrl: 'app/members/details/members.details.html',
          controller: 'MembersDetailsController',
          controllerAs: 'vm',
          title: 'members details'
        }
      }
    ];
  }
})();
