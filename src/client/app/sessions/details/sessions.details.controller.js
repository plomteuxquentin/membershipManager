(function () {
  'use strict';

  angular
    .module('app.sessions.details')
    .controller('SessionsDetailsController', SessionsDetailsController);

  SessionsDetailsController.$inject = [];
  /* @ngInject */
  function SessionsDetailsController() {
    var self = this;

    activate();

    function activate() {
    }
  }
})();
