(function () {
  'use strict';

  angular
    .module('app.sessions')
    .controller('SessionsController', SessionsController);

  SessionsController.$inject = [];
  /* @ngInject */
  function SessionsController() {
    var self = this;
    self.sessions = [];

    activate();

    function activate() {
      self.sessions = [
        {
          date: new Date(),
          participants: ['Atchoum', 'Prof', 'Grincheux', 'Timide', 'Dormeur', 'Simplet'],
          nbrInscrits: 12
        },
        {
          date: new Date(),
          participants: ['Atchoum', 'Prof', 'Grincheux', 'Timide'],
          nbrInscrits: 12
        }
      ];
    }
  }
})();
