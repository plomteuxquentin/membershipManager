(function () {
  'use strict';

  angular
    .module('app.members.edit')
    .controller('MembersEditController', MembersEditController);

  MembersEditController.$inject = ['$scope','$timeout', 'Upload', '$mdDialog', '$mdMedia'];
  /* @ngInject */
  function MembersEditController($scope, $timeout, uploadService, dialogService, mediaService) {

    var self = this;
    var handleFileSelect;

    self.croppedPicture = null;
    self.originalPicture = null;
    self.picFile = null;

    self.dialogPicture = dialogPicture;

    activate();

    function activate () {

      // Call dialogPicture if a picture is selected
      $scope.$watch(function() {return self.picFile;}, function(newValue, oldValue) {
        if (newValue) {
          dialogPicture(newValue);
        }
      });
    }

    $scope.upload = function (dataUrl) {
      uploadService.upload({
        url: 'https://angular-file-upload-cors-srv.appspot.com/upload',
        data: {
          file: uploadService.dataUrltoBlob(dataUrl)
        }
      }).then(function (response) {
        $timeout(function () {
          $scope.result = response.data;
        });
      }, function (response) {
        if (response.status > 0) {
          $scope.errorMsg = response.status + ': ' + response.data;
        }
      }, function (evt) {
        $scope.progress = parseInt(100.0 * evt.loaded / evt.total);
      });
    };

    $scope.myImage = '';
    $scope.myCroppedImage = null;

    handleFileSelect = function(evt) {
      var file = evt.currentTarget.files[0];
      var reader = new FileReader();
      reader.onload = function (evt) {
        $scope.$apply(function($scope) {
          $scope.myImage = evt.target.result;
        });
      };
      reader.readAsDataURL(file);
    };
    angular.element(document.querySelector('#fileInput')).on('change',handleFileSelect);

    function dialogPicture (picture) {
      var useFullScreen;

      if (!picture && !self.originalPicture) {
        return;
      }

      picture = (picture) ? picture : self.originalPicture;

      useFullScreen = (mediaService('sm') || mediaService('xs')) && $scope.customFullscreen;

      dialogService.show({
        controller: 'MembersPictureDialogController',
        controllerAs: 'pictureDialogCtrl',
        templateUrl: 'app/members/edit/pictureDialog/pictureDialog.html',
        parent: angular.element(document.body),
        openFrom: 'pictureButton',
        closeFrom: 'pictureButton',
        clickOutsideToClose:true,
        fullscreen: useFullScreen,
        locals: {
          picture: picture
        }
      })
        .then(dialogAccept,dialogRefuse);

      function dialogAccept (answer) {
        self.croppedPicture = answer.croppedPicture;
        self.originalPicture = answer.originalPicture;
      }

      function dialogRefuse () {}

      $scope.$watch(function() {
        return mediaService('xs') || mediaService('sm');
      }, function(wantsFullScreen) {
        $scope.customFullscreen = (wantsFullScreen === true);
      });
    }

    // upload on file select or drop
    function photoUpload (file) {
      var load;
      var width = 40;
      var height = 40;

      if (self.form.photo.$valid && self.form.photo) {
        load = {
          url: 'members/create/image',
          data: {file: uploadService.rename(file, Date.now())}
        };

        uploadService(load).then(
          handleUploadSuccess,
          handleUploadFailure,
          handleUploadProgres
        );
      }

      function handleUploadSuccess (response) {
        console.log('Success ' + response.config.data.file.name + 'uploaded. Response: ' +
          response.data);
      }

      function handleUploadFailure (response) {
        console.log('Error status: ' + response.status);
      }

      function handleUploadProgres (event) {
        var progressPercentage = parseInt(100.0 * event.loaded / event.total);
        console.log('progress: ' + progressPercentage + '% ' + event.config.data.file.name);
      }
    }
  }
})();
