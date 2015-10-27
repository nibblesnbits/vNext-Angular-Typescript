/*
    This file is intended to simply define the module used by other
    services/directives/etc. in the application.

*/
var myApp;
(function (myApp) {
    angular.module(myApp.commonModuleId, []);
})(myApp || (myApp = {}));
