(function () {
  'use strict';

  angular
    .module('app.journal')
    .controller('JournalController', JournalController);

  JournalController.$inject = [];
  /* @ngInject */
  function JournalController() {
    var vm = this;
    vm.events = {};

    activate();

    function activate() {
      vm.events.all = [
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

      vm.events.session = [
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

      vm.events.buy = [
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
