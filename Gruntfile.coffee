# gruntjs.com

module.exports = (grunt) ->
    'use strict'

    require('load-grunt-tasks')(grunt)

    grunt.initConfig
        jshint:
            all:
                src: [
                    'static/js/**/*.js',
                    'static/test/**/*.js',
                ]

        qunit:
            all: [
                'static/test/**/*.html',
            ]

        watch:
            jshint:
                files: [
                    'static/js/**/*.js',
                    'static/test/**/*.js',
                ]
                tasks: 'newer:jshint:all'

            qunit:
                files: [
                    'static/test/**/*.js',
                    'static/test/**/*.html',
                ]
                tasks: 'qunit:all'

    grunt.registerTask 'default', ['jshint', 'watch']
