module myApp {
	export interface IGreetingProvider {
		getGreeting(): string;
	}
	
	export class GreetingProvider implements angular.IServiceProvider {
		private greeting = "Hello World!";
	
		// Configuration function
		public setGreeting(greeting: string) {
			this.greeting = greeting;
		}
	
		// Provider's factory function
		public $get() : IGreetingProvider {
			return {
				getGreeting: () => { return this.greeting; }
			};
		}
	}
	
	angular.module(commonModuleId).provider(greetingProviderId, GreetingProvider);
}