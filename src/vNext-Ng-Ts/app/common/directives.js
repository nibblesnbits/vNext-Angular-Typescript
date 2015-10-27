/*
    --- Angular.js Diretives in TypeScript ---
    
    This file demonstrates a simple method for defining Angular.js
    Directives in TypeScript.
    
    The approach for defining directives with Typescript is 2-fold:
    1.	Defining a class, implementing IDirective, with the appropiate
        functions and properties
    2.	Defining a factory function that returns an instance of the
        directive and accepts any necessary dependencies.
        
    The most critical piece of this design is the factory() method.
    This method returns a function with a $inject propery defined,
    which allows passing the result of that fuction directly into
    Angular's directive() function.
    
    In order to define the dependencies necessary in the directive,
    simply include them in the $inject array on the `directive`
    variable within the `factory()` function.
    
    For convenience and to save on some magic strings, each Directive
    also includes a DirectiveName property, which we can use in other
    code, such a unit tests.
*/
var myApp;
(function (myApp) {
    var CurrentTimeDirective = (function () {
        function CurrentTimeDirective($interval, $filter) {
            var _this = this;
            this.$interval = $interval;
            this.restrict = 'E';
            this.scope = {
                format: '@'
            };
            this.link = function (scope, element, attrs) {
                var timeoutId;
                var updateTime = function (elem) {
                    element.text(_this.momentFilter(moment(), scope.format));
                };
                element.on('$destroy', function () {
                    _this.$interval.cancel(timeoutId);
                });
                timeoutId = _this.$interval(function () {
                    updateTime(element);
                }, 1000);
            };
            this.momentFilter = $filter(myApp.momentFilterId);
        }
        Object.defineProperty(CurrentTimeDirective, "DirectiveName", {
            get: function () { return 'currentTime'; },
            enumerable: true,
            configurable: true
        });
        ;
        CurrentTimeDirective.factory = function () {
            var directive = function ($interval, momentFilter) {
                return new CurrentTimeDirective($interval, momentFilter);
            };
            directive.$inject = ['$interval', '$filter'];
            return directive;
        };
        return CurrentTimeDirective;
    })();
    angular.module(myApp.commonModuleId).directive(CurrentTimeDirective.DirectiveName, CurrentTimeDirective.factory());
    var MyTemplateDirective = (function () {
        function MyTemplateDirective() {
            this.restrict = 'E';
            this.templateUrl = "app/templates/myTemplateDirective.html";
            this.scope = {
                options: '=',
                data: '='
            };
            this.link = function (scope, element, attrs) {
                element.addClass('templated');
            };
        }
        Object.defineProperty(MyTemplateDirective, "DirectiveName", {
            get: function () { return 'myTemplateDirective'; },
            enumerable: true,
            configurable: true
        });
        ;
        MyTemplateDirective.factory = function () {
            var directive = function () {
                return new MyTemplateDirective();
            };
            directive.$inject = [];
            return directive;
        };
        return MyTemplateDirective;
    })();
    angular.module(myApp.commonModuleId).directive(MyTemplateDirective.DirectiveName, MyTemplateDirective.factory());
})(myApp || (myApp = {}));
