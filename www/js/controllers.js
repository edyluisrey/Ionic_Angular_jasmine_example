angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope, $ionicModal, Playlists) {
  $scope.title = "Playlists";

  $scope.playlistData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/createPlaylist.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

    // Open the login modal
  $scope.closeCreationForm = function() {
    $scope.modal.hide();
  };

  $scope.openCreationForm = function() {

    $scope.modal.show();
  };

  $scope.doSave = function(){
    Playlists.save($scope.playlistData)
    $scope.modal.hide();
  };

  $scope.remove = function(playlist) {
    Playlists.remove(playlist);
  }

  $scope.playlists = Playlists.all()
})

.controller('Browse', function($scope, $ionicPopup, $ionicActionSheet, $timeout) {

 // Triggered on a button click, or some other target
 $scope.showOptions = function() {

   // Show the action sheet
   var isIOS = ionic.Platform.isIOS();

   if (isIOS){
     var hideSheet = $ionicActionSheet.show({
       destructiveText: 'Eat',
       titleText: 'Are you sure you want to eat this ice cream?',
       cancelText: 'Cancel',
       cancel: function() {
            // add cancel code..
          },
       buttonClicked: function(index) {
         return true;
       }
     });

     $timeout(function() {
       hideSheet();
     }, 2000)
   }else{
    var confirmPopup = $ionicPopup.confirm({
        title: 'Consume Ice Cream',
        template: 'Are you sure you want to eat this ice cream?',
        buttons: [
          { text: 'Eat',  type: 'button-positive' },
          { text: 'Cancel' }
        ]
     });
     confirmPopup.then(function(res) {
       if(res) {
         console.log('You are sure');
       } else {
         console.log('You are not sure');
       }
     });
   } 
 };

})

.controller('PlaylistCtrl', function($scope, $stateParams, Playlists) {
  $scope.playlist = Playlists.get($stateParams.playlistId);
});
