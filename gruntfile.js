module.exports = function(grunt) {

  grunt.initConfig( {
    jshint: {
      files: ['src/*.js', 'test/*.js', 'public/*.js', 'public/controllers/*.js']
    },

    watch: {
      tasks: ['jshint'],
      files: ['<%= jshint.files %>']
    }
  });
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jshint', 'watch'])
};