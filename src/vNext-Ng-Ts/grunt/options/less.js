module.exports = {
  default: {
    files: [{
      expand: true,
      cwd: 'assets/css',
      src: ['**/*.less'],
      dest: 'wwwroot/assets/css',
      ext: '.css',
    }, ]
  }
};