(function () {
  'use strict';

  angular
    .module('app.members.details')
    .controller('MembersDetailsController', MembersDetailsController);

  MembersDetailsController.$inject = ['$stateParams', 'membersFactory','$filter'];
  /* @ngInject */
  function MembersDetailsController(params, Members) {
    var vm = this;
    vm.member = {};

    vm.filter = {
      session: {category: 'SESSION'},
      buy: {category: 'BUY'}
    };

    activate(params.id);

    function activate(id) {
      loadMembers(id).then(function() {
        vm.member.events = [
            {
              id: 1,
              date: new Date('09/19/2014'),
              icon: 'addMember',
              title: 'Subscribe to close-combat',
              category: 'ADMIN'
            },
            {
              id: 2,
              date: new Date('09/26/2014'),
              icon: 'addSeance',
              title: 'bought 10 seances',
              category: 'BUY'
            },
            {
              id: 3,
              date: new Date('09/27/2014'),
              icon: 'addSession',
              title: 'Session of close-combat',
              category: 'SESSION'
            },
            {
              id: 3,
              date: new Date('09/27/2014'),
              icon: 'addSession',
              title: 'Session of close-combat',
              category: 'SESSION'
            },
            {
              id: 3,
              date: new Date('09/27/2014'),
              icon: 'addSession',
              title: 'Session of close-combat',
              category: 'SESSION'
            },
            {
              id: 3,
              date: new Date('09/27/2014'),
              icon: 'addSession',
              title: 'Session of close-combat',
              category: 'SESSION'
            },
            {
              id: 3,
              date: new Date('09/27/2014'),
              icon: 'addSession',
              title: 'Session of close-combat',
              category: 'SESSION'
            }
        ];
      });
    }

    function loadMembers(id) {
      return Members.get({id:id}, onQuerySuccess, onQueryFail).$promise;

      function onQuerySuccess(response) {
        vm.member = response;
      }

      function onQueryFail(reason) {
        console.error('Unable to load member: ' + reason);
      }
    }

  }
})();
