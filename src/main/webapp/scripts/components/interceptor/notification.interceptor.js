 'use strict';

angular.module('robiminderApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-robiminderApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-robiminderApp-params')});
                }
                return response;
            },
        };
    });