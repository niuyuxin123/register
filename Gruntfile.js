
module.exports = function (grunt) {
  grunt.initConfig({
    htmlmin: {
      options: {
        collapseWhitespace: true
      },
      files: {
        src: './index.html',
        dest: 'dist/index.html'
      }
    },
    cssmin: {
      'dist/layout.css': 'layout.css'
    },
    uglify: {
      release:{
        files: {
          'dist/main.js': 'main.js'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks("grunt-contrib-copy");

  grunt.registerTask('minify', ['htmlmin', 'cssmin', 'uglify']);
  grunt.registerTask("release", ['copy', 'htmlmin','cssmin', 'uglify']);
};

