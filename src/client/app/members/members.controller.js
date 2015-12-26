(function () {
  'use strict';

  angular
    .module('app.members')
    .controller('MembersController', MembersController);

  MembersController.$inject = [];
  /* @ngInject */
  function MembersController() {
    var self = this;

    activate();

    function activate() {
    }
  }
})();
