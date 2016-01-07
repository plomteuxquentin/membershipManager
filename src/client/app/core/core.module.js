(function () {
  'use strict';

  angular
    .module('app.core', [
      'ngMaterial', 'ngAnimate', 'ngSanitize',
      'blocks.exception', 'blocks.logger', 'blocks.router',
      'ui.router',
      'ngplus',
      'ngFileUpload', 'ngImgCrop'
    ]);
})();
