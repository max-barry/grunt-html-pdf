/*
* grunt-html-pdf
* https://github.com/Max.Barry/grunt-html-pdf
*
* Copyright (c) 2015 Max Barry
* Licensed under the MIT license.
*/

'use strict';

var pdf = require('html-pdf');

module.exports = function(grunt) {

    grunt.registerMultiTask('html_pdf', 'Grunt wrapper for the Node package html-pdf', function() {
        // Merge task-specific and/or target-specific options with these defaults.
        var options = this.options({
            separator: "\n"
        });

        var done = this.async(),
            async = grunt.util.async;

        var count = this.files.length;
        async.forEach(this.files, function(f) {
            /**
            Filter the list of provided files to check they exist. Warn if they don't.

            Push the source of each file to an array called 'src'.

            If multiple input files have been supplied for a single destination, concatenate them.
            */
            var src =   f.src
                        .filter(function(filepath) {
                            if (!grunt.file.exists(filepath)) {
                                grunt.log.warn("Source file \"" + filepath + "\" not found.");
                                return false;
                            } else {
                                return true;
                            }
                        })
                        .map(function(filepath) {
                            return grunt.file.read(filepath);
                        })
                        .join(grunt.util.normalizelf(options.separator));

            /**
            Action the html-pdf package api.

            On callback write the file to the provided destination.
            */
            pdf.create(src, options).toFile(f.dest, function(err, res){
                if (err) {
                    grunt.log.error("ERROR! Could not convert the source file to a PDF\n" + err);
                    done();
                    return;
                }

                grunt.log.ok("Successfully created " + f.dest);
                if(--count === 0) {
                    done();
                }
            });

        });

    });

};
