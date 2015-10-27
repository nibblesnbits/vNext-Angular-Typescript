
module myApp {
    'use strict';

    angular.module(appModuleId, [
        shellModuleId,
        homeModuleId,
        dataModuleId,
        commonModuleId,
        'ui.router',
        'ngCookies'
    ])
        .constant(configConstKey, {
            config_dataApiUrl: '/api'
        })
        .config(LoggerConfiguration)
        .config(ExceptionHandlerConfiguration)
        .config(ApplicationConfiguration)
        .run(Run);

    
    function Run($rootScope: angular.IRootScopeService, $state: angular.ui.IStateService, $stateParams: angular.ui.IStateParamsService) {
        
        $rootScope["$state"] = $state;
        $rootScope["$stateParams"] = $stateParams;
        $rootScope.$on('$stateChangeSuccess', function (event: angular.IAngularEvent, toState: angular.ui.IState) {
            if (angular.isDefined(toState.data)) {
                if (angular.isDefined(toState.data.pageTitle)) {
                    $rootScope["pageTitle"] = toState.data.pageTitle + ' | MyApp';
                }
            }
        });
    }
    Run.$inject = ['$rootScope', '$state', '$stateParams']; 
}