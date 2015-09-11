var myApp;
(function (myApp) {
    var GreetingProvider = (function () {
        function GreetingProvider() {
            this.greeting = "Hello World!";
        }
        // Configuration function
        GreetingProvider.prototype.setGreeting = function (greeting) {
            this.greeting = greeting;
        };
        // Provider's factory function
        GreetingProvider.prototype.$get = function () {
            var _this = this;
            return {
                getGreeting: function () { return _this.greeting; }
            };
        };
        return GreetingProvider;
    })();
    myApp.GreetingProvider = GreetingProvider;
    angular.module(myApp.commonModuleId).provider(myApp.greetingProviderId, GreetingProvider);
})(myApp || (myApp = {}));
