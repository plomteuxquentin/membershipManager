(function () {
  'use strict';

  angular
    .module('app.members.list')
    .controller('MembersListController', MembersListController);

  MembersListController.$inject = ['membersFactory', '$filter', '$state'];
  /* @ngInject */
  function MembersListController(Members, filter, stateService) {
    var vm = this;
    vm.members = [];
    vm.search = '';
    vm.displayActions = true;
    vm.displaySelection =  displaySelection;
    vm.removeOnBackspace = removeOnBackspace;
    vm.getMails = getMails;
    vm.getSMS = getSMS;
    vm.goToAddSeance =  goToAddSeance;

    activate();

    function activate() {
      loadMembers();
    }

    function loadMembers() {
      return Members.query(onQuerySuccess, onQueryFail);

      function onQuerySuccess(response) {
        vm.members = filter('orderBy')(response, 'name');
        vm.members.forEach(function(member) {
          member.display = {};
          if (member.monthlypass.lastPeriodEnd >= new Date()) {
            member.display.seanceLeft = member.monthlypass.lastPeriodEnd.getDate() + '-' +
              (member.monthlypass.lastPeriodEnd.getMonth() + 1) + '-' +
              member.monthlypass.lastPeriodEnd.getFullYear();
          } else {
            member.display.seanceLeft = member.seanceLeft;
          }
        });
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

    function goToAddSeance(member) {
      console.log('goToAddSeance');
      stateService.go('seances', {'id':member._id});
    }
  }
})();
