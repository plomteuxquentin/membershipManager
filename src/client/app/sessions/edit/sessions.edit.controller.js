(function () {
  'use strict';

  angular
    .module('app.sessions.edit')
    .controller('SessionsEditController', SessionsEditController);

  SessionsEditController.$inject = ['$state'];
  /* @ngInject */
  function SessionsEditController(stateService) {
    var vm = this;

    vm.members = [
      {id: '1', name: 'A', picture: './assets/members/mathilde.png'},
      {id: '2', name: 'B', picture: './assets/members/mathilde.png'},
      {id: '3', name: 'C', picture: './assets/members/mathilde.png'},
      {id: '4', name: 'D', picture: './assets/members/mathilde.png'},
      {id: '5', name: 'E', picture: './assets/members/mathilde.png'},
      {id: '6', name: 'F', picture: './assets/members/mathilde.png'},
      {id: '7', name: 'G', picture: './assets/members/mathilde.png'},
      {id: '8', name: 'H', picture: './assets/members/mathilde.png'},
      {id: '9', name: 'I', picture: './assets/members/mathilde.png'},
      {id: '10', name: 'J', image: ''},
      {id: '11', name: 'K', image: ''},
      {id: '12', name: 'L', image: ''},
      {id: '13', name: 'M', image: ''},
      {id: '14', name: 'N', image: ''},
      {id: '15', name: 'O', image: ''},
      {id: '16', name: 'P', image: ''},
      {id: '17', name: 'Q', image: ''},
      {id: '18', name: 'R', image: ''},
      {id: '19', name: 'S', image: ''},
      {id: '20', name: 'T'}
    ];
    vm.membersPresent = [];

    vm.toggleSelect = toggleSelect;
    vm.submit = submit;
    activate();

    function activate() {
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
