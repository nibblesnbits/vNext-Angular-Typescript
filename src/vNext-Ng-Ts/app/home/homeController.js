/*
    --- Angular.js Controllers and ui-router in TypeScript ---
    
    This file demonstrates a consistent method of defining Angular.js
    Controllers and ui-router States in TypeScript.
    
    Since controllers and states go hand-in-hand when using ui-router,
    we follow a simple pattern:
    -  Define a unique module that contains the state and controller
    -  Define the controller the state will use
    -  Pass the name of the controller into the $stateProvider.state()
       function
    
    Defining these two elements is as follows.
    
    Controllers:
    Angular Controllers in TypeScript are simply classes with thier
    dependencies defined in their constructors.
    Like other Angular/TypeScript patterns, we provide a public
    static `$inject` property that defines the array of actual identifiers
    for the dependencies.  This allows us to simply pass the name
    of the controller class into the Angular controller() function,
    and the dependency injection is taken care of cleanly.
    
    States:
    To simplify defining and registering ui-router states, we define
    a function named {myStateName}StateConfiguration, where we define
    the configuration, and inject $stateProvider into it.  This function
    calls the $stateProvider.state() function, passing in the configuration
    of the state.  With this function defined, we can simply pass the name
    of the function into our state-specfic module's config() function.
    This causes Angular to immediately call the function, which registers
    the state with ui-router.
*/
var myApp;
(function (myApp) {
    angular.module(myApp.homeModuleId, [
        'ui.router'
    ]).config(HomeStateConfiguration);
    function HomeStateConfiguration($stateProvider) {
        $stateProvider.state(myApp.homeStateName, {
            url: 'home',
            controller: HomeController,
            controllerAs: 'vm',
            templateUrl: 'app/home/home.html',
            data: { pageTitle: 'Home' }
        });
    }
    HomeStateConfiguration.$inject = ['$stateProvider'];
    /**
     * Controller for the 'Home' state.
     */
    var HomeController = (function () {
        function HomeController(dataService, logger) {
            this.dataService = dataService;
            this.logger = logger;
            this.activate();
        }
        HomeController.prototype.activate = function () {
            var _this = this;
            this.dataService.getData().then(function (data) {
                _this.data = data;
                _this.logger.debug('home state data loaded.');
            });
        };
        HomeController.$inject = [myApp.dataServiceId, myApp.loggerServiceId];
        return HomeController;
    })();
    myApp.HomeController = HomeController;
    angular.module(myApp.homeModuleId).controller(myApp.homeControllerId, HomeController);
})(myApp || (myApp = {}));
