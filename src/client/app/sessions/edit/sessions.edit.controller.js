(function () {
  'use strict';

  angular
    .module('app.sessions.edit')
    .controller('SessionsEditController', SessionsEditController);

  SessionsEditController.$inject = ['membersFactory','$state'];
  /* @ngInject */
  function SessionsEditController(Members, stateService) {
    var vm = this;

    vm.members = [];
    vm.membersPresent = [];

    vm.toggleSelect = toggleSelect;
    vm.submit = submit;

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

    function toggleSelect(member) {
      if (member.selected) {
        vm.membersPresent.pop(member);
        member.selected = false;
      } else {
        vm.membersPresent.push(member);
        member.selected = true;
      }
    }

    function submit() {
      stateService.go('sessions.details',{id: 1});
    }
  }
})();
