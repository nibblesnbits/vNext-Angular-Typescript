module.exports = {
    default: {
        configFile: 'karma.conf.js',
        singleRun: true,
        browsers: ['PhantomJS']
    },
    chrome: {
        configFile: 'karma.conf.js',
        singleRun: false,
        browsers: ['Chrome']
    }
};