/*
    declarations.ts
    
    This file is used as a single point of access for all the dependency
    injection identifiers required througout the application.
    Using a common set of constants for these values reduces the
    likelihood of typos in module names, which can sometimes be tough
    to track down.  Any new module should have an entry here.
    
    It is also used for other common constants, such as state names.
    
    Using this method allows for consistency throughout the codebase,
    as well as the elimination of many magic strings, and easier code
    hints in your editor.
    
*/
var myApp;
(function (myApp) {
    myApp.commonModuleId = 'common';
    myApp.appModuleId = 'app';
    myApp.dataModuleId = 'dataModule';
    myApp.dataServiceId = 'dataService';
    myApp.shellModuleId = 'app.shell';
    myApp.homeModuleId = 'app.home';
    myApp.homeControllerId = 'homeController';
    myApp.homeStateName = 'app.home';
    myApp.notifierServiceId = 'notifierService';
    myApp.notifierProviderId = myApp.notifierServiceId + 'Provider';
    myApp.storageServiceFactoryId = 'storageServiceFactory';
    myApp.appConfigServiceId = 'appConfigService';
    myApp.appConfigProviderId = myApp.appConfigServiceId + 'Provider';
    myApp.loggerServiceId = 'loggerService';
    myApp.momentFilterId = 'momentFilter';
})(myApp || (myApp = {}));
