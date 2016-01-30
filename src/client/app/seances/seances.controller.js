(function () {
  'use strict';

  angular
    .module('app.seances')
    .controller('SeancesController', SeancesController);

  SeancesController.$inject = ['membersFactory', '$filter', '$stateParams','$scope'];
  /* @ngInject */
  function SeancesController(Members, filter, stateParams, scope) {
    var vm = this;
    vm.selection = '';
    vm.seances = {};
    vm.types = ['abonnement', 'ticket'];
    vm.members = [];
    vm.member = undefined;

    vm.save = save;
    vm.isSelected = isSelected;
    vm.select = select;

    activate();

    function activate() {
      var promise = loadMembers();
      if (stateParams.id) {
        promise.then(setSelected);
      }

      function setSelected() {
        var i;
        for (i = 0; i < vm.members.length; i++) {
          if (vm.members[i]._id.toString() === stateParams.id) {
            vm.member = vm.members[i];
            break;
          }
        }
      }
    }

    function loadMembers() {
      return Members.query(onQuerySuccess, onQueryFail).$promise;

      function onQuerySuccess(response) {
        vm.members = filter('orderBy')(response, 'name');
      }

      function onQueryFail(reason) {
        console.error('Unable to load members : ' + reason);
      }
    }

    function save() {}

    function isSelected(entry) {
      return vm.selection === entry;
    }

    function select(entry) {
      vm.selection = entry;
    }
  }
})();
