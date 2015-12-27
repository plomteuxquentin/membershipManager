(function () {
  'use strict';

  angular
    .module('app.members.list')
    .controller('MembersListController', MembersListController);

  MembersListController.$inject = [];
  /* @ngInject */
  function MembersListController() {
    var self = this;
    self.members = [];
    self.search = "";
    self.displayActions = true;
    self.removeOnBackspace = removeOnBackspace;

    activate();

    function activate() {
      self.members = [
        {
          id: 1,
          name: 'Quentin Plomteux',
          icon: './assets/members/quentin.jpeg',
          group: 'Close-combat'
        },
        {
          id: 2,
          name: 'Mathilde Simar',
          icon: './assets/members/mathilde.png',
          group: 'Close-combat'
        },
        {
          id: 3,
          name: 'Quentin Plomteux',
          icon: './assets/members/quentin.jpeg',
          group: 'Close-combat'
        }
      ];
    }

    function removeOnBackspace (event) {
      if (event.keyCode === 8 && self.search.length === 0) {
        self.displayActions = true;
        event.preventDefault();
      }
    }
  }
})();
