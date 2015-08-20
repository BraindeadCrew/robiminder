'use strict';

angular.module('robiminderApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
