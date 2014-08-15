# gruntjs.com

module.exports = (grunt) ->
    'use strict'

    require('load-grunt-tasks')(grunt)

    grunt.initConfig
        jshint:
            all:
                src: [
                    'static/js/**/*.js'
                ]

        watch:
            jshint:
                files: [
                    'static/js/**/*.js'
                ]
                tasks: 'newer:jshint:all'

    grunt.registerTask 'default', ['jshint', 'watch']
