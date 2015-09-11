var myApp;
(function (myApp) {
    angular.module(myApp.homeModuleId, [
        'ui.router'
    ]).config(Config);
    function Config($stateProvider) {
        $stateProvider.state(myApp.homeStateName, {
            url: 'home',
            controller: HomeController,
            controllerAs: 'vm',
            templateUrl: 'app/home/home.html',
            data: { pageTitle: 'Home' }
        });
    }
    Config.$inject = ['$stateProvider'];
    var HomeController = (function () {
        function HomeController(dataService, greetingProvider) {
            this.dataService = dataService;
            this.message = greetingProvider.getGreeting();
            this.activate();
        }
        HomeController.prototype.activate = function () {
            var _this = this;
            this.dataService.getData().then(function (data) {
                _this.data = data;
            });
        };
        HomeController.$inject = [myApp.dataServiceId, myApp.greetingProviderId];
        return HomeController;
    })();
    myApp.HomeController = HomeController;
    angular.module(myApp.homeModuleId).controller(myApp.homeControllerId, HomeController);
})(myApp || (myApp = {}));
