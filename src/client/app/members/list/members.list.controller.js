(function () {
  'use strict';

  angular
    .module('app.members.list')
    .controller('MembersListController', MembersListController);

  MembersListController.$inject = ['membersFactory', '$filter'];
  /* @ngInject */
  function MembersListController(Members, filter) {
    var vm = this;
    vm.members = [];
    vm.search = '';
    vm.displayActions = true;
    vm.displaySelection =  displaySelection;
    vm.removeOnBackspace = removeOnBackspace;
    vm.getMails = getMails;
    vm.getSMS = getSMS;

    activate();

    function activate() {
      loadMembers();
    }

    function loadMembers() {
      return Members.query(onQuerySuccess, onQueryFail);

      function onQuerySuccess(response) {
        vm.members = filter('orderBy')(response, 'name');
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

    function displaySelection() {
      return vm.members.some(function(member) {
        return member.selected;
      });
    }

    function getMails() {
      var mails = [];
      vm.members.forEach(function(member) {
        if (member.selected) {
          mails.push(member.email);
        }
      });
      return mails.join();
    }

    function getSMS() {
      var sms = [];
      vm.members.forEach(function(member) {
        if (member.selected) {
          sms.push(member.phone);
        }
      });
      return sms.join();
    }
  }
})();
