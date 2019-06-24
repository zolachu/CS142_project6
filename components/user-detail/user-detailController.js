'use strict';

cs142App.controller('UserDetailController', ['$scope','$routeParams','$resource',
  function ($scope, $routeParams, $resource) {
    /*
     * Since the route is specified as '/users/:userId' in $routeProvider config the
     * $routeParams  should have the userId property set with the path from the URL.
     */
    var userId = $routeParams.userId;
    var User = $resource('/user/:userId', {userId: '@id'});
        User.get({userId: userId}).$promise.then(function(user) {
            $scope.detail = user;
            $scope.main.nameShown = user.first_name + ' ' + user.last_name;
        });
}]);





