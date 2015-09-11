# vNext-Angular-Typescript
Example implementation of a [ASP.NET vNext](http://www.asp.net/mvc/overview/getting-started/introduction/getting-started)/[Angular.js](https://angular.io/)/[Typescript](http://www.typescriptlang.org/) application

##Running this example
To run this example, open `vNext-Ng-Ts.sln` in Visual Studio 2015.  It will take care of installing the necessary dependencies.  Optionally, you may install the Typescript definition files via the command line.
```bash
tsd install
```
Then you may run the unit tests ([Karma](http://karma-runner.github.io/0.13/index.html) and [Protractor](https://angular.github.io/protractor/#/)).
```bash
node_modules/.bin/karma start
```

>NOTE: By the default configuration in this project, Karma requires [PhantomJS](http://phantomjs.org/) to be installed and in your `PATH`.

To run the Protractor tests, first setup [Selenium](http://www.seleniumhq.org/).
```bash
node_modules/.bin/webdriver-manager update --standalone
node_modules/.bin/webdriver-manager start
```
Then, in a Visual Studio, start the server. (`Ctrl+F5`)
Then, in a second console, start Protractor.
```bash
node_modules/.bin/protractor
```