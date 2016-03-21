(function () {
  'use strict';

  angular
    .module('app.seances')
    .controller('SeancesController', SeancesController);

  SeancesController.$inject = [
    'membersFactory',
    'seancesFactory',
    '$filter',
    '$state',
    '$stateParams'
  ];
  /* @ngInject */
  function SeancesController(Members, Seances, filter, state, stateParams) {
    var vm = this;
    vm.selection = {};
    vm.seances = {};
    vm.members = [];
    vm.member = undefined;
    vm.options = [
      {
        value: 'full',
        label: 'Season pass'
      },
      {
        value: '1',
        label: '1 seance'
      },
      {
        value: '5',
        label: '5 seances'
      },
      {
        value: '10',
        label: '10 seances'
      }
    ];

    vm.save = save;

    activate();

    function activate() {
      var promise = loadMembers();
      if (stateParams.id) {
        promise.then(setSelected);
      }

      function setSelected() {
        var i;
        for (i = 0; i < vm.members.length; i++) {
          if (vm.members[i]._id.toString() === stateParams.id) {
            vm.member = vm.members[i];
            break;
          }
        }
      }
    }

    function loadMembers() {
      return Members.query(onQuerySuccess, onQueryFail).$promise;

      function onQuerySuccess(response) {
        vm.members = filter('orderBy')(response, 'name');
      }

      function onQueryFail(reason) {
        console.error('Unable to load members : ' + reason);
      }
    }

    function save() {
      if (['1','5','10'].indexOf(vm.selection) !== -1) {
        Seances.addTicket(
          {member: vm.member._id, number: vm.selection},
          onQuerySucess,
          onQueryFail
        );
      }
      else {
        Seances.addSeasonPass(
          {member:vm.member._id, type: vm.selection},
          onQuerySucess,
          onQueryFail
        );
      }

      function onQuerySucess(response) {
        console.log(response);
        state.go('members.list');
      }

      function onQueryFail(reason) {
        console.log(reason);
      }
    }
  }
})();
