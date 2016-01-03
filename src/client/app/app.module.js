(function () {
  'use strict';

  angular.module('app', [
    'ngMaterial',
    'app.core',
    'app.core.entities',
    'app.widgets',
    'app.layout',
    'app.journal',
    'app.members',
    'app.members.details',
    'app.members.edit',
    'app.members.list',
    'app.sessions',
    'app.sessions.details',
    'app.sessions.edit',
    'app.sessions.list'
  ]);
})();
