// See: http://gulpjs.com/

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var mochaPhantomJS = require('gulp-mocha-phantomjs');

var changedFile = null;

gulp.task('lint', function () {
    return gulp.src(changedFile || ['./static/js/**/*.js', './static/test/**/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(jscs());
});

gulp.task('test', function () {
    return gulp
        .src('./static/test/**/*-test.html')
        .pipe(mochaPhantomJS({ reporter: 'spec' }));
});

gulp.task('watch', function () {
    gulp.watch(['./static/js/**/*.js', './static/test/**/*.js'], function (e) {
            changedFile = e.path;
            gulp.run('lint');
        });
});

gulp.task('default', ['lint', 'test']);
