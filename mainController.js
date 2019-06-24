'use strict';

var cs142App = angular.module('cs142App',['ngRoute', 'ngMaterial', 'ngResource']);

cs142App.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/users', {
                templateUrl: 'components/user-list/user-listTemplate.html',
                controller: 'UserListController'
            }).
            when('/users/:userId', {
                templateUrl: 'components/user-detail/user-detailTemplate.html',
                controller: 'UserDetailController'
            }).
            when('/photos/:userId', {
                templateUrl: 'components/user-photos/user-photosTemplate.html',
                controller: 'UserPhotosController'
            }).
            when('/comments/:userId', {
                templateUrl: 'components/user-comments/user-commentsTemplate.html',
                controller: 'UserCommentsController'
            }).
            otherwise({
                redirectTo: '/users'
            });
    }]);

cs142App.controller('MainController', ['$scope', '$resource',
    function ($scope, $resource) {
        $scope.main = {};
        $scope.main.title = 'Users';
        $scope.main.appName = 'ZB';
        $scope.main.name = 'here';
        $scope.main.myName = 'Zolboo Chuluunbaatar';
        $scope.main.search = '';
        $scope.main.text = 'hello';
        $scope.users = 'Users';
        $scope.main.nameShown = '';
        $scope.checkbox='';

        var User = $resource('/test/:param', {param: '@id'});
        User.get({param: 'info'}).$promise.then(function(param) {
        $scope.main.verInfo = param.version;
        });
        User.get({param: 'counts'}).$promise.then(function(param) {
                console.log(param.user);
                console.log(param.photo);
                console.log(param.schemaInfo);
       });


//        $scope.FetchModel = function(url, doneCallback) {
//            var xhr = new XMLHttpRequest();
//            xhr.onreadystatechange = function() {
//                if (xhr.readyState === 4 && xhr.status === 200) {
//                        var data = JSON.parse(xhr.responseText);
//                        if (doneCallback) {
//                            doneCallback(data);
//                        }
//                }
//            };
//            xhr.open('GET', url);
//            xhr.send();
//        };
//        $scope.FetchModel('/test/info', function(data) {
//            $scope.$apply(function() {
//                $scope.main.verNum = data.__v;
//                $scope.main.verInfo = 'Version ' + $scope.main.verNum;
//
//            });
//        });
//        $scope.users = 'Users';
    }]);


