(function() {
  'use strict';

  angular
    .module('app.core')
    .directive('autoFocus', autoFocus);

  // this is the directive you add to any element you want to highlight after creation;

  /* @ngInject */
  function autoFocus() {
    return {
      restrict: 'A',
      link: {
        post: function postLink (scope, element, attr) {
          element[0].focus();
        }
      }
    };
  }
})();
