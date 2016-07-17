(function () {
  'use strict';

  angular
      .module('app.core')
      .config(configRouter)
      .run(appRun);

  configRouter.$inject = ['$urlRouterProvider'];

  /* @ngInject */
  function configRouter(urlRouterProvider) {
    // when there is an empty route, redirect to /index
    urlRouterProvider.when('/', '/home');
  }

  /* @ngInject */
  function appRun(routerHelper) {
    var state = [
      {
        state: '404',
        config: {
          url: '/404',
          templateUrl: 'app/core/404.html',
          title: '404'
        }
      }
    ];
    var otherwise = '/404';

    routerHelper.configureStates(state, '/404');
  }

})();
