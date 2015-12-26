(function () {
  'use strict';

  angular
    .module('app.members')
    .controller('MembersController', MembersController);

  MembersController.$inject = [];
  /* @ngInject */
  function MembersController() {
    var self = this;
    self.members = [];

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
  }
})();
