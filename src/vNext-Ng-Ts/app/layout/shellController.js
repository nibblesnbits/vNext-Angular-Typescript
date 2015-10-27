var myApp;
(function (myApp) {
    angular.module(myApp.shellModuleId, [
        'ui.router'
    ])
        .config(ShellStateConfiguration);
    function ShellStateConfiguration($stateProvider) {
        $stateProvider
            .state("app", {
            abstract: true,
            url: '/',
            templateUrl: 'app/layout/shell.html',
            controller: ShellController,
            controllerAs: 'shell'
        });
    }
    ShellStateConfiguration.$inject = ['$stateProvider'];
    var ShellController = (function () {
        function ShellController() {
        }
        return ShellController;
    })();
})(myApp || (myApp = {}));
