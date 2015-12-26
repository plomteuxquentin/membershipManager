(function () {
  'use strict';

  angular
    .module('app.journal')
    .controller('JournalController', JournalController);

  JournalController.$inject = [];
  /* @ngInject */
  function JournalController() {
    var self = this;

    activate();

    function activate() {
    }
  }
})();
