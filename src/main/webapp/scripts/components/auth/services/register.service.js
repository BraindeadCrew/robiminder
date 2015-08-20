'use strict';

angular.module('robiminderApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


