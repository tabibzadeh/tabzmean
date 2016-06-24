module.exports = function(grunt) {

    // Show elapsed time after tasks run to visualize performance
   require('time-grunt')(grunt);

  grunt.initConfig({


    pkg: grunt.file.readJSON('package.json'),


    uglify: {

      options: {
        sourceMap: true,
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },

      main: {
        files: {
          'public/dist/js/tabzmean.min.js': [
            'public/bower/angular/angular.js',
            'public/bower/angular-route/angular-route.js',
            'public/bower/angular-resource/angular-resource.js',
            'public/bower/jquery/dist/jquery.js',
            'public/bower/foundation-sites/dist/foundation.js',
            'public/js/controllers/*.js',
            'public/js/services/*.js',
            'public/js/components/**/*.js',
            'public/js/app.js'
          ]
        }
      }

    },


    sass: {

      main: {
        options: {
          style: 'compressed'
        },
        files: {
          'public/dist/css/tabzmean.min.css': 'public/scss/app.scss'
        }
      }
    },

    pug: {
        compile: {
            options: {
                client: false,
                pretty: true
            },

            files: [{
                cwd: "/public/templates",
                src: "**/*.pug",
                dest: "/public/views",
                expand: true,
                ext: ".html"
            }]
        }
    },


    watch: {

        sassMain: {
            files: ['public/scss/**'],
            tasks: ['sass:main'],
        },

        jsMain: {
            files: ['public/js/**'],
            tasks: ['uglify:main']
        },

        pugMain: {
            files: ['public/templates/**'],
            tasks: ['pug:compile']
        }

    },

    // configure nodemon
    nodemon: {
      dev: {
        script: 'server.js'
        }
    },

    // run watch and nodemon at the same time
    concurrent: {
      options: {
        logConcurrentOutput: true
      },
      tasks: ['nodemon', 'watch']
  },

    // config notify plugin for failed times
    notify: {

      uglify: {
        options: {
          title: 'tabzmean',
          message: 'Uglify: Completed Successfully',
        }
      },

      sass: {
        options: {
          title: 'tabzmean',
          message: 'Sass: Completed Successfully',
        }
      }

  }



  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Load the plugin that provides the "sass" task.
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Load the plugin that provides the "watch" task.
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Load the plugin that provides the "notify" task.
  grunt.loadNpmTasks('grunt-notify');

  // Load the plugin that handles and serves pug templates.
  grunt.loadNpmTasks('grunt-contrib-pug');

  // Load the plugin that fires up the node server.
  grunt.loadNpmTasks('grunt-nodemon');

  // Load the plugin that runs watch and nodemon in parallel.
  grunt.loadNpmTasks('grunt-concurrent');

  // Default task(s).
  grunt.registerTask('default', ['uglify:main', 'sass:main','pug', 'concurrent', 'nodemon', 'watch', 'notify']);


};
