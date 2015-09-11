var myApp;
(function (myApp) {
    var myDirective = (function () {
        function myDirective($http) {
            this.$http = $http;
            this.restrict = 'AE';
            this.template = "<p>I'm a directive!</p>";
            this.link = function (scope, element, attrs) {
                element.addClass('someClass');
            };
        }
        myDirective.factory = function () {
            var directive = function ($http) {
                return new myDirective($http);
            };
            directive.$inject = ['$http'];
            return directive;
        };
        return myDirective;
    })();
    angular.module(myApp.commonModuleId).directive('myDirective', myDirective.factory());
})(myApp || (myApp = {}));
