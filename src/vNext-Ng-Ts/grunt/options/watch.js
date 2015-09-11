module.exports = {
    app: {
        files: ['app/**/*.js', 'app/**/*.html'],
        tasks: ['copyto'],
        options: {
            spawn: false
        },
    }
};