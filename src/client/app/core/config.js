(function () {
  'use strict';

  var core = angular.module('app.core');
  var config;

  config = {
    appErrorPrefix: '[membershipManager Error] ',
    appTitle: 'membershipManager'
  };

  core.config(iconSet);
  core.config(toastrConfig);
  core.config(configure);
  core.value('config', config);

  toastrConfig.$inject = ['toastr'];
  /* @ngInject */
  function toastrConfig(toastr) {
    toastr.options.timeOut = 4000;
    toastr.options.positionClass = 'toast-bottom-right';
  }

  configure.$inject = ['$logProvider', 'routerHelperProvider', 'exceptionHandlerProvider'];
  /* @ngInject */
  function configure(logProvider, routerHelperProvider, exceptionHandlerProvider) {
    if (logProvider.debugEnabled) {
      logProvider.debugEnabled(true);
    }
    exceptionHandlerProvider.configure(config.appErrorPrefix);
    routerHelperProvider.configure({docTitle: config.appTitle + ': '});
  }

  iconSet.$inject = ['$mdThemingProvider', '$mdIconProvider'];
  /* @ngInject */
  function iconSet(mdThemingProvider, mdIconProvider) {
    var ICON_SIZE = 24;
    var ICON_FOLDER = './assets/svg/';

    var COLOR_PRIMARY = 'blue-grey';
    var COLOR_ACCENT = 'pink';

    mdIconProvider
      .icon('menu',           ICON_FOLDER + 'menu.svg',            ICON_SIZE)
      .icon('share',          ICON_FOLDER + 'share.svg',           ICON_SIZE)
      .icon('members',        ICON_FOLDER + 'members.svg',         ICON_SIZE)
      .icon('sessions',       ICON_FOLDER + 'sessions.svg',        ICON_SIZE)
      .icon('sms',            ICON_FOLDER + 'sms.svg',             ICON_SIZE)
      .icon('phone',          ICON_FOLDER + 'call.svg',            ICON_SIZE)
      .icon('mail',           ICON_FOLDER + 'mail.svg',            ICON_SIZE)
      .icon('location',       ICON_FOLDER + 'location.svg',        ICON_SIZE)
      .icon('moreMenuHor',    ICON_FOLDER + 'moreMenuHor.svg',     ICON_SIZE)
      .icon('defaultMember',  ICON_FOLDER + 'defaultMember.svg',   ICON_SIZE)
      .icon('addMember',      ICON_FOLDER + 'addMember.svg',       ICON_SIZE)
      .icon('journal',        ICON_FOLDER + 'journal.svg',         ICON_SIZE)
      .icon('search',         ICON_FOLDER + 'search.svg',          ICON_SIZE)
      .icon('edit',           ICON_FOLDER + 'edit.svg',            ICON_SIZE)
      .icon('add',            ICON_FOLDER + 'add.svg',             ICON_SIZE)
      .icon('clear',          ICON_FOLDER + 'clear.svg',           ICON_SIZE)
      .icon('addSession',     ICON_FOLDER + 'addSession.svg',      ICON_SIZE)
      .icon('addSeance',      ICON_FOLDER + 'addSeance.svg',       ICON_SIZE)
      .icon('addPhoto',       ICON_FOLDER + 'addPhoto.svg',        ICON_SIZE)
      .icon('close',          ICON_FOLDER + 'close.svg',           ICON_SIZE)
      .icon('view',           ICON_FOLDER + 'view.svg',            ICON_SIZE)
      .icon('dashboard',      ICON_FOLDER + 'dashboard.svg',       ICON_SIZE)
      .icon('settings',       ICON_FOLDER + 'settings.svg',        ICON_SIZE)
      .icon('home',           ICON_FOLDER + 'home.svg',            ICON_SIZE);

    mdThemingProvider.theme('default')
      .primaryPalette(COLOR_PRIMARY)
      .accentPalette(COLOR_ACCENT);
  }

})();
