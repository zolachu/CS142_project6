'use strict';

cs142App.controller('UserPhotosController', ['$scope', '$routeParams', '$resource',
  function($scope, $routeParams, $resource) {
    /*
     * Since the route is specified as '/photos/:userId' in $routeProvider config the
     * $routeParams  should have the userId property set with the path from the URL.
     */
    var userId = $routeParams.userId;
    $scope.photos = {};

    var User = $resource('/user/:userId', {userId: '@id'});
    User.get({userId: userId}).$promise.then(function(user) {
        $scope.main.nameShown = "Photos of " + user.first_name;
    });

    var Photos = $resource('/photosOfUser/:userId', {userId: '@id'});
    Photos.query({userId: userId}).$promise.then(function(user) {
        $scope.photos.photoList = user;
        $scope.photos.clicked = 0;
        $scope.photos.next = $scope.photos.photoList.length - 1;
        $scope.photos.photo = $scope.photos.photoList[0];
        $scope.photos.clickedNext = function() {
            if ($scope.photos.clicked < $scope.photos.next) {
                $scope.photos.clicked++;
            }
            $scope.photos.photo = $scope.photos.photoList[$scope.photos.clicked];
        };
        $scope.photos.clickedPrev = function() {
            if ($scope.photos.clicked > 0) {
                $scope.photos.clicked--;
            } else {
                $scope.photos.end = 'End of Photos';
            }
            $scope.photos.photo = $scope.photos.photoList[$scope.photos.clicked];
        };
    });
}]);
