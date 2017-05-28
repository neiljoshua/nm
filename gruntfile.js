module.exports = function(grunt) {
// Project configuration.
grunt.initConfig({
 // Tasks
 compass: {
    dist: {
      options: {
        sassDir: 'src/sass/',
        specify: 'src/sass/styles.scss',
        cssDir: 'src/css/'
      }
    }
  },

  concat: {
    dist: {
      src: ['src/css/vendors/slick-theme.css', 'src/css/vendors/slick.css',
          'src/css/vendors/animate.css', 'src/css/vendors/fontello.css'],
      dest: 'vendors.css',
    },
  },

  uglify: {
    my_target: {
      files: {
        'nm.min.js': ['src/js/nm.js'],
        'plugins.min.js': ['src/js/plugins/*.min.js']
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
grunt.registerTask('dev', ['compass']);
}
 