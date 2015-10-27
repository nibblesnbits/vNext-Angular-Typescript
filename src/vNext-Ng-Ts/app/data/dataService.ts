
/*

    --- Basic Angular.js Services in TypeScript ---
    
    This file demonstrates how to implement simple Angular.js Services in
    TypeScript.
    
    The most straight forward way of creating a service is to define two
    elements: an interface defining the calls to expose, and a class that
    implements that interface.
    
    Registering the service with Angular is done by passing in the unique
    identifier of the service and the name of the service itself.

*/

module myApp {
    /**
     * Service for accessing common data
     */
    export interface IDataService {
        /**
         * Get a set of BS data
         */
        getData(): angular.IPromise<any[]>
    }

    export class DataService implements IDataService {
        public static $inject = ['$http', appConfigServiceId, loggerServiceId];

        private baseUrl: string;

        constructor(
            private $http: angular.IHttpService, 
            private appConfig: IAppConfigService,
            private logger: ILogger) {
			
            this.baseUrl = appConfig.DataApiUrl;
        }

        public getData(): angular.IPromise<any[]> {
            this.logger.log('making call to ' + this.baseUrl + "/data");
            return this.$http.get(this.baseUrl + "/data").then((resp: angular.IHttpPromiseCallbackArg<any[]>) => {
                return resp.data;
            });
        }
    }

    angular.module(dataModuleId, []).service(dataServiceId, DataService);
}