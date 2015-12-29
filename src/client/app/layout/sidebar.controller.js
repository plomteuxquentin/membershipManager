(function() {
  'use strict';

  angular
    .module('app.layout')
    .controller('SidebarController', SidebarController);

  SidebarController.$inject = ['$state', 'routerHelper', '$mdSidenav'];
  /* @ngInject */
  function SidebarController(stateService, routerHelper, sideNavService) {
    var self = this;
    var states = routerHelper.getStates();

    self.isCurrent = isCurrent;
    self.toggleNav = toggleNav;
    activate();

    function activate() { getNavRoutes(); }

    function getNavRoutes() {
      self.navRoutes = states.filter(function(r) {
        return r.settings && r.settings.nav;
      }).sort(function(r1, r2) {
        return r1.settings.nav - r2.settings.nav;
      });
    }

    function isCurrent(route) {
      var menuName;
      if (!route.title || !stateService.current || !stateService.current.title) {
        return '';
      }

      menuName = route.title;
      return stateService.current.title.substr(0, menuName.length) === menuName ? 'selected' : '';
    }

    function toggleNav () {
      sideNavService('left').toggle();
    }
  }
})();
