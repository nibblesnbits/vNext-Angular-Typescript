/*

    --- Basic Angular.js Services in TypeScript ---
    
    This file demonstrates how to implement simple Angular.js Services in
    TypeScript.
    
    The most straight forward way of creating a service is to define two
    elements: an interface defining the calls to expose, and a class that
    implements that interface.
    
    Registering the service with Angular is done by passing in the unique
    identifier of the service and the name of the service itself.

*/
var myApp;
(function (myApp) {
    var DataService = (function () {
        function DataService($http, appConfig, logger) {
            this.$http = $http;
            this.appConfig = appConfig;
            this.logger = logger;
            this.baseUrl = appConfig.DataApiUrl;
        }
        DataService.prototype.getData = function () {
            this.logger.log('making call to ' + this.baseUrl + "/data");
            return this.$http.get(this.baseUrl + "/data").then(function (resp) {
                return resp.data;
            });
        };
        DataService.$inject = ['$http', myApp.appConfigServiceId, myApp.loggerServiceId];
        return DataService;
    })();
    myApp.DataService = DataService;
    angular.module(myApp.dataModuleId, []).service(myApp.dataServiceId, DataService);
})(myApp || (myApp = {}));
