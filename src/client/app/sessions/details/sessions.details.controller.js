(function () {
  'use strict';

  angular
    .module('app.sessions.details')
    .controller('SessionsDetailsController', SessionsDetailsController);

  SessionsDetailsController.$inject = [];
  /* @ngInject */
  function SessionsDetailsController() {
    var vm = this;

    vm.session = {
      date: new Date(),
      members: [
        {
          id: 1,
          name: 'Tyrion Lannister',
          picture:'./assets/members/quentin2.png',
          seanceLeft: 10
        },
        {
          id: 2,
          name: 'Cersei Lannister',
          picture:'./assets/members/quentin2.png',
          seanceLeft: 5
        },
        {
          id: 3,
          name: 'Sansa Stark',
          picture:'./assets/members/quentin2.png',
          seanceLeft:1
        },
        {
          id: 4,
          name: 'Joffrey Baratheon',
          picture:'./assets/members/quentin2.png',
          seanceLeft:0
        },
        {
          id: 5,
          name: 'Margaery Tyrell',
          picture:'./assets/members/quentin2.png',
          seanceLeft:4
        },
        {
          id: 6,
          name: 'Khal Drogo',
          picture:'./assets/members/quentin2.png',
          seanceLeft:'demo'
        }
      ]
    };

    activate();

    function activate() {
    }
  }
})();
