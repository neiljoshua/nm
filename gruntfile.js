module.exports = function(grunt) {

  grunt.initConfig({

    compass: {
      dist: {
        options: {
          sassDir: 'src/sass/',
          cssDir: 'src/css/',
          specify: 'src/sass/style.scss'
        }
      }
    },

    concat: {
      css: {
        src: ['src/css/vendors/slick-theme.css', 'src/css/vendors/slick.css'],
        dest: 'src/css/vendors.css'
      },
      js: {
        options: {
          separator: ';',
        },
        src: ['src/js/plugins/jquery.js', 'src/js/plugins/slick.js'],
        dest: 'src/js/plugins.js',
      }
    },

    jshint: {
      all: ['src/js/scripts.js']
    },

    clean: {
      dist: ['dist']
    },

    uglify: {
      dev: {
        expand: true,
        files: {
          'dist/js/scripts.min.js': ['src/js/plugins.js', 'src/js/scripts.js']
        }
      }
    },

    cssmin: {
      target : {
        src : ['src/css/vendors.css', 'src/css/style.css'],
        dest : 'dist/css/styles.min.css'
      }
    },

    copy: {
      build: {
        expand: true,
        cwd: 'src/',
        src: ['images/**', 'css/*.gif', 'css/fonts/*', 'font/**'],
        dest: 'dist/'
      }
    },

    watch: {
      css: {
        files: ['src/sass/*.scss', 'src/css/*.css'],
        tasks: ['compass','concat']
      },
      js: {
        files: ['src/js/**/*.js'],
        tasks: ['concat']
      }
    }

  });

  grunt.loadNpmTasks('grunt-cdn');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['compass','jshint', 'concat', 'watch']);
  grunt.registerTask('dev', ['compass', 'jshint', 'concat', 'watch']);
  grunt.registerTask('build', ['clean', 'copy', 'uglify', 'cssmin']);

};
