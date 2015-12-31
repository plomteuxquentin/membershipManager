(function () {
  'use strict';

  angular
    .module('app.members.details')
    .controller('MembersDetailsController', MembersDetailsController);

  MembersDetailsController.$inject = [];
  /* @ngInject */
  function MembersDetailsController() {
    var vm = this;
    vm.member = {
      name: 'Quentin Plomteux',
      picture: './assets/members/quentin2.png',
      address: '13 avenue de broqueville 1200 Bruxelles',
      email: 'plomteuxquentin@gmail.com',
      phone: '+32 0474 55 63 30',
      seanceLeft: 5,
      events: {}
    };

    activate();

    function activate() {
      vm.member.events.all = [
        {
          id: 1,
          date: new Date('09/19/2014'),
          icon: 'addMember',
          title: 'Subscribe to close-combat',
          type: 'admin'
        },
        {
          id: 2,
          date: new Date('09/26/2014'),
          icon: 'addSeance',
          title: 'bought 10 seances',
          type: 'buy'
        },
        {
          id: 3,
          date: new Date('09/27/2014'),
          icon: 'addSession',
          title: 'Session of close-combat',
          type: 'session'
        },
        {
          id: 3,
          date: new Date('09/27/2014'),
          icon: 'addSession',
          title: 'Session of close-combat',
          type: 'session'
        },
        {
          id: 3,
          date: new Date('09/27/2014'),
          icon: 'addSession',
          title: 'Session of close-combat',
          type: 'session'
        },
        {
          id: 3,
          date: new Date('09/27/2014'),
          icon: 'addSession',
          title: 'Session of close-combat',
          type: 'session'
        },
        {
          id: 3,
          date: new Date('09/27/2014'),
          icon: 'addSession',
          title: 'Session of close-combat',
          type: 'session'
        }
      ];

      vm.member.events.session = [
        {
          id: 3,
          date: new Date('09/27/2014'),
          icon: 'addSession',
          title: 'Session of close-combat',
          type: 'session'
        },
        {
          id: 3,
          date: new Date('09/27/2014'),
          icon: 'addSession',
          title: 'Session of close-combat',
          type: 'session'
        },
        {
          id: 3,
          date: new Date('09/27/2014'),
          icon: 'addSession',
          title: 'Session of close-combat',
          type: 'session'
        },
        {
          id: 3,
          date: new Date('09/27/2014'),
          icon: 'addSession',
          title: 'Session of close-combat',
          type: 'session'
        },
        {
          id: 3,
          date: new Date('09/27/2014'),
          icon: 'addSession',
          title: 'Session of close-combat',
          type: 'session'
        }
      ];

      vm.member.events.buy = [
        {
          id: 2,
          date: new Date('09/26/2014'),
          icon: 'addSeance',
          title: 'bought 10 seances',
          type: 'buy'
        }
      ];
    }
  }
})();
