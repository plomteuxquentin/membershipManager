(function() {
  'use strict';

  angular
    .module('app.core')
    .directive('timeLine', timeLine);

  function timeLine() {
    return {
      restrict: 'E',
      templateUrl: 'app/core/directives/timeline.directive.html',
      scope: {
        events: '=',
        filter: '='
      },
      controller: Controller,
      controllerAs: 'timelineCtrl',
      bindToController: true
    };
  }

  Controller.$inject = ['$scope'];

  function Controller(scope) {
    var ICONS_MAP = {
      CREATE_MEMBER: 'addMember',
      CREATE_SESSION: 'addSession',
      UPDATE_SESSION: 'updated',
      UPDATE_MEMBER: 'updated',
      BUY_SEANCE: 'addSeance'
    };

    if (this.filter) {
      scope.$watch('timelineCtrl.events', function (newValue, oldValue) {
        if (newValue && newValue.length) {
          newValue.forEach(function(event) {
            event.icon = ICONS_MAP[event.type];
          });
        }
      });
    }
  }
})();
