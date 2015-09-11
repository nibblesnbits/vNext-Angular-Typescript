module.exports = {
    options: {
        configFile: "protractor.conf.js",

        keepAlive: false, // If false, the grunt process stops when the test fails. 
        noColor: false,
        args: {

        }
    },
    default: {
        options: {
            configFile: "protractor.conf.js",
            args: {}
        }

    }
};