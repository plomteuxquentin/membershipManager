(function () {
  'use strict';

  angular
    .module('app.members.edit')
    .controller('MembersEditController', MembersEditController);

  MembersEditController.$inject = ['$scope', '$mdBottomSheet'];
  /* @ngInject */
  function MembersEditController() {
    var self = this;
    self.addImage = addImage;

    activate();

    function activate () {
    }

    function addImage () {
      console.debug('log');

      document.getElementById('capturePhoto').click();
    }
  }
})();
