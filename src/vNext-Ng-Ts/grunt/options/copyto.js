module.exports = {
    default: {
        files: [
            {
                expand: true,
                cwd: '.',
                src: ['app/**/*.js*'],
                dest: 'wwwroot/'
            }, {
                expand: true,
                cwd: '.',
                src: ['app/**/*.html'],
                dest: 'wwwroot/'
            }, {
                expand: true,
                cwd: '.',
                src: ['index.html'],
                dest: 'wwwroot/'
            }, {
                expand: true,
                cwd: '.',
                src: ['styles/**/*.css'],
                dest: 'wwwroot'
            }, {
                expand: true,
                cwd: '.',
                src: ['images/**/*.*'],
                dest: 'wwwroot'
            }, {
                expand: true,
                cwd: '.',
                src: ['favicon.ico'],
                dest: 'wwwroot'
            }
        ]
    }
};