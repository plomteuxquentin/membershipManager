(function () {
  'use strict';

  angular
    .module('app.members.list')
    .controller('MembersListController', MembersListController);

  MembersListController.$inject = ['membersFactory'];
  /* @ngInject */
  function MembersListController(Members) {
    var vm = this;
    vm.members = [];
    vm.search = '';
    vm.displayActions = true;
    vm.removeOnBackspace = removeOnBackspace;

    activate();

    function activate() {
      loadMembers();
    }

    function loadMembers() {
      return Members.query(onQuerySuccess, onQueryFail);

      function onQuerySuccess(response) {
        vm.members = response;
      }

      function onQueryFail(reason) {
        console.error('Unable to load members : ' + reason);
      }
    }

    function removeOnBackspace (event) {
      if (event.keyCode === 8 && vm.search.length === 0) {
        vm.displayActions = true;
        event.preventDefault();
      }
    }
  }
})();
