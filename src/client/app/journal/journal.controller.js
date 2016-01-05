(function () {
  'use strict';

  angular
    .module('app.journal')
    .controller('JournalController', JournalController);

  JournalController.$inject = ['eventsFactory'];
  /* @ngInject */
  function JournalController(Events) {
    var vm = this;
    vm.events = [];

    activate();

    function activate() {
      loadEvents();
    }

    function loadEvents() {
      return Events.query(handleQuerySuccess, handleQueryFail).$promise;

      function handleQuerySuccess(response) {
        vm.events = response;
      }

      function handleQueryFail(reason) {
        console.log('unable to load events : ' + reason);

      }
    }
  }
})();
