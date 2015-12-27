(function () {
  'use strict';

  angular
    .module('app.journal')
    .controller('JournalController', JournalController);

  JournalController.$inject = [];
  /* @ngInject */
  function JournalController() {
    var self = this;
    self.events = [];

    activate();

    function activate() {
      self.events = [
        {
          id: 1,
          date: new Date('09/19/2014'),
          icon: 'addMember',
          title: 'Kamille Subscription'
        },
        {
          id: 2,
          date: new Date('09/26/2014'),
          icon: 'addSeance',
          title: 'Kamille bought 10 seances'
        },
        {
          id: 3,
          date: new Date('09/27/2014'),
          icon: 'addSession',
          title: 'Session of close-combat'
        },
        {
          id: 3,
          date: new Date('09/27/2014'),
          icon: 'addSession',
          title: 'Session of close-combat'
        },
        {
          id: 3,
          date: new Date('09/27/2014'),
          icon: 'addSession',
          title: 'Session of close-combat'
        },
        {
          id: 3,
          date: new Date('09/27/2014'),
          icon: 'addSession',
          title: 'Session of close-combat'
        },
        {
          id: 3,
          date: new Date('09/27/2014'),
          icon: 'addSession',
          title: 'Session of close-combat'
        }
      ];
    }
  }
})();
