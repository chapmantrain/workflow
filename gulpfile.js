var gulp = require('gulp');
var gutil = require('gulp-util');
var concat = require('gulp-concat');
var browserify = require('gulp-browserify');

var jsSources = [
  'components/scripts/test01.js',
  'components/scripts/test02.js'
];
gulp.task('log', function() {
  gutil.log("Hello World!");
});

gulp.task('js', function() {
  gulp.src(jsSources)
    .pipe(concat('script.js'))
    .pipe(browserify())
    .pipe(gulp.dest('builds/development/js'));
});
