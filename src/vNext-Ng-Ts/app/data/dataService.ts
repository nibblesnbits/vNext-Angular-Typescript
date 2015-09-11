module myApp {
    export interface IDataService {
        getData(): angular.IPromise<any[]>
    }

    export class DataService implements IDataService {
        public static $inject = ['$http'];


        constructor(private $http: angular.IHttpService) {
			
        }

        public getData(): angular.IPromise<any> {
            return this.$http.get("/api/Data").then((resp: angular.IHttpPromiseCallbackArg<any[]>) => {
                return resp.data;
            });
        }

    }

    angular.module(dataModuleId, []).service(dataServiceId, DataService);
}