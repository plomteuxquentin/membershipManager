(function() {
  'use strict';

  angular
    .module('app.settings', ['app.core', 'app.widgets'])
    .run(appRun);

  appRun.$inject = ['routerHelper'];

  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'settings',
        config: {
          url: '/settings',
          templateUrl: 'app/settings/settings.html',
          controller: 'SettingsController',
          controllerAs: 'vm',
          title: 'Settings',
          settings: {
            nav: 50,
            icon: 'settings',
            target: 'settings'
          }
        }
      }
    ];
  }
})();