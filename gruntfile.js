module.exports = function(grunt) {
// Project configuration.
grunt.initConfig({
 // Tasks
	concat: {
    dist: {
      src: ['src/css/animate.css', 'src/css/style.css', 
      		'src/css/responsive.css', 'src/css/fontello.css',
      		'src/css/owl.carousel.css', 'src/css/owl.theme.css'],
      dest: 'styles.css',
    },
  },

	uglify: {
	  my_target: {
      files: {
        'nm.min.js': ['src/js/nm.js'],
        'plugins.min.js': ['src/js/plugins/*.min.js']
      }
    }
	}

});

// Load the plugin that provides the "uglify" task.
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-concat');

// Default task(s).
grunt.registerTask('default', ['concat', 'uglify']);

}
 