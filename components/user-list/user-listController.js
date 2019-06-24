'use strict';

cs142App.controller('UserListController', ['$scope','$resource',
    function ($scope, $resource) {
        var users = $resource('/user/list');
        $scope.list = {};
        $scope.list.users = users.query();
}]);
