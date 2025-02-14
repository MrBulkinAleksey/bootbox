module.exports = function (grunt) {
    'use strict';
    grunt.initConfig({
        concat: {
            options: {
                separator: ';',
            },
            dist: {
                src: ['bootbox.js', 'bootbox.locales.js'],
                dest: 'bootbox.all.js',
            }
        },
          
        uglify: {
            options: {
                compress: true,
                mangle: true,
                banner: grunt.file.read('header.txt'),
                output:{
                    quote_style: 3
                }
            },
            my_target: {
                files: {
                    'dist/bootbox.min.js': ['bootbox.js'],
                    'dist/bootbox.locales.min.js': ['bootbox.locales.js'],
                    'dist/bootbox.all.min.js': ['bootbox.all.js']
                }
            }
        },

        jshint: {
            options: {
                jshintrc: '.jshintrc',
                force: true
            },
            all: ['bootbox.js', 'bootbox.locales.js']
        },

        karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-karma');

    grunt.registerTask('default', ['concat', 'uglify', 'jshint']);
};  