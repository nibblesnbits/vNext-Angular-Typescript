var myApp;
(function (myApp) {
    angular.module(myApp.shellModuleId, [
        'ui.router'
    ])
        .config(Config);
    function Config($stateProvider) {
        $stateProvider
            .state("app", {
            abstract: true,
            url: '/',
            templateUrl: 'app/layout/shell.html',
            controller: ShellController,
            controllerAs: 'shell'
        });
    }
    Config.$inject = ['$stateProvider'];
    var ShellController = (function () {
        function ShellController() {
        }
        ShellController.$inject = [];
        return ShellController;
    })();
})(myApp || (myApp = {}));
