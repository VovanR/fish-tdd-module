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

        # grunt qunit (run all tests)
        # grunt qunit --test foo (run `foo` test)
        qunit:
            all:
                src: [
                    'static/test/**/' + (grunt.option('test') or '*') + '-test.html',
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
