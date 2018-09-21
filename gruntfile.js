module.exports = function(grunt) {
// Project configuration.
grunt.initConfig({
 // Tasks
 compass: {
    dist: {
      options: {
        sassDir: 'src/sass/',
        specify: 'src/sass/styles.scss',
        cssDir: 'dist/css/'
      }
    }
  },

  concat: {
    dist: {
      src: ['src/css/vendors/slick-theme.css', 'src/css/vendors/slick.css',
          'src/css/vendors/animate.css', 'src/css/vendors/fontello.css'],
      dest: 'dist/css/vendors.css',
    },
  },

  uglify: {
    my_target: {
      files: {
        'dist/js/nm.min.js': ['src/js/nm.js'],
        'dist/js/plugins.min.js': ['src/js/plugins/*.min.js']
      }
    }
  },

  watch: {
    css: {
      files: ['src/sass/*.scss'],
      tasks: ['compass']
    }
  }

});

// Load the plugin that provides the tasks.
grunt.loadNpmTasks('grunt-contrib-compass');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-uglify');

// Default task(s).
grunt.registerTask('default', [ 'concat', 'uglify', 'watch']);
grunt.registerTask('dev', ['compass'], ['uglify']);
}
