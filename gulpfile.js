// See: http://gulpjs.com/

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');

gulp.task('lint', function () {
    return gulp.src([
            './static/js/**/*.js',
            './static/test/**/*.js',
        ])
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(jscs());
});

gulp.task('watch', function () {
    gulp.watch([
            './static/js/**/*.js',
            './static/test/**/*.js',
        ],
        [
            'lint',
        ]);
});

gulp.task('default', ['lint', 'watch']);
