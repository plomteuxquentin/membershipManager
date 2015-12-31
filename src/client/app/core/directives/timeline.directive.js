(function() {
  'use strict';

  angular
    .module('app.core')
    .directive('timeLine', timeLine);

  // this is the directive you add to any element you want to highlight after creation;

  /* @ngInject */
  function timeLine() {
    return {
      restrict: 'E',
      templateUrl: 'app/core/directives/timeline.directive.html',
      scope: {
        events:'='
      },
      controller: Controller,
      controllerAs:'timelineCtrl',
      bindToController: true
    };
  }

  function Controller() {
  }
})();

// TODO tab to filter event type
