var myApp;
(function (myApp) {
    var DataService = (function () {
        function DataService($http) {
            this.$http = $http;
        }
        DataService.prototype.getData = function () {
            return this.$http.get("/api/Data").then(function (resp) {
                return resp.data;
            });
        };
        DataService.$inject = ['$http'];
        return DataService;
    })();
    myApp.DataService = DataService;
    angular.module(myApp.dataModuleId, []).service(myApp.dataServiceId, DataService);
})(myApp || (myApp = {}));
