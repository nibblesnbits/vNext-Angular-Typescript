module.exports = {
  less: {
    files: ["assets/**/*.less"],
    tasks: ['less']
  },
  app: {
      files: ['app/**/*.js', 'app/**/*.html'],
      tasks: ['copyto'],
      options: {
          spawn: false
      },
  }
};