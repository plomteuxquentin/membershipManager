(function () {
  'use strict';

  angular
    .module('app.sessions.list')
    .controller('SessionsListController', SessionsListController);

  SessionsListController.$inject = [];
  /* @ngInject */
  function SessionsListController() {
    var self = this;
    self.sessions = [];

    activate();

    function activate() {
      self.sessions = [
        {
          id: 1,
          date: new Date('2015/06/23'),
          participants: ['Atchoum', 'Prof', 'Grincheux', 'Timide', 'Dormeur', 'Simplet'],
          nbrInscrits: 12
        },
        {
          id: 2,
          date: new Date('2015/06/30'),
          participants: ['Atchoum', 'Prof', 'Grincheux', 'Timide'],
          nbrInscrits: 12
        },
        {
          id: 3,
          date: new Date('2015/09/01'),
          participants: ['Atchoum', 'Prof', 'Grincheux'],
          nbrInscrits: 12
        },
        {
          id: 4,
          date: new Date('2015/09/07'),
          participants: ['Atchoum', 'Prof', 'Grincheux', 'Timide', 'Dormeur', 'Simplet', 'sept',
            'huit','neuf', 'dix', 'onze', 'douze'],
          nbrInscrits: 12
        }
      ];
    }
  }
})();
