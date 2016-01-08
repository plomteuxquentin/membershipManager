(function () {
  'use strict';

  angular
    .module('app.home')
    .controller('HomeController', HomeController);

  HomeController.$inject = [];
  /* @ngInject */
  function HomeController() {
    var vm = this;

    vm.cards = [
      {
        title: 'Members',
        location: 'members.list',
        description: 'Members are participants of your organisation. ' +
        'You have directly access to thier contact details and history',
        icon: 'members',
        actions: [
          {
            title: 'create',
            location: 'members.edit'
          }
        ]
      },
      {
        title: 'Sessions',
        location: 'sessions.list',
        description: 'Sessions are activity of your organisation. ' +
        'You can create new sessions and view session\'s participation history',
        icon: 'sessions',
        actions: [
          {
            title: 'create',
            location: 'sessions.edit'
          }
        ]
      },
      {
        title: 'Journal',
        location: 'journal',
        description: 'Jounral is the history of all events that occurred in your organisation',
        icon: 'journal'
      },
      {
        title: 'Settings',
        location: 'settings',
        description: 'Set the parametes for the app and your organisation',
        icon: 'settings'
      }
    ];

    activate();

    function activate() {}
  }
})();
