(function () {
  'use strict';

  angular
    .module('app.sessions.edit')
    .controller('SessionsEditController', SessionsEditController);

  SessionsEditController.$inject = ['membersFactory','sessionsFactory','$state'];
  /* @ngInject */
  function SessionsEditController(Members, Sessions, stateService) {
    var vm = this;

    vm.session = {};
    vm.members = [];
    vm.session.participants = [];

    vm.toggleSelect = toggleSelect;
    vm.save = save;

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
        vm.session.participants.pop(member);
        member.selected = false;
      } else {
        vm.session.participants.push(member);
        member.selected = true;
      }
    }

    function save() {
      vm.session.participants.forEach(function(member) {
        delete member.selected;
      });

      vm.session.nbrSubscribers = vm.members.length;

      Sessions.save(vm.session).$promise.then(handleSaveSuccess, handleSaveFail);

      function handleSaveSuccess(response) {
        stateService.go('sessions.details',{id:response._id});
      }

      function handleSaveFail(reason) {
        console.debug('save failed : ' + reason);
      }
    }
  }
})();
