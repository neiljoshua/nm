module.exports = function(grunt) {
// Project configuration.
grunt.initConfig({
 // Tasks
 compass: {
    dist: {
      options: {
        sassDir: 'src/sass/',
        specify: 'src/sass/nm1.scss',
        cssDir: 'src/css'
      }
    }
  },

	concat: {
    dist: {
      src: ['src/css/owl.carousel.css', 'src/css/owl.theme.css',
          'src/css/animate.css', 'src/css/fontello.css',  
      		'src/css/style.css','src/css/responsive.css' ],
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
// grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-uglify');

// Default task(s).
grunt.registerTask('default', [ 'concat', 'uglify']);
grunt.registerTask('dev', ['compass']);
}
 