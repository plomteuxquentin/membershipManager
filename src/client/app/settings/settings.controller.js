(function () {
  'use strict';

  angular
    .module('app.settings')
    .controller('SettingsController', SettingsController);

  SettingsController.$inject = [];
  /* @ngInject */
  function SettingsController() {
    var vm = this;

    activate();

    function activate() {}
  }
})();
