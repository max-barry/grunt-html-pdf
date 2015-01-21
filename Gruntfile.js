/*
 * grunt-html-pdf
 * https://github.com/Max.Barry/grunt-html-pdf
 *
 * Copyright (c) 2015 Max Barry
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Configuration to be run (and then tested).
    html_pdf: {
      example: {
        files: {
          'examples/example.pdf': ['examples/example.html',],
        }
      }
    },
    bump: {
      options: {
        push: false,
        pushTo: "origin",
        files: [
          "package.json",
        ]
      }
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-bump');

  grunt.registerTask('default', ['jshint', ]);

};
